import { getAuth, onAuthStateChanged } from "firebase/auth";
import type { FC, ReactNode } from "react";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useEffectOnce } from "react-use";

import { TUser } from "../common.types";
import {
  logIn,
  register,
  logout,
  updateExistUser,
  onRemoteAuthStateChanged,
} from "../functions/user";

type ContextState = {
  user: TUser | null | undefined;
  setIsUpdate: (value: boolean) => void;
  signOut: () => void;
  logIn: (email: any, password: any) => void;
  register: (name: any, email: any, password: any) => void;
  updateUser: (user: any) => void;
};

const UserContext = createContext<ContextState | undefined>(undefined);

type ProviderProps = {
  children?: ReactNode;
};

const UserProvider: FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = useState<TUser | null | any>(undefined);
  const [isUpdate, setIsUpdate] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const signOut = async () => {
    setUser(null);
    logout();
  };

  const updateUser = async (user: any) => {
    setUser((await updateExistUser(user)) || null);
  };

  return (
    <>
      <UserContext.Provider
        value={{
          signOut,
          user,
          logIn,
          register,
          updateUser,
          setIsUpdate,
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
