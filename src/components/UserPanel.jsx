import React from 'react';
import { Users } from 'lucide-react';

export default function UserPanel() {
  return (
    <div className="w-60 h-full bg-[#080625]/20 border-l border-white/5 hidden xl:flex flex-col z-20 backdrop-blur-md">
      <div className="p-4 border-b border-white/5 flex items-center gap-2 text-zinc-400">
        <Users className="w-4 h-4 text-purple-400" />
        <span className="text-xs font-bold tracking-wider uppercase">Active Node Cluster</span>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        <div className="flex items-center gap-3 px-2 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
          <div className="w-7 h-7 rounded-lg bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-xs">🌌</div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-zinc-300">Ganesh</span>
            <span className="text-[9px] text-zinc-500">Root Operator</span>
          </div>
        </div>
        <div className="flex items-center gap-3 px-2 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
          <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-xs">🎮</div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-zinc-300">Annatony2</span>
            <span className="text-[9px] text-zinc-500">Peer Vector</span>
          </div>
        </div>
      </div>
    </div>
  );
}