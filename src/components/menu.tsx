import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

const Menu = () => {
  //   const { pathname } = useRouter();

  return (
    <div>
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
    </div>
  );
};

export default Menu;
