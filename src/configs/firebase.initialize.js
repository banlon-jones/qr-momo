import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';

// eslint-disable-next-line import/prefer-default-export
export const app = initializeApp(firebaseConfig);
