import Card from "@/src/components/common/form";
import { useUser } from "@/src/context/user";
import { useRouter } from "next/router";
import React from "react";
import CarCard from "../../components/cars/car";

const UserRends = () => {
  const router = useRouter();
  const { user } = useUser();
  return (
    <Card>
      {user?.rends  && (
      <div className="relative overflow-x-auto m-9">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 uppercase">
                    Start Date Rent
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Finish Date Rent
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Car
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="text-[17px] mt-2 px-6 py-4">
                    $295{}
                  </td>
                  <td className="text-[17px] mt-2 px-6 py-4">
                    25.08.2022{}
                  </td>
                  <td className="text-[17px] mt-2 px-6 py-4">
                    $295{}
                  </td>
                  <td className="text-[17px]  mt-2 px-6 py-4">
                    $295{}
                  </td>
                  <td className="text-[17px] mt-2 px-6 py-4">
                    $295{}
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
        )}
    </Card>
  );
};

export default UserRends;

