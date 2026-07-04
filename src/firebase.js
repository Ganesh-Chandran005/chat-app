import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaqw26SBYCr-WNKs5X0hqQKzc-iZVY5yc",
  authDomain: "chat-app-efaf3.firebaseapp.com",
  projectId: "chat-app-efaf3",
  storageBucket: "chat-app-efaf3.firebasestorage.app",
  messagingSenderId: "900244562691",
  appId: "1:900244562691:web:15ed49c0a505b0dac13f36",
  measurementId: "G-EYH8B5SPGW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);