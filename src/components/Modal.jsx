import React from 'react';

export default function Modal({ newRoomName, setNewRoomName, newRoomDesc, setNewRoomDesc, handleCreateRoom, setShowModal }) {
  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
      <div style={{ backgroundColor: '#0b082e', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '24px', width: '90%', maxWidth: '400px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', letterSpacing: '0.02em', margin: '0 0 4px 0' }}>Create New Channel</h3>
        <p style={{ fontSize: '12px', color: '#a1a1aa', margin: '0 0 20px 0' }}>Set up a new public chat channel for real-time conversation.</p>
        <form onSubmit={handleCreateRoom} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '10px', fontWeight: '700', color: '#c084fc', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Channel Name</label>
            <input 
              type="text" 
              value={newRoomName}
              onChange={(e) => setNewRoomName(e.target.value)}
              placeholder="e.g., frontend-discussion" 
              required
              style={{ width: '100%', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '10px 12px', fontSize: '14px', color: '#e4e4e7', outline: 'none' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '10px', fontWeight: '700', color: '#c084fc', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Channel Description</label>
            <input 
              type="text" 
              value={newRoomDesc}
              onChange={(e) => setNewRoomDesc(e.target.value)}
              placeholder="e.g., Chatting about UI design and code systems" 
              style={{ width: '100%', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '10px 12px', fontSize: '14px', color: '#e4e4e7', outline: 'none' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end', gap: '12px', marginTop: '8px' }}>
            <button 
              type="button" 
              onClick={() => setShowModal(false)}
              style={{ padding: '8px 16px', borderRadius: '12px', fontSize: '12px', fontWeight: '600', color: '#a1a1aa', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              style={{ padding: '10px 16px', borderRadius: '12px', fontSize: '12px', fontWeight: '600', backgroundColor: '#9333ea', color: '#ffffff', border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(147, 51, 234, 0.3)' }}
            >
              Create Channel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}