import React from "react";
import { useRouter } from "next/router";
import { useUser } from "../../context/user";
import Card from "../../components/common/form";
import Button from "../../components/common/button";
import Image from "next/image";
import Link from "next/link";

const UserPanel = () => {
  const router = useRouter();
  const { user, signOut } = useUser();

  return (
    <div>
      <Card>
        <div className="flex flex-row space-x-12 m-12">
          <div className="flex flex-col space-y-5">
            <div className="flex flex-row space-x-12">
              <Link
                href="/user/account-info"
                className="flex flex-col min-w-[80px] items-center"
              >
                <Image src="/icons/user.png" width={30} height={30} alt="" />
                {user?.displayName && user.displayName.length > 0 ? (
                  <p className="text-[10px] text-center text-slate-300 uppercase tracking-widest pt-2">
                    {user?.displayName}
                  </p>
                ) : (
                  <p className="text-[10px] text-center text-slate-300 uppercase tracking-widest pt-2">
                    No information yet
                  </p>
                )}
              </Link>
              <Link
                href="/car-rental/my-rends"
                className="flex flex-col items-center min-w-[80px]"
              >
                <Image
                  src="/icons/customer-feedback.png"
                  width={30}
                  height={30}
                  alt=""
                />
                <p className="text-[10px] text-center text-slate-300 uppercase tracking-widest pt-2">
                  my rends
                </p>
              </Link>
            </div>
            <div className="flex flex-row space-x-12 pt-3">
              <Link
                href="/car-rental/cars"
                className="flex flex-col items-center min-w-[80px]"
              >
                <Image
                  src="/icons/shopping-cart.png"
                  width={30}
                  height={30}
                  alt=""
                />
                <p className="text-[10px] text-center text-slate-300 uppercase tracking-widest pt-2">
                  make order
                </p>
              </Link>
              <Link
                href="/settings"
                className="flex flex-col items-center min-w-[80px]"
              >
                <Image src="/icons/setting.png" width={30} height={30} alt="" />
                <p className="text-[10px] text-center text-slate-300 uppercase tracking-widest pt-2">
                  settings
                </p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col mt-24 items-end">
            <Button
              submit={() => {
                router.push("/auth/login");
                signOut();
              }}
              title="Logout"
            />
            {!user?.phone &&
              !user?.city &&
              !user?.postalCode &&
              !user?.address && (
                <button
                  className="text-yellow-500 mt-3"
                  onClick={() => router.push("/auth/full-registration")}
                >
                  continue full registration
                </button>
              )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserPanel;
