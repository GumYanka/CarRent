import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

import { TCar } from "../common.types";

const firebaseConfig = {
  apiKey: "AIzaSyAfW5RJUb42pw9nMFcjs-y07kOkffv8gow",
  authDomain: "react-next-e32c2.firebaseapp.com",
  projectId: "react-next-e32c2",
  storageBucket: "react-next-e32c2.appspot.com",
  messagingSenderId: "88070449243",
  appId: "1:88070449243:web:d008215256e90f376db77e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getAllCars = async () => {
  const cars: TCar[] = [];
  const carsCol = collection(db, "cars");

  const qc: any = [];

  const querySnapshot = await getDocs(query(carsCol, ...qc));

  querySnapshot.forEach(async (doc) => {
    cars.push({
      ...(doc.data() as TCar),
      id: doc.id,
    });
  });

  return cars;
};
