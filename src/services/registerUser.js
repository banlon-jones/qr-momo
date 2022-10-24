import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
} from 'firebase/auth';
import {
  getFirestore, addDoc, collection, doc, getDoc,
} from 'firebase/firestore';
import { app } from '../configs/firebase.initialize';

const auth = getAuth(app);
const db = getFirestore(app);
export const registerUserPasswordAndEmail = async (user) => {
  try {
    await createUserWithEmailAndPassword(auth, user.email, user.password);
  } catch (error) {
    console.log(error);
  }
};

export const signInUser = async (user) => {
  try {
    await signInWithEmailAndPassword(auth, user.email, user.password);
  } catch (e) {
    console.log(e);
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (e) {
    console.log(e);
  }
};

// eslint-disable-next-line consistent-return
export const saveUserDetails = async (user) => {
  try {
    const details = await addDoc(collection(db, 'users'), {
      name: user.name,
      email: user.email,
      password: user.password,
      countryCode: user.countryCode,
      phone: user.phone,
    });
    return details;
  } catch (e) {
    console.log(`errored while save user data :${e}`);
  }
};

// eslint-disable-next-line consistent-return
export const getUserData = async (email) => {
  const docRef = doc(db, 'users', email);
  try {
    const user = await getDoc(docRef);
    if (user.exists()){
      return user;
    } else {
      console.log(`No such user with ${email}`);
    }
  } catch (e) {
    console.log('Error occured while fetching user please try again later');
  }
};


export const logInWithPassword = () => {
  return null;
};
