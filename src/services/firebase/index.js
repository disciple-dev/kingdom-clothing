import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  //   signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";

import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

const firebase = initializeApp({
  apiKey: "AIzaSyD4_o3gAo7vMSF90W-bKeK2meZaW4ncr3U",
  authDomain: "kingdom-clothing-2022.firebaseapp.com",
  projectId: "kingdom-clothing-2022",
  storageBucket: "kingdom-clothing-2022.appspot.com",
  messagingSenderId: "805273463769",
  appId: "1:805273463769:web:1f0e63a53112bc8185c7c8",
});

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocumentReference = doc(db, "users", userAuth.uid);
  console.info({ userDocumentReference });

  const userSnapshot = await getDoc(userDocumentReference);
  console.log({ userSnapshot });

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    const newUser = { displayName, email, createdAt: new Date() };

    try {
      await setDoc(userDocumentReference, newUser);
    } catch (error) {
      console.error("Created user failure: ", error);
    }
  }
};
