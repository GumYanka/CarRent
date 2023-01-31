// import type { FC, ReactNode } from "react";
// import { useContext, useEffect, useState } from "react";
// import { createContext } from "react";

// import { TUser } from "../common.types";
// import {
//   getAllUsers,
//   getUserById as getUserByIdRemote,
//   initRemoteApp,
//   setNewUser,
//   signIn,
//   signOut as remoteSignOut,
// } from "../functions/user";
// type ContextState = {
//   signIn: () => void;

// };

// const UserContext = createContext<ContextState | undefined>(undefined);

// type ProviderProps = {
//   children?: ReactNode;
// };

// const UserProvider: FC<ProviderProps> = ({ children }) => {
//   const [user, setUser] = useState<TUser | null | undefined>(undefined);
//   const [users, setUsers] = useState<TUser[]>([]);

//   initRemoteApp();

//   const updateUser = async (user: any) => {
//     setUser((await setNewUser(user)) || null);
//   };

//   const signOut = async () => {
//     setUser(null);
//     remoteSignOut();
//   };

//   const getUserById = async (id: string) => getUserByIdRemote(id);

//   async function fetchUsersAll() {
//     const data = await getAllUsers();
//     setUsers(data);
//   }

//   useEffect(() => {
//     fetchUsersAll();
//   }, []);

//   return (
//     <>
//       <UserContext.Provider
//         value={{
//           signIn
//         }}
//       >
//         {children}
//       </UserContext.Provider>
//     </>
//   );
// };

// const useUser = () => {
//   const context = useContext(UserContext);

//   if (context === undefined) {
//     throw new Error("useComposition must be used within a CompositionProvider");
//   }
//   return context;
// };

// export { UserProvider, useUser };
