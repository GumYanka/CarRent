import Button from "@/src/components/common/button";
import Card from "@/src/components/common/form";
import { useUser } from "@/src/context/user";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { auth, sendPasswordReset } from "../../functions/user";

const Reset = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) return;
    if (email) router.push("/dashboard");
  }, [user]);

  return (
    <Card title="Reset password">
      <div className="flex flex-col flex-wrap content-center justify-center">
        <input
          type="text"
          className="border-solid border-[1px] bg-black bg-opacity-0 h-9 mt-3 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <Button
          submit={() => {
            sendPasswordReset(email);
          }}
          title="Continue"
        />
        <div className="text-slate-300 mt-3">
          Don't have an account?
          <Link href="/auth/register" className="text-yellow-500">
            {" "}
            Register
          </Link>{" "}
          now.
        </div>
      </div>
    </Card>
  );
};
export default Reset;
