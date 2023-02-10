import Image from "next/image";
import React from "react";
import Card from "../common/form";

interface FuncProps {
  submitDetails?: () => void;
  submitBookNow?: () => void;
  title?: string;
  startingPrice?: string;
  carPhoto:string
}

const CarCard = ({
  submitDetails,
  title,
  startingPrice,
  submitBookNow,
  carPhoto
}: FuncProps) => {
  return (
    <Card>
      <div className="flex flex-col mt-3 px-4 m-3">
        <div className="flex-col flex items-center">
        <Image
          src={ carPhoto || "/icons/car.png"}
          width={200}
          height={100}
          alt=""
        />
        </div>
        <p className="text-[14px] uppercase text-white mt-3">{title}</p>
        <p className="text-[15px] text-white">
          from {" "}
          <span className="text-[17px] text-yellow-500 mt-2">
            $ {startingPrice}
          </span>
        </p>
        <button
          className="bg-[#1c2122] uppercase p-2 tracking-[2px] text-[12px] text-white border-2 border-white mt-3 border-solid "
          onClick={submitDetails}
        >
          DETAILS
        </button>
        <button
          className="bg-yellow-500 uppercase p-2 text-[12px] mt-3"
          onClick={submitBookNow}
        >
          book now
        </button>
      </div>
    </Card>
  );
};

export default CarCard;
