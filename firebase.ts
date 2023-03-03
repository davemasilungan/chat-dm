import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBW2SEDAOPXhGpkCwlkteavEUa_ELgs8aQ',
  authDomain: 'chatdmai.firebaseapp.com',
  projectId: 'chatdmai',
  storageBucket: 'chatdmai.appspot.com',
  messagingSenderId: '220364962615',
  appId: '1:220364962615:web:4ea4b3a3dd5d82633738b2',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
