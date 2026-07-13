import React from 'react';
import { Hash, Plus, Search } from 'lucide-react';

export default function Sidebar({ rooms, activeRoomId, setActiveRoomId, setShowModal }) {
  return (
    <div style={{ width: '260px', height: '100%', backgroundColor: 'rgba(8, 6, 37, 0.4)', borderRight: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', flexDirection: 'column', zIndex: 20, backdropFilter: 'blur(12px)' }}>
      <div style={{ padding: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontWeight: '700', letterSpacing: '0.05em', fontSize: '12px', textTransform: 'uppercase', color: '#a855f7' }}>
          Channels
        </span>
        <button 
          onClick={() => setShowModal(true)} 
          style={{ width: '24px', height: '24px', borderRadius: '6px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a1a1aa', cursor: 'pointer' }}
        >
          <Plus style={{ width: '14px', height: '14px', margin: '0 auto' }} />
        </button>
      </div>

      <div style={{ padding: '12px' }}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '6px 12px', fontSize: '12px', color: '#a1a1aa' }}>
          <Search style={{ width: '14px', height: '14px', marginRight: '8px', color: '#71717a' }} />
          <input type="text" placeholder="Search channels..." style={{ border: 'none', outline: 'none', width: '100%', backgroundColor: 'transparent', color: '#d4d4d8' }} />
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '0 8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {rooms.map((room) => {
          const isActive = room.id === activeRoomId;
          return (
            <div 
              key={room.id}
              onClick={() => setActiveRoomId(room.id)}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                padding: '10px 12px', 
                borderRadius: '12px', 
                cursor: 'pointer',
                backgroundColor: isActive ? 'rgba(147, 51, 234, 0.15)' : 'transparent',
                border: isActive ? '1px solid rgba(147, 51, 234, 0.3)' : '1px solid transparent',
                color: isActive ? '#ffffff' : '#a1a1aa'
              }}
            >
              <Hash style={{ width: '16px', height: '16px', color: isActive ? '#c084fc' : '#71717a' }} />
              <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
                <span style={{ fontSize: '14px', fontWeight: '500', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{room.name}</span>
                <span style={{ fontSize: '10px', color: '#71717a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginTop: '2px' }}>{room.desc}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}