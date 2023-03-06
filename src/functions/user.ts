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
  updateProfile,
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
import { TUser } from "../common.types";
import { toast } from "react-toastify";
import { toastMessages } from "../common.messages";
import { UserRolesEnum } from "../common.constants";

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
    toast.success(toastMessages.logIn.defaultMessage);
  } catch (err) {
    toast.error((err as any).code);
  }
};

export const onRemoteAuthStateChanged = (nextOrObserver: any) =>
  onAuthStateChanged(getAuth(), nextOrObserver);

const logIn = async (email: any, password: any) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success(toastMessages.logIn.defaultMessage);
  } catch (err) {
    toast.error((err as any).code);
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
    toast.success(toastMessages.signUp.defaultMessage);
  } catch (err) {
    toast.error((err as any).code);
  }
};

export const createUser = async (userData: any) => {
  try {
  const res = await firebase
          .firestore()
          .collection("users")
          .doc(auth?.currentUser?.uid)
          .update({
            name:userData.name,
            email:userData.email,
            role: "Admin",
            phone: userData.phone,
          });
  //As per your comment below

    return res;
  } catch (error) {
    return error;
  }
};

const updateExistUser = async (user: TRemoteUser | any
): Promise<TUser | undefined> => {
  if (user) {

    var userNow = firebase.auth().currentUser;
        userNow?.updateProfile({
        displayName: "Jane Q. User",
        photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(function() {
        var displayName = userNow?.displayName;
        var photoURL = userNow?.photoURL;
      }, function(error) {

      });
    // const auth = getAuth();
    // const docRef = doc(db, 'users', auth.currentUser.uid);


// updateProfile(auth.currentUser, {
//   displayName: user.name, photoURL: user.photoURL, city: user.city, surname: user.surname
// }).then(() => {
//   // Profile updated!
//   // ...
//   setDoc(docRef, user , { merge: true });
// }).catch((error) => {
//   // An error occurred
//   // ...
// });
    // const docRef = doc(collection(db, `users`, id));
    // console.log('iddd', docRef, id)
    // const docSnap = await getDoc(docRef);
    // const updateObject = {
    //   ...(docSnap.data() as Pick<TUser, "name" | "role" | "photoURL" | 'city' | "address" | "email">),
    //   ...user,
    //   ref: docRef,
    //  role: UserRolesEnum.Manager
    // }

    // await setDoc(docRef, updateObject, { merge: true });


    // if (docSnap.exists()) {
    //   if (docSnap.data().name !== user?.displayName) {
    //     await updateDoc(docRef, { name: user.displayName });
    //   }
    //   await updateDoc(docRef, { photoURL: user.photoURL });

      // return {
      //   id: user.uid,
      //   ...(docSnap.data() as Pick<TUser, "name" | "role" | "photoURL" | 'city' | "address" | "email">),
      //   ...user,
      //   ref: docRef,
      //   role: UserRolesEnum.Manager
      // };
    
  } else {
    return undefined;
  }
};

const sendPasswordReset = async (email: any) => {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.success(toastMessages.forgotPassword.defaultMessage);
  } catch (err) {
    toast.error((err as any).code);
  }
};

const logout = () => {
  try {
    signOut(auth);
    toast.success(toastMessages.signOut.defaultMessage);
  } catch (err) {
    toast.error((err as any).code);
  }
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
