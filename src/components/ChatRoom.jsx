import React from 'react';
import { Hash, Bell, Shield, HelpCircle, Paperclip, Smile, Send } from 'lucide-react';

export default function ChatRoom({ activeRoom, currentMessages, inputMessage, setInputMessage, handleSendMessage }) {
  return (
    <div className="flex-1 h-full flex flex-col z-20 bg-black/10 backdrop-blur-[2px]">
      <div className="h-16 border-b border-white/5 px-6 flex items-center justify-between bg-[#06041d]/20 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Hash className="w-5 h-5 text-purple-400" />
          <div className="flex flex-col">
            <h2 className="text-sm font-bold text-white tracking-wide uppercase">{activeRoom.name}</h2>
            <p className="text-xs text-zinc-500 mt-0.5">{activeRoom.desc}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-zinc-400">
          <div className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center cursor-pointer border border-transparent hover:border-white/5 transition-all">
            <Bell className="w-4 h-4" />
          </div>
          <div className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center cursor-pointer border border-transparent hover:border-white/5 transition-all">
            <Shield className="w-4 h-4" />
          </div>
          <div className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center cursor-pointer border border-transparent hover:border-white/5 transition-all">
            <HelpCircle className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {currentMessages.map((msg) => (
          <div key={msg.id} className={`flex items-start gap-4 max-w-3xl ${msg.isSystem ? 'bg-purple-950/20 border border-purple-500/10 p-3 rounded-xl backdrop-blur-sm' : ''}`}>
            <div className="w-9 h-9 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center text-base shadow-md shrink-0">
              {msg.avatar}
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className={`text-xs font-bold tracking-wide ${msg.isSystem ? 'text-purple-400' : 'text-zinc-200'}`}>{msg.user}</span>
                <span className="text-[10px] text-zinc-600">{msg.time}</span>
              </div>
              <p className={`text-sm mt-1 leading-relaxed ${msg.isSystem ? 'text-zinc-400 font-mono text-xs' : 'text-zinc-300'}`}>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-white/5 bg-[#06041d]/40 backdrop-blur-md">
        <form onSubmit={handleSendMessage} className="max-w-4xl mx-auto flex items-center gap-3 bg-black/30 border border-white/5 focus-within:border-purple-500/30 rounded-xl px-4 py-3 transition-all shadow-inner">
          <button type="button" className="text-zinc-500 hover:text-zinc-300 transition-colors">
            <Paperclip className="w-4 h-4" />
          </button>
          <input 
            type="text" 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={`Signal message down to #${activeRoom.name}...`} 
            className="bg-transparent border-none outline-none flex-1 text-sm text-zinc-200 placeholder-zinc-600"
          />
          <button type="button" className="text-zinc-500 hover:text-zinc-300 transition-colors">
            <Smile className="w-4 h-4" />
          </button>
          <div className="w-[1px] h-5 bg-white/10 mx-1" />
          <button type="submit" className="w-7 h-7 rounded-lg bg-purple-600 hover:bg-purple-500 flex items-center justify-center text-white shadow-md shadow-purple-900/40 transition-all hover:scale-105">
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}