import { TUser } from "@/src/common.types";
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
    <div>
      <div className="mt-24 flex flex-col flex-wrap content-center justify-center">
        <input
          type="text"
          value={name}
          name="name"
          onChange={(event) =>
            setFormState({
              ...formState,
              [event.target.name]: event.target.value,
            })
          }
          placeholder="Full Name"
        />
        <input
          className="mt-4"
          type="text"
          value={surname}
          name="surname"
          onChange={(event) =>
            setFormState({
              ...formState,
              [event.target.name]: event.target.value,
            })
          }
          placeholder="Surname"
        />
        <input
          className="mt-4"
          value={city}
          name="city"
          onChange={(event) =>
            setFormState({
              ...formState,
              [event.target.name]: event.target.value,
            })
          }
          placeholder="city"
        />
        <input
          className="mt-4"
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
          className="mt-4"
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
          className="mt-4"
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
        <button
          className="mt-4"
          onClick={() => {
            updateUser(formState);
          }}
        >
          Full Register
        </button>
      </div>
    </div>
  );
};
export default Register;
