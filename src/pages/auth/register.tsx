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
    if (user) router.push("/user-panel");
  }, [user]);

  return (
    <div>
      <div className="mt-24 flex flex-col flex-wrap content-center justify-center">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          className="mt-4"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          className="mt-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="mt-4"
          onClick={() => {
            register(name, email, password);
            setEmail("");
            setPassword("");
            setName("");
          }}
        >
          Register
        </button>
        <div>
          Already have an account? <Link href="/auth/login">Login</Link> now.
        </div>
      </div>
    </div>
  );
};
export default Register;
