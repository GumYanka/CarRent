import { TCar } from "@/src/common.types";
import Card from "@/src/components/common/form";
import { useCar } from "@/src/context/car";
import { useUser } from "@/src/context/user";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const CarPage = () => {
  const { carId, car } = useCar();
  const { user } = useUser();
  const router = useRouter();

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    if (id) carId(id as string);
  }, [id]);

  return (
    <div className="mb-20">
      <Card>
        {car && (
          <div className="flex pb-4 flex-wrap items-center flex-row mt-16 space-x-12 justify-items-center justify-center">
            <div className="flex-1">
              <Image
                src={car.photoCar[0] || ""}
                width={620}
                height={600}
                alt=""
              />
            </div>
            <div className="flex-1">
              <div className="flex">
                <p className="text-slate-300 text-[19px] tracking-normal">
                  RENT A {car.name}
                </p>
              </div>
              <div className="flex">
                <p className="text-slate-300 text-[14px] tracking-normal">
                  {car.shortDesc}
                </p>
              </div>
              <div className="relative overflow-x-auto mt-9">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 uppercase">
                        Days
                      </th>
                      <th scope="col" className="px-6 py-3">
                        1-3 days
                      </th>
                      <th scope="col" className="px-6 py-3">
                        4-14 days
                      </th>
                      <th scope="col" className="px-6 py-3">
                        15-29 days
                      </th>
                      <th scope="col" className="px-6 py-3">
                        30 days
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="text-xs text-gray-700 bg-gray-50 px-6 py-3 dark:bg-gray-700 uppercase dark:text-gray-400"
                      >
                        Price
                      </th>
                      <td className="text-[17px] text-yellow-500 mt-2 px-6 py-4">
                        ${car?.price[0]}
                      </td>
                      <td className="text-[17px] text-yellow-500 mt-2 px-6 py-4">
                        ${car?.price[1]}
                      </td>
                      <td className="text-[17px] text-yellow-500 mt-2 px-6 py-4">
                        ${car?.price[2]}
                      </td>
                      <td className="text-[17px] text-yellow-500 mt-2 px-6 py-4">
                        ${car?.price[3]}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex space-x-9 mt-5">
                <div className="flex flex-col items-center">
                  <Image
                    src="/icons/speedometer.png"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <p className="text-[10px] text-center text-slate-300 uppercase tracking-widest pt-2">
                    {car.run}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/icons/color.png" width={30} height={30} alt="" />
                  <p className="text-[10px] text-center text-slate-300 uppercase tracking-widest pt-2">
                    {car.km} L/100km
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/icons/snowflake.png"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <p className="text-[10px] text-center text-slate-300 uppercase tracking-widest pt-2"></p>
                </div>
              </div>
              <div className="flex text-slate-300 mt-5">
                <p>Color : {car.color[0]}</p>
              </div>
              <div className="text-slate-300 flex mt-2">
                <p>Car Type : {car.carType}</p>
              </div>
              <div className="text-slate-300 flex mt-2">
                <p>Transmission : {car.transmission}</p>
              </div>
              <div className="text-slate-300 flex mt-2">
                <p>Fuel Type : {car.fuelType}</p>
              </div>
              <div className="text-slate-300 flex mt-2">
                <p>Engine capacity : {car.capacity}</p>
              </div>
              <div className="flex justify-end">
                <button
                  disabled={!user}
                  className={`bg-yellow-500 uppercase p-2 text-[12px] ${
                    user! ? "" : "opacity-50 disabled"
                  }`}
                  onClick={() => router.push(`/car-rental/${car.id}/book-now`)}
                >
                  book now
                </button>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default CarPage;
