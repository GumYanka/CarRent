import { ViewListIcon, XIcon, MenuIcon } from "@heroicons/react/outline";
import { FC } from "react";

import LanguageSelector from "./language-selector";
import Menu from "../hocs/menu";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav className="fixed inset-0 z-40 h-20 bg-black bg-opacity-25 flex justify-between px-6 py-4 border-b-[1px] border-gray-600">
        <div className="flex items-center">
        <Image src="/logoAudi.png" width={60} height={50} alt="" />
        </div>

        <div className="flex items-center justify-between">
          <Menu/>
          <LanguageSelector />
        </div>
      </nav>
    </header>
  );
};

export default Header;
