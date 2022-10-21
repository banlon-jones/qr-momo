import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './firebase.config';

export const app = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(app);
