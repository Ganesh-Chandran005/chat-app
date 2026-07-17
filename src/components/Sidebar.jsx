import React from 'react';
import { Hash, Plus, Search } from 'lucide-react';

export default function Sidebar({ rooms, activeRoomId, setActiveRoomId, setShowModal, isMobile }) {
  return (
    <div style={{ 
      width: isMobile ? '120px' : '260px', 
      height: '100%', 
      backgroundColor: 'rgba(8, 6, 37, 0.4)', 
      borderRight: '1px solid rgba(255, 255, 255, 0.05)', 
      display: 'flex', 
      flexDirection: 'column', 
      zIndex: 20, 
      backdropFilter: 'blur(12px)',
      boxSizing: 'border-box'
    }}>
      <div style={{ padding: '16px 12px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontWeight: '700', letterSpacing: '0.05em', fontSize: '11px', textTransform: 'uppercase', color: '#a855f7', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {isMobile ? 'Rooms' : 'Channels'}
        </span>
        <button 
          onClick={() => setShowModal(true)} 
          style={{ width: '24px', height: '24px', borderRadius: '6px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a1a1aa', cursor: 'pointer', flexShrink: 0 }}
        >
          <Plus style={{ width: '14px', height: '14px' }} />
        </button>
      </div>

      {!isMobile && (
        <div style={{ padding: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '6px 12px', fontSize: '12px' }}>
            <Search style={{ width: '14px', height: '14px', marginRight: '8px', color: '#71717a' }} />
            <input type="text" placeholder="Search channels..." style={{ border: 'none', outline: 'none', width: '100%', backgroundColor: 'transparent', color: '#d4d4d8' }} />
          </div>
        </div>
      )}

      {/* Touch-Optimized Scrollable Channel Feed Panel */}
      <div 
        style={{ 
          flex: 1, 
          overflowY: 'auto', 
          WebkitOverflowScrolling: 'touch', /* Enables clean mobile momentum scrolling */
          padding: '8px 4px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '4px' 
        }}
      >
        {rooms.map((room) => {
          const isActive = room.id === activeRoomId;
          return (
            <div 
              key={room.id}
              onClick={() => setActiveRoomId(room.id)}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'flex-start',
                gap: '8px', 
                padding: '10px 8px', 
                borderRadius: '12px', 
                cursor: 'pointer',
                backgroundColor: isActive ? 'rgba(147, 51, 234, 0.15)' : 'transparent',
                border: isActive ? '1px solid rgba(147, 51, 234, 0.3)' : '1px solid transparent',
                color: isActive ? '#ffffff' : '#a1a1aa',
                minWidth: 0,
                touchAction: 'manipulation'
              }}
              title={room.name}
            >
              <Hash style={{ width: '15px', height: '15px', color: isActive ? '#c084fc' : '#71717a', flexShrink: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1, overflow: 'hidden' }}>
                <span style={{ fontSize: '13px', fontWeight: '500', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {room.name}
                </span>
                {!isMobile && (
                  <span style={{ fontSize: '10px', color: '#71717a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginTop: '2px' }}>
                    {room.desc}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}