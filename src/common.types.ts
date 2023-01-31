import { UserRolesEnum } from "./common.constants";

export type TUser = {
  id: string;
  name: string;
  role: UserRolesEnum;
  photoURL: string;
  ref?: any;
};
