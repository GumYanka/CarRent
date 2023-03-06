import React, { useEffect, useState } from "react";
import { useUser } from "../../context/user";
import { useRouter } from "next/router";
import Link from "next/link";
import { signInWithGoogle } from "../../functions/user";
import Button from "@/src/components/common/button";
import Card from "@/src/components/common/form";

const Login = () => {
  const { logIn, user } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      return;
    }
    if (user) router.push("/user/user-panel");
  }, [user]);

  return (
    <Card title="Login">
      <div className="flex flex-col flex-wrap content-center justify-center">
        <input
          type="text"
          className="border-solid border-[1px] bg-black bg-opacity-0 h-9 mt-3 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="text"
          className="border-solid border-[1px] bg-black bg-opacity-0 h-9 mt-3 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button
          submit={() => {
            logIn(email, password);
          }}
          title="Login"
        />
        <button
          className="bg-[#1c2122] uppercase p-2 tracking-[2px] text-[12px] text-white border-[1px] border-white mt-3 border-solid "
          onClick={signInWithGoogle}
        >
          G
        </button>
        <div className="mt-2">
          <Link className="text-yellow-500" href="/auth/reset">
            Forgot Password
          </Link>
        </div>
        <div className="text-slate-300">
          Don't have an account?{" "}
          <Link href="/auth/register" className="text-yellow-500">
            Register
          </Link>{" "}
          now.
        </div>
      </div>
    </Card>
  );
};
export default Login;
