// import { db, firebaseConfig } from "../firebase";

// import {
//   collection,
//   addDoc,
//   Timestamp,
//   DocumentData,
//   DocumentReference,
//   doc,
//   getDoc,
//   updateDoc,
//   setDoc,
//   query,
//   getDocs,
// } from "firebase/firestore";
// import firebase from "firebase/compat/app";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithRedirect,
//   signOut as signOutFB,
// } from "firebase/auth";

// import { TUser } from "../common.types";
// import { UserRolesEnum } from "../common.constants";

// export type TRemoteUser =
//   | (firebase.User & {
//       name: string;
//       role: string;
//       ref: DocumentReference<DocumentData>;
//     })
//   | null;

// export const USERS_COLLECTION_NAME = "users";

// export const initRemoteApp = (): void => {
//   try {
//     firebase.initializeApp(firebaseConfig);
//   } catch (err: any) {
//     if (!/already exists/.test(err.message)) {
//       console.error("Firebase initialization error", err.stack);
//     }
//   }
// };

// export const signIn = async () => {
//   const auth = getAuth();
//   const provider = new GoogleAuthProvider();
//   console.log("signIn", provider);
//   return signInWithRedirect(auth, provider).catch((error: any) => {
//     console.error(error.message);
//   });
// };

// export const isSignedIn = (): boolean => {
//   const auth = getAuth();
//   return auth.currentUser !== null;
// };

// export const signOut = async () => {
//   const auth = getAuth();
//   return signOutFB(auth);
// };

// export const setNewUser = async (
//   user: TRemoteUser
// ): Promise<TUser | undefined> => {
//   if (user) {
//     const docRef = doc(db, USERS_COLLECTION_NAME, user.uid);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       if (docSnap.data().name !== user?.displayName) {
//         await updateDoc(docRef, { name: user.displayName });
//       }
//       await updateDoc(docRef, { photoURL: user.photoURL });

//       return {
//         id: user.uid,
//         ...(docSnap.data() as Pick<TUser, "name" | "role" | "photoURL">),
//         ref: docRef,
//       };
//     } else {
//       const data = {
//         name: user.displayName || "",
//         role: UserRolesEnum.Manager,
//         photoURL: user.photoURL || "",
//       };
//       await setDoc(docRef, data);
//       return {
//         ...data,
//         id: user.uid,
//       };
//     }
//   } else {
//     return undefined;
//   }
// };

// export const registerWithEmailAndPassword = async ({
//   name,
//   email,
//   password,
// }: any) => {
//   try {
//     const res = await createUserWithEmailAndPassword(name, email, password);
//     const user = res.user;
//     await addDoc(collection(db, "users"), {
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//   } catch (err: any) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// export const updateUser = async ({
//   id,
//   name,
//   role,
//   photoURL,
// }: TUser): Promise<void> => {
//   const docRef = doc(db, "users", id);
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     await updateDoc(docRef, { name, role, photoURL });
//   }
// };

// export const getAllUsers = async (): Promise<TUser[]> => {
//   const users: TUser[] = [];
//   const q = query(collection(db, "users"));
//   const usersSnap = await getDocs(q);

//   usersSnap.forEach((user) => {
//     users.push({
//       id: user.id,
//       ...(user.data() as Pick<TUser, "name" | "role" | "photoURL">),
//     });
//   });

//   return users;
// };

// export const getUserById = async (id: string): Promise<TUser> => {
//   const userRef = doc(db, "users", id);
//   const user = await getDoc(userRef);

//   return {
//     id,
//     ...(user.data() as Pick<TUser, "name" | "role" | "photoURL">),
//   } as TUser;
// };
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

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
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email: any, password: any) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (
  name: any,
  email: any,
  password: any
) => {
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
    alert(err.message);
  }
};

const sendPasswordReset = async (email: any) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
