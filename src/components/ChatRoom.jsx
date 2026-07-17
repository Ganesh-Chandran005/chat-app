import React from 'react';
import { Hash, Bell, Shield, HelpCircle, Paperclip, Smile, Send } from 'lucide-react';

export default function ChatRoom({ activeRoom, currentMessages, inputMessage, setInputMessage, handleSendMessage, isMobile }) {
  return (
    <div style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', minWidth: 0, backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
      {/* Dynamic Header */}
      <div style={{ height: '64px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', padding: isMobile ? '0 12px' : '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(6, 4, 29, 0.2)', backdropFilter: 'blur(12px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
          <Hash style={{ width: '18px', height: '18px', color: '#c084fc', flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <h2 style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff', textTransform: 'uppercase', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{activeRoom?.name || 'Select Channel'}</h2>
            {!isMobile && <p style={{ fontSize: '11px', color: '#71717a', margin: '2px 0 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{activeRoom?.desc || 'General chat history'}</p>}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#a1a1aa', flexShrink: 0 }}>
          <Bell style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
          {!isMobile && <Shield style={{ width: '16px', height: '16px', cursor: 'pointer' }} />}
          <HelpCircle style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
        </div>
      </div>

      {/* Message Feed Container */}
      <div style={{ flex: 1, overflowY: 'auto', padding: isMobile ? '16px 12px' : '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {currentMessages.length === 0 ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#71717a', fontSize: '13px' }}>
            No messages here yet. Say hello!
          </div>
        ) : (
          currentMessages.map((msg) => (
            <div key={msg.id} style={{ display: 'flex', alignItems: 'start', gap: '12px', padding: msg.isSystem ? '10px' : '0', backgroundColor: msg.isSystem ? 'rgba(147, 51, 234, 0.05)' : 'transparent', border: msg.isSystem ? '1px solid rgba(147, 51, 234, 0.1)' : 'none', borderRadius: '12px' }}>
              {typeof msg.avatar === 'string' && msg.avatar.startsWith('http') ? (
                <img src={msg.avatar} alt="avatar" style={{ width: '32px', height: '32px', borderRadius: '10px', objectFit: 'cover' }} />
              ) : (
                <div style={{ width: '32px', height: '32px', borderRadius: '10px', backgroundColor: '#27272a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>
                  {msg.avatar || '🌌'}
                </div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: msg.isSystem ? '#c084fc' : '#e4e4e7', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{msg.user}</span>
                  <span style={{ fontSize: '9px', color: '#52525b', flexShrink: 0 }}>{msg.time}</span>
                </div>
                <p style={{ fontSize: '13px', margin: '4px 0 0 0', lineHeight: '1.4', color: msg.isSystem ? '#a1a1aa' : '#d4d4d8', wordBreak: 'break-word' }}>{msg.text}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input Tray Section */}
      <div style={{ padding: isMobile ? '12px' : '16px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', backgroundColor: 'rgba(6, 4, 29, 0.4)' }}>
        <form onSubmit={handleSendMessage} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '14px', padding: '10px 14px', boxSizing: 'border-box' }}>
          {!isMobile && <button type="button" style={{ color: '#52525b', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}><Paperclip style={{ width: '16px', height: '16px' }} /></button>}
          <input 
            type="text" 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={activeRoom?.name ? `Message #${activeRoom.name}...` : 'Select a channel to chat...'} 
            disabled={!activeRoom?.name || activeRoom.name === 'Loading...'}
            style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', flex: 1, fontSize: '13px', color: '#e4e4e7', minWidth: 0 }}
          />
          {!isMobile && <button type="button" style={{ color: '#52525b', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}><Smile style={{ width: '16px', height: '16px' }} /></button>}
          <button type="submit" style={{ width: '28px', height: '28px', borderRadius: '8px', backgroundColor: '#9333ea', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', cursor: 'pointer', flexShrink: 0 }}>
            <Send style={{ width: '12px', height: '12px' }} />
          </button>
        </form>
      </div>
    </div>
  );
}