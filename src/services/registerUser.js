import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut,
} from 'firebase/auth';

import { app } from '../configs/firebase.initialize';

const auth = getAuth(app);

// eslint-disable-next-line consistent-return
export const registerUserPasswordAndEmail = async (user) => {
  try {
    const userCred = await createUserWithEmailAndPassword(auth, user.email, user.password);
    await updateProfile(userCred.user, { displayName: `${user.name}/${user.phone}` });
    return { status: 'user created' };
  } catch (error) {
    return null;
  }
};

// eslint-disable-next-line consistent-return
export const logInWithPassword = async (user) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
    if (userCredential) {
      return userCredential.user;
    }
  } catch (e) {
    return null;
  }
};

export const logOut = async () => {
  try {
    const logOut = await signOut(auth);
    return logOut;
  } catch (e) {
    alert(e);
    return null;
  }
};
