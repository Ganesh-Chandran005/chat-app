import React from 'react';
import { Hash, Plus, Search } from 'lucide-react';

export default function Sidebar({ rooms, activeRoomId, setActiveRoomId, setShowModal }) {
  return (
    <div className="w-64 h-full bg-[#080625]/40 border-r border-white/5 flex flex-col z-20 backdrop-blur-md">
      <div className="p-4 border-b border-white/5 flex items-center justify-between">
        <span className="font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-purple-400 text-sm uppercase">
          Channels Core
        </span>
        <button 
          onClick={() => setShowModal(true)} 
          className="w-6 h-6 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 text-zinc-400 hover:text-white transition-all"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="p-3">
        <div className="relative flex items-center bg-black/20 border border-white/5 rounded-lg px-3 py-1.5 text-xs text-zinc-400">
          <Search className="w-3.5 h-3.5 mr-2 text-zinc-500" />
          <input type="text" placeholder="Filter vectors..." className="bg-transparent border-none outline-none w-full placeholder-zinc-600 text-zinc-300" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-2 space-y-0.5">
        {rooms.map((room) => (
          <div 
            key={room.id}
            onClick={() => setActiveRoomId(room.id)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all ${
              room.id === activeRoomId 
                ? 'bg-gradient-to-r from-purple-950/40 to-pink-950/20 border border-purple-500/30 text-white shadow-[inset_0_0_12px_rgba(168,85,247,0.15)]' 
                : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200 border border-transparent'
            }`}
          >
            <Hash className={`w-4 h-4 ${room.id === activeRoomId ? 'text-purple-400' : 'text-zinc-600'}`} />
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-medium truncate">{room.name}</span>
              <span className="text-[10px] text-zinc-500 truncate mt-0.5">{room.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}