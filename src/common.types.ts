import {
  UserRolesEnum,
  CarTransmissionEnum,
  CarTypeEnum,
  CarColorEnum,
} from "./common.constants";

export type TUser = {
  id: string;
  name?: string;
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
};

export type TCar = {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  price: number;
  run: string;
  isFavourite: boolean;
  available: boolean;
  color: CarColorEnum[];
  carType: CarTypeEnum;
  transmissionId: CarTransmissionEnum;
  photoCar: string;
  location: string;
};
