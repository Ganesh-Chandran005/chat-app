import React, { useState, useEffect } from 'react';
import { MessageSquare, Compass, Layers, Radio, Settings, LogOut, Sparkles, LogIn } from 'lucide-react';
import { Sidebar, ChatRoom, UserPanel, Modal } from './components';
import { db, auth, provider } from './firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [activeRoomId, setActiveRoomId] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newRoomName, setNewRoomName] = useState('');
  const [newRoomDesc, setNewRoomDesc] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'rooms'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const roomsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setRooms(roomsData);
      if (roomsData.length > 0 && !activeRoomId) {
        setActiveRoomId(roomsData[0].id);
      }
    });
    return () => unsubscribe();
  }, [user, activeRoomId]);

  useEffect(() => {
    if (!user || !activeRoomId) return;

    const q = query(
      collection(db, 'rooms', activeRoomId, 'messages'),
      orderBy('createdAt', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData = snapshot.docs.map(doc => {
        const data = doc.data();
        let formattedTime = 'Just Now';
        if (data.createdAt?.toDate) {
          formattedTime = data.createdAt.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }
        return {
          id: doc.id,
          ...data,
          time: formattedTime
        };
      });
      setMessages(messagesData);
    });

    return () => unsubscribe();
  }, [user, activeRoomId]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setActiveRoomId('');
      setRooms([]);
      setMessages([]);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleCreateRoom = async (e) => {
    e.preventDefault();
    if (!newRoomName.trim()) return;

    const roomSlug = newRoomName.toLowerCase().replace(/\s+/g, '-');

    try {
      const roomRef = await addDoc(collection(db, 'rooms'), {
        name: roomSlug,
        desc: newRoomDesc || 'Custom operational vector chatroom.'
      });

      await addDoc(collection(db, 'rooms', roomRef.id, 'messages'), {
        user: 'System-Core',
        avatar: '⚡',
        text: `Room #${roomSlug} established cleanly inside Firebase Firestore.`,
        isSystem: true,
        createdAt: serverTimestamp()
      });

      setActiveRoomId(roomRef.id);
      setNewRoomName('');
      setNewRoomDesc('');
      setShowModal(false);
    } catch (error) {
      console.error("Error creating room: ", error);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || !activeRoomId) return;

    try {
      await addDoc(collection(db, 'rooms', activeRoomId, 'messages'), {
        user: user.displayName,
        avatar: user.photoURL ? user.photoURL : '🌌',
        text: inputMessage,
        createdAt: serverTimestamp()
      });
      setInputMessage('');
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  if (loading) {
    return (
      <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#030014', color: '#a855f7', fontFamily: 'monospace', letterSpacing: '0.2em', fontSize: '12px' }}>
        INITIALIZING CORE SECURITY NODES...
      </div>
    );
  }

  if (!user) {
    return (
      <div 
        style={{ 
          width: '100vw', 
          height: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          backgroundColor: '#030014',
          fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
          margin: 0,
          padding: 0,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50%', height: '50%', backgroundColor: 'rgba(147, 51, 234, 0.15)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '50%', height: '50%', backgroundColor: 'rgba(6, 182, 212, 0.15)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />

        <div 
          style={{ 
            zIndex: 10, 
            textAlign: 'center', 
            maxWidth: '400px', 
            width: '90%', 
            padding: '40px 30px', 
            borderRadius: '24px', 
            backgroundColor: 'rgba(6, 4, 29, 0.4)', 
            border: '1px solid rgba(255, 255, 255, 0.08)', 
            backdropFilter: 'blur(20px)', 
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)'
          }}
        >
          <div 
            style={{ 
              width: '56px', 
              height: '56px', 
              borderRadius: '16px', 
              background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              boxShadow: '0 0 20px rgba(147, 51, 234, 0.4)', 
              margin: '0 auto 24px auto'
            }}
          >
            <Sparkles style={{ width: '24px', height: '24px', color: '#ffffff' }} />
          </div>

          <h1 
            style={{ 
              fontSize: '24px', 
              fontWeight: '800', 
              letterSpacing: '0.05em', 
              color: '#ffffff', 
              textTransform: 'uppercase', 
              margin: '0 0 8px 0' 
            }}
          >
            Welcome to ChatUp
          </h1>
          
          <p 
            style={{ 
              fontSize: '13px', 
              color: '#71717a', 
              margin: '0 0 32px 0', 
              fontWeight: '400' 
            }}
          >
            Sign in to initialize secure real-time operational nodes.
          </p>

          <button 
            onClick={handleLogin}
            style={{ 
              width: '100%', 
              padding: '14px', 
              borderRadius: '14px', 
              backgroundColor: '#9333ea', 
              color: '#ffffff', 
              fontWeight: '600', 
              fontSize: '14px', 
              border: 'none', 
              cursor: 'pointer', 
              boxShadow: '0 8px 20px rgba(147, 51, 234, 0.3)', 
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#a855f7'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#9333ea'}
          >
            <LogIn style={{ width: '16px', height: '16px' }} /> Authenticate via Google
          </button>
        </div>
      </div>
    );
  }

  const activeRoom = rooms.find(r => r.id === activeRoomId) || { name: 'Loading...', desc: '' };

  return (
    <div className="relative w-screen h-screen flex overflow-hidden bg-[#030014] select-none">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-16 h-full bg-[#06041d]/60 border-r border-white/5 flex flex-col items-center py-6 justify-between z-20 backdrop-blur-md">
        <div className="flex flex-col gap-6 items-center w-full">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] cursor-pointer hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="w-8 h-[1px] bg-white/10" />
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-purple-400 border border-purple-500/20 cursor-pointer">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-500 hover:text-zinc-200 cursor-pointer transition-colors">
            <Compass className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-500 hover:text-zinc-200 cursor-pointer transition-colors">
            <Layers className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-500 hover:text-zinc-200 cursor-pointer transition-colors">
            <Radio className="w-5 h-5" />
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center w-full">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-500 hover:text-zinc-200 cursor-pointer transition-colors">
            <Settings className="w-5 h-5" />
          </div>
          <button onClick={handleLogout} className="w-10 h-10 rounded-xl flex items-center justify-center text-red-500/70 hover:text-red-400 cursor-pointer transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      <Sidebar 
        rooms={rooms} 
        activeRoomId={activeRoomId} 
        setActiveRoomId={setActiveRoomId} 
        setShowModal={setShowModal} 
      />

      <ChatRoom 
        activeRoom={activeRoom}
        currentMessages={messages}
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSendMessage={handleSendMessage}
      />

      <UserPanel currentUser={user} />

      {showModal && (
        <Modal 
          newRoomName={newRoomName}
          setNewRoomName={setNewRoomName}
          newRoomDesc={newRoomDesc}
          setNewRoomDesc={setNewRoomDesc}
          handleCreateRoom={handleCreateRoom}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}