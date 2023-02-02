import React, { useEffect, useState } from "react";
import { useUser } from "../../context/user";
import { useRouter } from "next/router";
import Link from "next/link";
import { signInWithGoogle } from "../../functions/user";

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
    <div>
      <div className="mt-24 flex flex-col flex-wrap content-center justify-center">
        <input
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
            logIn(email, password);
          }}
        >
          Login
        </button>
        <button onClick={signInWithGoogle}>Login with Google</button>
        <div>
          <Link href="/auth/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link href="/auth/register">Register</Link>{" "}
          now.
        </div>
      </div>
    </div>
  );
};
export default Login;
