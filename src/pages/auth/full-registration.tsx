import { TUser } from "@/src/common.types";
import Button from "@/src/components/common/button";
import Card from "@/src/components/common/form";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useUser } from "../../context/user";

const Register = () => {
  const router = useRouter();
  const { user, updateUser, setIsUpdate } = useUser();
  const [formState, setFormState] = useState<TUser | any | undefined>({
    name: "",
    phone: "",
    city: "",
    surname: "",
    address: "",
    postalCode: "",
    gender: "",
  });

  const { name, surname, address, city, phone, postalCode, gender } = formState;

  return (
    <Card>
      <div className="flex flex-col flex-wrap content-center justify-center">
        <input
          type="text"
          value={name}
          name="name"
          className="border-solid border-[1px] bg-black bg-opacity-0 h-9 mt-3"
          onChange={(event) =>
            setFormState({
              ...formState,
              [event.target.name]: event.target.value,
            })
          }
          placeholder="Full Name"
        />
        <input
          type="text"
          value={surname}
          name="surname"
          className="border-solid border-[1px] bg-black bg-opacity-0 h-9 mt-3"
          onChange={(event) =>
            setFormState({
              ...formState,
              [event.target.name]: event.target.value,
            })
          }
          placeholder="Surname"
        />
        <input
        type="text"
          value={city}
          name="city"
          className="border-solid border-[1px] bg-black bg-opacity-0 h-9 mt-3"
          onChange={(event) =>
            setFormState({
              ...formState,
              [event.target.name]: event.target.value,
            })
          }
          placeholder="city"
        />
        <input
        type="text"
          className="border-solid border-[1px] bg-black bg-opacity-0 h-9 mt-3"
          value={address}
          name="address"
          onChange={(event) =>
            setFormState({
              ...formState,
              [event.target.name]: event.target.value,
            })
          }
          placeholder="address"
        />
        <input
        type="text"
          className="border-solid border-[1px] bg-black bg-opacity-0 h-9 mt-3"
          value={phone}
          name="phone"
          onChange={(event) =>
            setFormState({
              ...formState,
              [event.target.name]: event.target.value,
            })
          }
          placeholder="phone"
        />
        <input
        type="text"
          className="border-solid border-[1px] bg-black bg-opacity-0 h-9 mt-3 text-white"
          value={postalCode}
          name="postalCode"
          onChange={(event) =>
            setFormState({
              ...formState,
              [event.target.name]: event.target.value,
            })
          }
          placeholder="postalCode"
        />
        <Button
          submit={() => {
            updateUser(formState);
          }}
          title="Full Register"
        />
      </div>
    </Card>
  );
};
export default Register;