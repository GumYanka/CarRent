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
    if (user) router.push("/user-panel");
  }, [user]);

  return (
    <Card>
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
        <p className="text-slate-300 mt-3">Login with <button onClick={signInWithGoogle} className="text-yellow-500">Google</button></p>
        <div>
          <Link className="text-slate-300" href="/auth/reset">Forgot Password</Link>
        </div>
        <div className="text-slate-300">
          Don't have an account? <Link href="/auth/register" className="text-yellow-500">Register</Link>{" "}
          now.
        </div>
      </div>
    </Card>
  );
};
export default Login;
