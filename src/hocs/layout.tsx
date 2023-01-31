import { useRouter } from "next/router";
import { FC, ReactNode, useMemo, useState } from "react";
import Footer from "../components/footer";

import Header from "../components/header";

interface FuncProps {
  children: ReactNode;
}

const Layout: FC<FuncProps> = ({ children }) => {
  return (
    <div className="h-full w-full bg-gradient-to-br">
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-between pt-20 xl:ml-64">
        {children}
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Layout;
