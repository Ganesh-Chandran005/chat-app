import React, { useState, useEffect, useRef } from "react";
import { auth, provider, db } from "./firebase";
import { signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";

export default function App() {
  const [user, setUser] = useState(null);
  const [activeRoom, setActiveRoom] = useState("General");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [authLoading, setAuthLoading] = useState(true);
  const messagesEndRef = useRef(null);

  const rooms = ["General", "Gaming", "Coding", "Music"];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    const messagesQuery = query(
      collection(db, "messages"),
      where("room", "==", activeRoom),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const fetchedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(fetchedMessages);
    });

    return () => unsubscribe();
  }, [activeRoom, user]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSignIn = async () => {
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      alert("Authentication failed: " + error.message);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    await addDoc(collection(db, "messages"), {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: user.displayName || "Anonymous",
      uid: user.uid,
      room: activeRoom,
    });

    setNewMessage("");
  };

  if (authLoading) {
    return (
      <div className="auth-container">
        <h1>Loading Secure Stream...</h1>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="auth-container">
        <h1>Multi-Room Chat Application</h1>
        <p>Sign in with your Google account to join discussions.</p>
        <button className="google-btn" onClick={handleSignIn}>Sign In with Google</button>
      </div>
    );
  }

  return (
    <div className="chat-app">
      <div className="sidebar">
        <h2>💬 Chat Rooms</h2>
        <div className="room-list">
          {rooms.map((room) => (
            <button
              key={room}
              className={activeRoom === room ? "active" : ""}
              onClick={() => setActiveRoom(room)}
            >
              # {room}
            </button>
          ))}
        </div>
        <button className="room-list logout-btn" onClick={() => signOut(auth)}>Log Out</button>
      </div>

      <div className="chat-window">
        <div className="chat-header"># {activeRoom} Channel</div>
        
        <div className="messages-container">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.uid === user.uid ? "user" : ""}`}>
              <span className="message-user">{msg.user}</span>
              <p className="message-text">{msg.text}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="message-form">
          <input
            type="text"
            placeholder={`Message #${activeRoom}...`}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}