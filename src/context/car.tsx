import { getAuth, onAuthStateChanged } from "firebase/auth";
import type { FC, ReactNode } from "react";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useEffectOnce } from "react-use";

import { TCar } from "../common.types";
import { getAllCars, getCarById } from "../functions/cars";

type ContextState = {
  car: TCar | any | undefined;
  carId: (id: string) =>Promise<TCar | undefined | void>;
  allCars: TCar[] | undefined;
};

const CarContext = createContext<ContextState | undefined>(undefined);

type ProviderProps = {
  children?: ReactNode;
};

const CarProvider: FC<ProviderProps> = ({ children }) => {
  const [car, setCar] = useState<TCar | null | any>(undefined);
  const [allCars, setAllCars] = useState<TCar[] | undefined>([]);

  useEffectOnce(() => {
    const loadAllCandidates = async () => {
      const res = await getAllCars();
      setAllCars(res);
    };

    loadAllCandidates();
  });

  const carId = async (id: string) => {
    setCar((await getCarById(id)));
  };

  return (
    <>
      <CarContext.Provider
        value={{
          carId,
          car,
          allCars,
        }}
      >
        {children}
      </CarContext.Provider>
    </>
  );
};

const useCar = () => {
  const context = useContext(CarContext);

  if (context === undefined) {
    throw new Error("useComposition must be used within a CompositionProvider");
  }
  return context;
};

export { CarProvider, useCar };
