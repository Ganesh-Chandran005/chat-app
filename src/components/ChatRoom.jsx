import React from 'react';
import { Hash, Bell, Shield, HelpCircle, Paperclip, Smile, Send } from 'lucide-react';

export default function ChatRoom({ activeRoom, currentMessages, inputMessage, setInputMessage, handleSendMessage }) {
  return (
    <div style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', zIndex: 20, backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
      <div style={{ height: '64px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(6, 4, 29, 0.2)', backdropFilter: 'blur(12px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Hash style={{ width: '20px', height: '20px', color: '#c084fc' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', letterSpacing: '0.02em', textTransform: 'uppercase', margin: 0 }}>{activeRoom?.name || 'Select Channel'}</h2>
            <p style={{ fontSize: '12px', color: '#71717a', margin: '2px 0 0 0' }}>{activeRoom?.desc || 'General chat history'}</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#a1a1aa' }}>
          <Bell style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
          <Shield style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
          <HelpCircle style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {currentMessages.length === 0 ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#71717a', fontSize: '13px' }}>
            No messages here yet. Say hello!
          </div>
        ) : (
          currentMessages.map((msg) => (
            <div key={msg.id} style={{ display: 'flex', alignItems: 'start', gap: '16px', padding: msg.isSystem ? '12px' : '0', backgroundColor: msg.isSystem ? 'rgba(147, 51, 234, 0.05)' : 'transparent', border: msg.isSystem ? '1px solid rgba(147, 51, 234, 0.1)' : 'none', borderRadius: '12px' }}>
              {typeof msg.avatar === 'string' && msg.avatar.startsWith('http') ? (
                <img src={msg.avatar} alt="avatar" style={{ width: '36px', height: '36px', borderRadius: '12px', objectFit: 'cover', border: '1px solid rgba(255, 255, 255, 0.1)' }} />
              ) : (
                <div style={{ width: '36px', height: '36px', borderRadius: '12px', backgroundColor: '#27272a', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>
                  {msg.avatar || '🌌'}
                </div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: msg.isSystem ? '#c084fc' : '#e4e4e7' }}>{msg.user}</span>
                  <span style={{ fontSize: '10px', color: '#52525b' }}>{msg.time}</span>
                </div>
                <p style={{ fontSize: '14px', margin: '4px 0 0 0', lineHeight: '1.5', color: msg.isSystem ? '#a1a1aa' : '#d4d4d8' }}>{msg.text}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div style={{ padding: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', backgroundColor: 'rgba(6, 4, 29, 0.4)' }}>
        <form onSubmit={handleSendMessage} style={{ maxWidth: '896px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '14px', padding: '12px 16px' }}>
          <button type="button" style={{ color: '#52525b', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}><Paperclip style={{ width: '16px', height: '16px' }} /></button>
          <input 
            type="text" 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={activeRoom?.name ? `Send a message to #${activeRoom.name}...` : 'Select a channel to chat...'} 
            disabled={!activeRoom?.name || activeRoom.name === 'Loading...'}
            style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', flex: 1, fontSize: '14px', color: '#e4e4e7' }}
          />
          <button type="button" style={{ color: '#52525b', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}><Smile style={{ width: '16px', height: '16px' }} /></button>
          <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
          <button type="submit" style={{ width: '28px', height: '28px', borderRadius: '8px', backgroundColor: '#9333ea', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', cursor: 'pointer' }}>
            <Send style={{ width: '14px', height: '14px', margin: '0 auto' }} />
          </button>
        </form>
      </div>
    </div>
  );
}