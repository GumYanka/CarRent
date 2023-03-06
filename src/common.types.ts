import {
  UserRolesEnum,
  CarTransmissionEnum,
  CarTypeEnum,
  CarColorEnum,
} from "./common.constants";

export type TUser = {
  id: string;
  displayName?: string;
  role?: UserRolesEnum;
  photoURL?: string;
  email?: string;
  phone?: string;
  city?: string;
  surname?: string;
  address?: string;
  postalCode?: string;
  gender?: string;
  paymentMethod?: boolean;
  ref?: any;
  rends?: string[] | undefined;
};

export type TCar = {
  id?: string;
  name?: string;
  shortDesc?: string;
  longDesc?: string;
  price?: [] | any;
  run?: string;
  isFavourite?: boolean;
  available?: boolean;
  color?: CarColorEnum[] | string[];
  carType?: CarTypeEnum | string;
  transmission?: CarTransmissionEnum | string;
  photoCar?: string[];
  location?: string;
  km?: string;
  fuelType: string;
  capacity:string
};
