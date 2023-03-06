import Button from "@/src/components/common/button";
import Card from "@/src/components/common/form";
import { signInWithGoogle } from "@/src/functions/user";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useUser } from "../../context/user";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  const { register, user } = useUser();

  useEffect(() => {
    if (!user) {
      return;
    }
    if (user) router.push("/user/user-panel");
  }, [user]);

  return (
    <Card title="Register">
      <div className="flex flex-col flex-wrap content-center justify-center">
        <input
          type="text"
          className="border-solid border-[1px] bg-black bg-opacity-0 h-9 mt-3 text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
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
            register(name, email, password);
            setEmail("");
            setPassword("");
            setName("");
          }}
          title="Register"
        />
        <button
          className="bg-[#1c2122] uppercase p-2 tracking-[2px] text-[12px] text-white border-[1px] border-white mt-3 border-solid "
          onClick={signInWithGoogle}
        >
          G
        </button>
        <div className="text-slate-300 mt-3">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-yellow-500">
            Login
          </Link>{" "}
          now.
        </div>
      </div>
    </Card>
  );
};
export default Register;
