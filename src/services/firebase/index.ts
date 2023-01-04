import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as signOutUser,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import { Category } from "../../store/categories/categories.types";

const firebase = initializeApp({
  apiKey: "AIzaSyD4_o3gAo7vMSF90W-bKeK2meZaW4ncr3U",
  authDomain: "kingdom-clothing-2022.firebaseapp.com",
  projectId: "kingdom-clothing-2022",
  storageBucket: "kingdom-clothing-2022.appspot.com",
  messagingSenderId: "805273463769",
  appId: "1:805273463769:web:1f0e63a53112bc8185c7c8",
});

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebase);
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export type ObjectToAdd = {
  title: string;
};

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  documentsToAdd: T[]
) => {
  const collectionReference = collection(db, collectionKey);

  const batch = writeBatch(db);

  documentsToAdd.forEach((document) => {
    const documentReference = doc(
      collectionReference,
      document.title.toLowerCase()
    );

    batch.set(documentReference, document);
  });
  await batch.commit();
  console.info("done!");
};

export const getCategoriesAndDocuments = async () => {
  const collectionReference = collection(db, "categories");

  const q = query(collectionReference);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((snapshot) => snapshot.data() as Category);
};

async function createFirebaseUserDocument(
  id: string,
  name: string | null,
  email: string | null
) {
  if (!id || !name || !email) return Promise.reject("Missing param");
  const userDocumentReference = doc(db, "users", id);

  const userSnapshot = await getDoc(userDocumentReference);

  if (!userSnapshot.exists()) {
    const dt = new Date();
    const createdAt = dt.toISOString();
    const newUser = { displayName: name, email, createdAt };

    console.info("creating new user", newUser);

    return await setDoc(userDocumentReference, newUser);
  }
}

export const createAuthUserFromAuth = async (userAuth: User) => {
  if (!userAuth) return;
  const { displayName, email } = userAuth;

  return await createFirebaseUserDocument(userAuth.uid, displayName, email);
};

export const createAuthUserWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  if (!email || !password) return;

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  if (!userCredential) return;

  const { user } = userCredential;
  await createFirebaseUserDocument(user.uid, name, email);

  return user;
};

export const authenticateWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const signOut = async () => {
  return await signOutUser(auth);
};

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
  onAuthStateChanged(auth, callback);
};
