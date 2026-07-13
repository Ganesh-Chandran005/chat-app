import React, { useState } from 'react';
import { MessageSquare, Compass, Layers, Radio, Settings, LogOut, Sparkles } from 'lucide-react';
import { Sidebar, ChatRoom, UserPanel, Modal } from './components';

export default function App() {
  const [rooms, setRooms] = useState([
    { id: 'general', name: 'general-matrix', desc: 'Core global structural node chat' },
    { id: 'dev-core', name: 'dev-subsystem', desc: 'Architecture compiler logging & state debugging' },
    { id: 'design-ambient', name: 'ambient-ui', desc: 'Gradients, layout glassmorphism, and styling vectors' }
  ]);
  const [activeRoomId, setActiveRoomId] = useState('general');
  const [showModal, setShowModal] = useState(false);
  const [newRoomName, setNewRoomName] = useState('');
  const [newRoomDesc, setNewRoomDesc] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  
  const [messages, setMessages] = useState({
    'general': [
      { id: 1, user: 'System-Core', avatar: '⚡', text: 'Ambient network layer initialized successfully.', time: '09:42 PM', isSystem: true },
      { id: 2, user: 'Annatony2', avatar: '🎮', text: 'Check out the new backdrop blur filters on the dashboard container. It looks incredible.', time: '09:44 PM' }
    ],
    'dev-core': [
      { id: 1, user: 'Compiler-Bot', avatar: '⚙️', text: 'Vite engine operational. Hot module replacement runtime active.', time: '08:15 PM', isSystem: true }
    ],
    'design-ambient': [
      { id: 1, user: 'Ganesh', avatar: '🌌', text: 'We need high-saturation pink and cyan blurred vector orbs floating underneath the layers.', time: '09:50 PM' }
    ]
  });

  const activeRoom = rooms.find(r => r.id === activeRoomId) || rooms[0];
  const currentMessages = messages[activeRoomId] || [];

  const handleCreateRoom = (e) => {
    e.preventDefault();
    if (!newRoomName.trim()) return;
    
    const newId = newRoomName.toLowerCase().replace(/\s+/g, '-');
    if (rooms.some(r => r.id === newId)) return;

    const newRoom = {
      id: newId,
      name: newRoomName.toLowerCase().replace(/\s+/g, '-'),
      desc: newRoomDesc || 'Custom operational vector chatroom.'
    };

    setRooms([...rooms, newRoom]);
    setMessages({
      ...messages,
      [newId]: [{ id: Date.now(), user: 'System-Core', avatar: '⚡', text: `Room #${newRoom.name} established cleanly.`, time: 'Just Now', isSystem: true }]
    });
    setActiveRoomId(newId);
    setNewRoomName('');
    setNewRoomDesc('');
    setShowModal(false);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMsg = {
      id: Date.now(),
      user: 'Ganesh',
      avatar: '🌌',
      text: inputMessage,
      time: 'Just Now'
    };

    setMessages({
      ...messages,
      [activeRoomId]: [...currentMessages, newMsg]
    });
    setInputMessage('');
  };

  return (
    <div className="relative w-screen h-screen flex overflow-hidden bg-[#030014] select-none">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

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
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-red-500/70 hover:text-red-400 cursor-pointer transition-colors">
            <LogOut className="w-5 h-5" />
          </div>
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
        currentMessages={currentMessages}
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSendMessage={handleSendMessage}
      />

      <UserPanel />

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