"use client";
import React, { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onclick?: any;
  className?: string;
  variant?: string;
  type?: undefined | "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  onclick,
  className,
  variant,
  type,
  disabled,
}) => {
  if (variant === "primary") {
    return (
      <button
        type={type}
        onClick={onclick}
        disabled={disabled}
        className={`${className} bg-[var(--primary-color)] text-white font-medium   w-full  rounded-lg p-2`}>
        {children}
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        type={type}
        onClick={onclick}
        disabled={disabled}
        className={`${className} border border-[var(--primary-color)] text-[var(--primary-color)] font-medium rounded-lg hover:bg-[var(--primary-color)] hover:text-white  w-full  p-2 `}>
        {children}
      </button>
    );
  }
};

export default Button;
