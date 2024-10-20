"use client";
import { FC, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
interface InputProps {
  placeholder?: string;
  className?: string;
  type?: string;
  value?: string;
  name?: string;
  onChange?: any;
  required?: boolean;
  label?: string;
}

const Input: FC<InputProps> = ({
  placeholder,
  className,
  type,
  value,
  name,
  onChange,
  required,
  label,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const toggleShowPassowrd = () => setShowPassword(pre => !pre);
  if (type === "password") {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-base font-medium" htmlFor={label}>
          {label}
        </label>
        <div className="relative">
          <input
            placeholder={placeholder}
            type={showPassword ? "text" : type}
            name={name}
            value={value}
            required={required}
            onChange={onChange}
            className={`${className} w-full bg-[#EBEBEB] text-[#606060] rounded-lg py-3 px-4 border-none focus:outline-[#999999] `}
          />

          <div
            onClick={toggleShowPassowrd}
            className="absolute -translate-y-1/2 cursor-pointer top-1/2 right-4">
            {!showPassword ? <IoEyeOff /> : <IoEye />}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-1">
      <label className="text-base font-medium" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        placeholder={placeholder}
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className={`${className} w-full bg-[#EBEBEB] text-[#606060] rounded-lg py-3 px-4 border-none focus:outline-[#999999] `}
      />
    </div>
  );
};

export default Input;
