import React, { FC } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ variant, className, onClick, children }) => {
  if (variant == "primary") {
    return (
      <button
        onClick={onClick}
        className={`py-1 px-4 rounded-full text-lg font-medium bg-[var(--primary-color)] text-white ${className}`}>
        {children}
      </button>
    );
  }
  if (variant == "secondary") {
    return (
      <button
        onClick={onClick}
        className={`py-1 px-4 rounded-full text-lg font-medium  hover:bg-[var(--filter-btn-color)] text-[var(--text-color)] ${className}`}>
        {children}
      </button>
    );
  }
};

export default Button;
