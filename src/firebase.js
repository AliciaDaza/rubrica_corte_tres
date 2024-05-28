import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCaJgJQauT3U0bvtrcpJEEQs9xwuCaNw7s",
  authDomain: "biblioteca-cuc-c3712.firebaseapp.com",
  projectId: "biblioteca-cuc-c3712",
  storageBucket: "biblioteca-cuc-c3712.appspot.com",
  messagingSenderId: "514563808600",
  appId: "1:514563808600:web:7c0eea0b6c0f1d7384592d",
  measurementId: "G-W7R216SF7K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, app, getFirestore };