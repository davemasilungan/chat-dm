import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAItidc2xpV1SfRniUhdYWATZqOF32K8oU',
  authDomain: 'chat-dm-b63d4.firebaseapp.com',
  projectId: 'chat-dm-b63d4',
  storageBucket: 'chat-dm-b63d4.appspot.com',
  messagingSenderId: '157400131503',
  appId: '1:157400131503:web:05b6331f5bd5e923b2715a',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
