import React from "react";
import { useRouter } from "next/router";
import { useUser } from "../context/user";
import Card from "../components/common/form";
import Button from "../components/common/button";

const UserPanel = () => {
  const router = useRouter();
  const { user, signOut } = useUser();

  return (
    <div>
      <Card title="My account info">
      <div className="flex flex-col">
        <p className="text-slate-300">Logged in as {user?.email}</p>
        <Button
          submit={() => {
            router.push("/auth/login");
            signOut();
          }}
          title="Logout"
        />
        {!user?.phone && !user?.city && !user?.postalCode && !user?.address && (
          
          <button className="text-yellow-500 mt-3" onClick={() => router.push("/auth/full-registration")}>continue full registration</button>
        )}
      </div>
      </Card>
    </div>
  );
};

export default UserPanel;
