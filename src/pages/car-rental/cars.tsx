import { TCar } from "@/src/common.types";
import { useCar } from "@/src/context/car";
import { db } from "@/src/functions/user";
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import React from "react";
import CarCard from "../../components/cars/car";

const Cars = () => {
  const { allCars } = useCar();

  const router = useRouter();

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

  const setCar = async (vacancy: TCar) => {
    const docRef = doc(collection(db, "cars"));
    const docSnap = await getDoc(docRef);
    const { ...rest } = vacancy;
    return await setDoc(docRef, { ...rest });
  };

  return (
    <div className="grid grid-cols-3 gap-8">
      {allCars?.map((car: any) => (
        <CarCard
          carPhoto={car.photoCar[0]}
          key={car.id}
          title={car.name}
          startingPrice={car?.price[0]}
          submitDetails={() => router.push(`/car-rental/${car.id}`)}
        ></CarCard>
      ))}
      <button
        onClick={() =>
          setCar({
            name: "MITSUBISHI ASX",
            available: true,
            carType: "medium",
            color: ["white"],
            isFavourite: false,
            km: "7",
            location: "Chernivtsi",
            photoCar: [
              "https://firebasestorage.googleapis.com/v0/b/react-next-e32c2.appspot.com/o/CarsPhoto%2F11%2F1-45.png?alt=media&token=f4fb8d8a-5823-4b61-b90b-8abe10049108",
              "https://firebasestorage.googleapis.com/v0/b/react-next-e32c2.appspot.com/o/CarsPhoto%2F11%2F5-38.png?alt=media&token=330ffd86-620e-4452-b487-538fc5b43f73",
              "https://firebasestorage.googleapis.com/v0/b/react-next-e32c2.appspot.com/o/CarsPhoto%2F11%2F8-31.png?alt=media&token=e18fbd4d-f789-4d3e-aa42-5781715ce69c",
            ],
            price: ["85", "75", "60", "45"],
            run: "117",
            shortDesc: "Medium class car",
            transmission: "Automatic transmissions",
            fuelType: "Gasoline",
            capacity: "1,6",
          })
        }
      >
        new
      </button>
    </div>
  );
};

export default Cars;
