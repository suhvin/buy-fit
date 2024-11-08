import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBCwQXHoqS_P4ooEH4uDnVUW0gMCxY6U58',
  authDomain: 'buy-fit.firebaseapp.com',
  projectId: 'buy-fit',
  storageBucket: 'buy-fit.firebasestorage.app',
  messagingSenderId: '850724293964',
  appId: '1:850724293964:web:cb227cb34812662058d3e9',
  measurementId: 'G-NP0M093Z2R',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
// if (typeof window !== 'undefined') {
//   const analytics = getAnalytics(app);
// }

export { app, firestore, storage };
