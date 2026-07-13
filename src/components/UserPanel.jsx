import React from 'react';
import { Users } from 'lucide-react';

export default function UserPanel({ currentUser }) {
  return (
    <div style={{ width: '240px', height: '100%', backgroundColor: 'rgba(8, 6, 37, 0.2)', borderLeft: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', flexDirection: 'column', zIndex: 20, backdropFilter: 'blur(12px)' }}>
      <div style={{ padding: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', gap: '8px', color: '#a1a1aa' }}>
        <Users style={{ width: '16px', height: '16px', color: '#c084fc' }} />
        <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Active Cluster</span>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px', borderRadius: '10px', backgroundColor: 'rgba(147, 51, 234, 0.05)', border: '1px solid rgba(147, 51, 234, 0.1)' }}>
          {currentUser?.photoURL ? (
            <img src={currentUser.photoURL} alt="profile" style={{ width: '28px', height: '28px', borderRadius: '8px', objectFit: 'cover', border: '1px solid rgba(147, 51, 234, 0.4)' }} />
          ) : (
            <div style={{ width: '28px', height: '28px', borderRadius: '8px', backgroundColor: 'rgba(147, 51, 234, 0.2)', border: '1px solid rgba(147, 51, 234, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>🌌</div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#e4e4e7', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{currentUser?.displayName || 'Active Operator'}</span>
            <span style={{ fontSize: '9px', color: '#a855f7', marginTop: '1px' }}>System Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
}