import Card from "@/src/components/common/form";
import Image from "next/image";
import React from "react";

interface FuncProps {
  submitDetails?: () => void;
  submitBookNow?: () => void;
  carName?: string;
  startingPrice?: string;
}

const CarPage = ({
  submitDetails,
  carName,
  startingPrice,
  submitBookNow,
}: FuncProps) => {
  return (
    <Card>
      <div className="flex flex-row mt-16 space-x-12">
        <div className="flex-1">
          <Image src="/1234.png" width={620} height={603} alt="" />
        </div>
        <div className="flex-1">
          <div className="flex">
            <p className="text-slate-300">RENT A {carName}</p>
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
                    $295{}
                  </td>
                  <td className="text-[17px] text-yellow-500 mt-2 px-6 py-4">
                    $295{}
                  </td>
                  <td className="text-[17px] text-yellow-500 mt-2 px-6 py-4">
                    $295{}
                  </td>
                  <td className="text-[17px] text-yellow-500 mt-2 px-6 py-4">
                    $295{}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex space-x-9 mt-5">
            <div className="flex flex-col items-center">
              <Image src="/icons/speedometer.png" width={30} height={30} alt="" />
              <p className="text-[10px] text-center text-slate-300 uppercase tracking-widest pt-2">100000{}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/icons/color.png" width={30} height={30} alt="" />
              <p className="text-[10px] text-center text-slate-300 uppercase tracking-widest pt-2">4,5L/100km{}</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/icons/snowflake.png" width={30} height={30} alt="" />
              <p className="text-[10px] text-center text-slate-300 uppercase tracking-widest pt-2"></p>
            </div>
          </div>
          <div className="flex text-slate-300 mt-5">
            <p>Color: {}</p>
          </div>
          <div className="text-slate-300 flex mt-2">
            <p>Car Type: {}</p>
          </div>
          <div className="text-slate-300 flex mt-2">
            <p>Transmission: {}</p>
          </div>
          <div className="flex justify-end">
          <button
          className="bg-yellow-500 uppercase p-2 text-[12px]"
          onClick={submitBookNow}
        >
          book now
        </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CarPage;
