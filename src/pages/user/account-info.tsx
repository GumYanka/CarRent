import React from "react";
import { useRouter } from "next/router";
import { useUser } from "../../context/user";
import Card from "../../components/common/form";
import Image from "next/image";

const AccountInfo = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div>
      <Card>
        <div className="flex flex-row space-x-12 m-12">
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col items-center">
              <Image
                src={user?.photoURL || "/icons/user.png"}
                width={100}
                height={100}
                alt=""
              />
              <p className="text-[10px] text-center text-slate-300 uppercase tracking-widest pt-2">
                {user?.email}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-slate-300 flex mt-2">
              <p>Name: {user?.displayName}</p>
            </div>
            <div className="text-slate-300 flex mt-2">
              <p>Surname: {user?.surname}</p>
            </div>
            <div className="text-slate-300 flex mt-2">
              <p>City: {user?.city}</p>
            </div>
            <div className="text-slate-300 flex mt-2">
              <p>Street: {user?.address}</p>
            </div>
            <div className="text-slate-300 flex mt-2">
              <p>Postal Code: {user?.postalCode}</p>
            </div>
            <div className="text-slate-300 flex mt-2">
              <p>Phone: {user?.phone}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AccountInfo;
