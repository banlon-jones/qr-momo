import { configureStore } from '@reduxjs/toolkit';
import firebaseReducer from './firebase/firebaseReducer';

const store = configureStore({
  reducer: {
    user: firebaseReducer,
  },
});

export default store;
