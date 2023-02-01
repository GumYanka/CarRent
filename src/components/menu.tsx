import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useUser } from "../context/user";

const Menu = () => {
  //   const { pathname } = useRouter();
  const { user } = useUser();
  return (
    <>
      {user && (
        <>
          {user.name} {user.role}
        </>
      )}
      {user === null && (
        <>
          <Link
            href="/auth/register"
            className="text-[13px] uppercase tracking-widest m-3"
          >
            register
          </Link>
          <Link
            href="/auth/reset"
            className="text-[13px] uppercase tracking-widest m-3"
          >
            reset
          </Link>
          <Link
            href="/auth/login"
            className="text-[13px] uppercase tracking-widest m-3"
          >
            login
          </Link>
        </>
      )}
    </>
  );
};

export default Menu;
