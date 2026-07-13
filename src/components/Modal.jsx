import React from 'react';

export default function Modal({ newRoomName, setNewRoomName, newRoomDesc, setNewRoomDesc, handleCreateRoom, setShowModal }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-[#0b082e] border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl relative">
        <h3 className="text-base font-bold text-white tracking-wide uppercase mb-1">Establish New Chat Vector</h3>
        <p className="text-xs text-zinc-400 mb-4">Initialize an isolated message sequence parameters node.</p>
        <form onSubmit={handleCreateRoom} className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold text-purple-400 uppercase tracking-wider mb-1">Vector Designation Name</label>
            <input 
              type="text" 
              value={newRoomName}
              onChange={(e) => setNewRoomName(e.target.value)}
              placeholder="e.g., frontend-subsystem" 
              className="w-full bg-black/40 border border-white/10 focus:border-purple-500/40 rounded-xl px-3 py-2 text-sm text-zinc-200 outline-none transition-all placeholder-zinc-700"
              required
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-purple-400 uppercase tracking-wider mb-1">Node Operational Description</label>
            <input 
              type="text" 
              value={newRoomDesc}
              onChange={(e) => setNewRoomDesc(e.target.value)}
              placeholder="e.g., Discussion array for system mechanics" 
              className="w-full bg-black/40 border border-white/10 focus:border-purple-500/40 rounded-xl px-3 py-2 text-sm text-zinc-200 outline-none transition-all placeholder-zinc-700"
            />
          </div>
          <div className="flex items-center justify-end gap-3 pt-2">
            <button 
              type="button" 
              onClick={() => setShowModal(false)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
            >
              Abort Sequence
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-900/40 transition-all"
            >
              Compile Vector
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}