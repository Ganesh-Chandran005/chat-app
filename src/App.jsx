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
        avatar: user.photoURL ? <img src={user.photoURL} alt="avatar" className="w-full h-full rounded-xl object-cover" /> : '🌌',
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
      <div className="w-screen h-screen flex items-center justify-center bg-[#030014] text-purple-400 text-sm font-mono tracking-widest">
        INITIALIZING CORE SECURITY NODES...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="relative w-screen h-screen flex flex-col items-center justify-center bg-[#030014] overflow-hidden select-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="z-10 text-center max-w-sm px-6 py-8 rounded-2xl bg-[#06041d]/40 border border-white/5 backdrop-blur-md shadow-2xl">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] mx-auto mb-6">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-wider text-white uppercase mb-2">Ambient Terminal</h1>
          <p className="text-xs text-zinc-500 mb-6">Secure decryption node wrapper application sequence.</p>
          <button 
            onClick={handleLogin}
            className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-900/40 transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
          >
            <LogIn className="w-4 h-4" /> Authenticate via Google
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