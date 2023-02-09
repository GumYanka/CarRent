import { TCar } from "@/src/common.types";
import { getAllCars } from "@/src/functions/cars";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CarCard from "../../components/cars/car";

const Cars = () => {
  const [allCars, setAllCars] = useState<TCar[] | undefined>([]);

  useEffect(() => {
    getAllCars().then((car) => setAllCars(car));
  }, []);

  const router = useRouter();
  return (
    <div>
      {allCars?.map((car) => (
        <CarCard
        key={car.id}
          title={car.name}
          submitDetails={() => router.push("/car-rental/car")}
        ></CarCard>
      ))}
    </div>
  );
};

export default Cars;
