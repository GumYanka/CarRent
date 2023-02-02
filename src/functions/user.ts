import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import firebase from "firebase/compat/app";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  setDoc,
  DocumentReference,
  DocumentData,
} from "firebase/firestore";
import { UserRolesEnum } from "../common.constants";
import { TUser } from "../common.types";

const firebaseConfig = {
  apiKey: "AIzaSyAfW5RJUb42pw9nMFcjs-y07kOkffv8gow",
  authDomain: "react-next-e32c2.firebaseapp.com",
  projectId: "react-next-e32c2",
  storageBucket: "react-next-e32c2.appspot.com",
  messagingSenderId: "88070449243",
  appId: "1:88070449243:web:d008215256e90f376db77e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export type TRemoteUser =
  | (firebase.User & {
      name: string;
      role: string;
      ref: DocumentReference<DocumentData>;
    })
  | null;

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err: any) {
    console.error(err);
  }
};

export const onRemoteAuthStateChanged = (nextOrObserver: any) =>
  onAuthStateChanged(getAuth(), nextOrObserver);

const logIn = async (email: any, password: any) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err: any) {
    console.error(err);
  }
};

const register = async (name: any, email: any, password: any) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err: any) {
    console.error(err);
  }
};

const updateExistUser = async (
  user: TRemoteUser
): Promise<TUser | undefined> => {
  if (user) {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(doc(db, "users", user.uid));
    if (docSnap.exists()) {
      if (docSnap.data().name !== user?.displayName) {
        await updateDoc(docRef, { name: user.displayName });
      }
      await updateDoc(docRef, { photoURL: user.photoURL });

      return {
        id: user.uid,
        ...(docSnap.data() as Pick<TUser, "name" | "role" | "photoURL">),
        ref: docRef,
      };
    }
  } else {
    return undefined;
  }
};

const sendPasswordReset = async (email: any) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err: any) {
    console.error(err);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logIn,
  register,
  sendPasswordReset,
  logout,
  updateExistUser,
};
