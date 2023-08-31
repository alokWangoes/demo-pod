import React from "react";
import "./button.css";

interface ButtonProps {
  children: React.ReactNode;
  size: string;
}

const Button = ({ children, size }: ButtonProps) => {
  return (
    <>
      <div>
        <button className={size == "sm" ? "button-type-1-sm" : "button-type-1"}>
          {children}
        </button>
      </div>
    </>
  );
};

export default Button;
