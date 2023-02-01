import type { FC, ReactNode } from "react";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useEffectOnce } from "react-use";

import { TUser } from "../common.types";
import {
  logIn,
  register,
  logout,
} from "../functions/user";

type ContextState = {
  user: TUser | null | undefined;
  signOut: () => void;
  logIn: (email: any, password: any) => void;
  register: (name: any, email: any, password: any) => void;
};

const UserContext = createContext<ContextState | undefined>(undefined);

type ProviderProps = {
  children?: ReactNode;
};

const UserProvider: FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = useState<TUser | null | undefined>(undefined);

  const signOut = async () => {
    setUser(null);
    logout();
  };

  return (
    <>
      <UserContext.Provider
        value={{
          signOut,
          user,
          logIn,
          register,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useComposition must be used within a CompositionProvider");
  }
  return context;
};

export { UserProvider, useUser };
