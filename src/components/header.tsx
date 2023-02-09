import { ViewListIcon, XIcon, MenuIcon } from "@heroicons/react/outline";
import { FC } from "react";

import LanguageSelector from "./language-selector";
import Menu from "../hocs/menu";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const { pathname } = useRouter();
  let res = pathname.substring(0, 5);
  return (
    <header>
      <nav
        className={`fixed inset-0 z-40 h-20 bg-black bg-opacity-60 flex justify-between px-6 py-4 border-b-[1px] border-zinc-500 `}
      >
        <div className="flex items-center">
          <Image src="/logoAudi.png" width={60} height={50} alt="" />
        </div>

        <div className="flex items-center justify-between">
          <Menu />
          <LanguageSelector />
        </div>
      </nav>
    </header>
  );
};

export default Header;
