import React, { useEffect, useState } from "react";
import { useUser } from "../../context/user";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import { auth, signInWithGoogle } from "../../functions/user";

const Login = () => {
  const { logIn } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) router.push("/dashboard");
  }, [user, loading]);

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
        <button className="mt-4" onClick={() => logIn(email, password)}>
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
