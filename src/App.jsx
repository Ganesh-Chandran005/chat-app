import React, { useState, useEffect } from 'react';
import { MessageSquare, Compass, Radio, Settings, LogOut, Sparkles, LogIn } from 'lucide-react';
import { Sidebar, ChatRoom, UserPanel, Modal } from './components';
import { db, auth, provider } from './firebase';
import { signInWithRedirect, signOut, onAuthStateChanged, getRedirectResult } from 'firebase/auth';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const [rooms, setRooms] = useState([]);
  const [activeRoomId, setActiveRoomId] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newRoomName, setNewRoomName] = useState('');
  const [newRoomDesc, setNewRoomDesc] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) setUser(result.user);
      })
      .catch((error) => console.error("Redirect auth failed:", error));

    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      setAuthLoading(false);
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (!user || activeTab !== 'chat') return;
    const q = query(collection(db, 'rooms'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const roomsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRooms(roomsData);
      if (roomsData.length > 0 && !activeRoomId) {
        setActiveRoomId(roomsData[0].id);
      }
    });
    return () => unsubscribe();
  }, [user, activeRoomId, activeTab]);

  useEffect(() => {
    if (!user || !activeRoomId || activeTab !== 'chat') return;
    const q = query(collection(db, 'rooms', activeRoomId, 'messages'), orderBy('createdAt', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData = snapshot.docs.map(doc => {
        const data = doc.data();
        let formattedTime = 'Just Now';
        if (data.createdAt?.toDate) {
          formattedTime = data.createdAt.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }
        return { id: doc.id, ...data, time: formattedTime };
      });
      setMessages(messagesData);
    });
    return () => unsubscribe();
  }, [user, activeRoomId, activeTab]);

  const handleLogin = async () => {
    setAuthLoading(true);
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error(error);
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setActiveRoomId('');
      setRooms([]);
      setMessages([]);
      setActiveTab('chat');
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateRoom = async (e) => {
    e.preventDefault();
    if (!newRoomName.trim()) return;
    const roomSlug = newRoomName.toLowerCase().replace(/\s+/g, '-');
    try {
      const roomRef = await addDoc(collection(db, 'rooms'), { name: roomSlug, desc: newRoomDesc || '' });
      await addDoc(collection(db, 'rooms', roomRef.id, 'messages'), {
        user: 'System Bot',
        avatar: '🤖',
        text: `Welcome to #${roomSlug}! 📱 Note: If you are on mobile, make sure to use the bottom navigation layout to switch views, and scroll down inside panel drawers for accessing other features cleanly.`,
        isSystem: true,
        createdAt: serverTimestamp()
      });
      setActiveRoomId(roomRef.id);
      setNewRoomName('');
      setNewRoomDesc('');
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || !activeRoomId) return;
    try {
      await addDoc(collection(db, 'rooms', activeRoomId, 'messages'), {
        user: user.displayName,
        avatar: user.photoURL || '🌌',
        text: inputMessage,
        createdAt: serverTimestamp()
      });
      setInputMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  if (loading || authLoading) {
    return (
      <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#030014', color: '#a855f7', fontFamily: 'sans-serif' }}>
        Loading ChatUp...
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#030014', fontFamily: '"Inter", sans-serif' }}>
        <button onClick={handleLogin} style={{ padding: '14px 28px', borderRadius: '14px', backgroundColor: '#9333ea', color: '#fff', border: 'none', fontWeight: '600', cursor: 'pointer' }}>
          Sign In with Google
        </button>
      </div>
    );
  }

  const activeRoom = rooms.find(r => r.id === activeRoomId) || null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: isMobile ? 'column-reverse' : 'row', overflow: 'hidden', backgroundColor: '#030014', color: '#f1f1f1', fontFamily: '"Inter", sans-serif' }}>
      
      {/* Fixed Bottom Navigation Bar for Mobile */}
      <div style={{ 
        width: isMobile ? '100%' : '72px', 
        height: isMobile ? '64px' : '100%', 
        backgroundColor: 'rgba(6, 4, 29, 0.95)', 
        borderTop: isMobile ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
        borderRight: isMobile ? 'none' : '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex', 
        flexDirection: isMobile ? 'row' : 'column', 
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 30, 
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'row' : 'column', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'space-around' }}>
          <button onClick={() => setActiveTab('chat')} style={{ border: 'none', background: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifySelf: 'center', cursor: 'pointer', color: activeTab === 'chat' ? '#c084fc' : '#52525b' }}>
            <MessageSquare style={{ width: '20px', height: '20px' }} />
            <span style={{ fontSize: '10px', marginTop: '2px' }}>Chats</span>
          </button>
          <button onClick={() => setActiveTab('explore')} style={{ border: 'none', background: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifySelf: 'center', cursor: 'pointer', color: activeTab === 'explore' ? '#c084fc' : '#52525b' }}>
            <Compass style={{ width: '20px', height: '20px' }} />
            <span style={{ fontSize: '10px', marginTop: '2px' }}>Explore</span>
          </button>
          <button onClick={() => setActiveTab('live')} style={{ border: 'none', background: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifySelf: 'center', cursor: 'pointer', color: activeTab === 'live' ? '#c084fc' : '#52525b' }}>
            <Radio style={{ width: '20px', height: '20px' }} />
            <span style={{ fontSize: '10px', marginTop: '2px' }}>Streams</span>
          </button>
          <button onClick={() => setActiveTab('settings')} style={{ border: 'none', background: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifySelf: 'center', cursor: 'pointer', color: activeTab === 'settings' ? '#c084fc' : '#52525b' }}>
            <Settings style={{ width: '20px', height: '20px' }} />
            <span style={{ fontSize: '10px', marginTop: '2px' }}>Settings</span>
          </button>
          <button onClick={handleLogout} style={{ border: 'none', background: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifySelf: 'center', cursor: 'pointer', color: 'rgba(239, 68, 68, 0.9)' }}>
            <LogOut style={{ width: '20px', height: '20px' }} />
            <span style={{ fontSize: '10px', marginTop: '2px' }}>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Panel Frame Layout */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'row', height: '100%', width: '100%', overflow: 'hidden' }}>
        {activeTab === 'chat' && (
          rooms.length === 0 ? (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <button onClick={() => setShowModal(true)} style={{ padding: '12px 24px', borderRadius: '12px', backgroundColor: '#9333ea', border: 'none', color: '#fff', fontWeight: '600', cursor: 'pointer' }}>
                + Create Channel
              </button>
            </div>
          ) : (
            <>
              <Sidebar rooms={rooms} activeRoomId={activeRoomId} setActiveRoomId={setActiveRoomId} setShowModal={setShowModal} isMobile={isMobile} />
              <ChatRoom activeRoom={activeRoom} currentMessages={messages} inputMessage={inputMessage} setInputMessage={setInputMessage} handleSendMessage={handleSendMessage} isMobile={isMobile} />
              {!isMobile && <UserPanel currentUser={user} />}
            </>
          )
        )}

        {activeTab === 'explore' && <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}><h2>Explore</h2></div>}
        {activeTab === 'live' && <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}><h2>Streams</h2></div>}
        {activeTab === 'settings' && (
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
            <h2>Settings</h2>
            <p>User: {user?.displayName}</p>
          </div>
        )}
      </div>

      {showModal && (
        <Modal newRoomName={newRoomName} setNewRoomName={setNewRoomName} newRoomDesc={newRoomDesc} setNewRoomDesc={setNewRoomDesc} handleCreateRoom={handleCreateRoom} setShowModal={setShowModal} />
      )}
    </div>
  );
}