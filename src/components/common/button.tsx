import React from "react";
import { ReactNode } from "react";

interface FuncProps {
    submit?: () => void;
    title?: string;
  }

const Button = ({ submit, title }: FuncProps) => {
  return (
    <button
          className="bg-yellow-500 uppercase p-2 text-sm mt-3"
          onClick={submit}
        >
            {title}
        </button>
  );
};

export default Button;