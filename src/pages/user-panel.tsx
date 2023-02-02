import React from "react";
import { useRouter } from "next/router";
import { useUser } from "../context/user";

const UserPanel = () => {
  const router = useRouter();
  const { user, signOut } = useUser();

  return (
    <div>
      <div className="flex flex-col">
        Logged in as
        <div>{user?.email}</div>
        <button
          className="bg-yellow-400"
          onClick={() => {
            router.push("/auth/login");
            signOut();
          }}
        >
          Logout
        </button>
        {!user?.phone && !user?.city && !user?.postalCode && !user?.address && (
          <button
            className="bg-yellow-400 mt-5"
            onClick={() => router.push("/auth/full-registration")}
          >
            continue full registration
          </button>
        )}
      </div>
    </div>
  );
};

export default UserPanel;
