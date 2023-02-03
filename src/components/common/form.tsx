import React from "react";
import { ReactNode } from "react";

interface FuncProps {
    children: ReactNode;
    title?: string;
  }

const Card = ({children, title }: FuncProps) => {
  return (
    <div className="flex flex-col rounded bg-opacity-50 p-5 mt-10 overflow-hidden shadow-lg bg-black">
        <div className="flex text-center">
        <p className="text-slate-300">{title}</p>
        </div>
        <div className="flex text-center">
        {children}
        </div>
    </div>
  );
};

export default Card;