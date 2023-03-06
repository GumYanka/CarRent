import { TCar } from "@/src/common.types";
import Card from "@/src/components/common/form";
import { useCar } from "@/src/context/car";
import { useUser } from "@/src/context/user";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const BookPage = () => {
  const { carId, car } = useCar();
  const { user } = useUser();

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
              <div className="flex justify-center">
                <p className="text-slate-300 text-[19px] tracking-normal">
                  RENT A {car.name}
                </p>
              </div>
              <div className="flex justify-center">
                <p className="text-slate-300 text-[14px] tracking-normal">
                  {car.shortDesc}
                </p>
              </div>
              <div className="flex flex-row space-x-9 justify-center mt-5">
                <div className="flex flex-col">
                  <label className="text-slate-300 flex">Start location:</label>
                  <input
                    type="text"
                    className="border-solid border-[1px] bg-black bg-opacity-0 h-9 mt-[2px] text-white"
                    placeholder="E-mail Address"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-slate-300 flex">End location:</label>
                  <input
                    type="text"
                    className="border-solid border-[1px] bg-black bg-opacity-0 h-9 mt-[2px] text-white"
                    placeholder="E-mail Address"
                  />
                </div>
              </div>
              <div className="flex flex-row space-x-9 mt-3 justify-center">
                <div className="flex flex-col">
                  <label className="text-slate-300 flex">
                    Choose a start date for your rent:
                  </label>
                  <input
                    type="text"
                    className="border-solid border-[1px] bg-black bg-opacity-0 h-9 mt-[2px] text-white"
                    placeholder="E-mail Address"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-slate-300 flex">
                    Choose a start time:
                  </label>
                  <input
                    type="text"
                    className="border-solid border-[1px] bg-black bg-opacity-0 h-9 mt-[2px] text-white"
                    placeholder="E-mail Address"
                  />
                </div>
              </div>
              <div className="flex flex-row space-x-9 mt-3 justify-center">
                <div className="flex flex-col">
                  <label className="text-slate-300 flex">
                    Choose a finish date for your rent:
                  </label>
                  <input
                    type="text"
                    className="border-solid border-[1px] bg-black bg-opacity-0 h-9 mt-[2px] text-white"
                    placeholder="E-mail Address"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-slate-300 flex">
                    Choose a finish time:
                  </label>
                  <input
                    type="text"
                    className="border-solid border-[1px] bg-black bg-opacity-0 h-9 mt-[2px] text-white"
                    placeholder="E-mail Address"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-end mt-3">
                <div className="flex flex-col">
                  <label className="text-slate-300 flex">Price:</label>
                  <input
                    type="text"
                    className="border-solid border-[1px] bg-black bg-opacity-0 h-9 mt-[2px] text-white"
                    placeholder="100$"
                  />
                </div>
              </div>
              <div className="flex space-x-9 mt-5"></div>

              <div className="flex justify-end mt-3">
                <button
                  disabled={!user}
                  className={`bg-yellow-500 uppercase px-5 py-2 text-[12px] ${
                    user! ? "" : "opacity-50 disabled"
                  }`}
                >
                  go
                </button>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default BookPage;
