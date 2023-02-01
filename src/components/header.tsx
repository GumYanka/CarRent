import { ViewListIcon, XIcon, MenuIcon } from "@heroicons/react/outline";
import { FC } from "react";

import LanguageSelector from "./language-selector";
import Menu from "./menu";
// import Logo from "./logo";

const Header = () => {
  return (
    <header>
      <nav className="fixed inset-0 z-40 flex h-20 justify-between px-6 py-4 border-b-[1px] border-slate-200">
        <div className="flex items-center">
          <p className="text-[13px] uppercase tracking-widest">Logo</p>
        </div>
        <div className="flex items-center">
          <Menu/>
        </div>

        <div className="flex items-center justify-between">
          <LanguageSelector />
          <p className="text-[13px] uppercase tracking-widest">user panel</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
