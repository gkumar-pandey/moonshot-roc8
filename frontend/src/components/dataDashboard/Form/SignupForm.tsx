import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [signupFormData, setSignupFormData] = useState<{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupFormData(pre => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSignup = () => {};

  const isBtnDisabled =
    signupFormData.name === "" || signupFormData.password === "";

  const formInputs = [
    {
      placeholder: "Full Name",
      label: "Enter Your Name",
      name: "fullname",
      value: signupFormData.name,
      onChange: handleChange,
      type: "text",
    },
    {
      label: "Enter Your Email",
      placeholder: "Your Email",
      onChange: handleChange,
      type: "email",
      value: signupFormData.email,
      name: "email",
    },
    {
      label: "Enter Your Password",
      placeholder: "Password",
      onChange: handleChange,
      type: "password",
      name: "password",
      value: signupFormData.password,
    },
    {
      label: "Confirm Your Password",
      placeholder: "Confirm Password",
      onChange: handleChange,
      type: "password",
      name: "confirmPassowrd",
      value: signupFormData.confirmPassword,
    },
  ];

  return (
    <div
      className={`bg-white  border border-[var(--border-color)] py-8 px-6 rounded-xl gap-6 flex flex-col w-full max-w-[500px]`}>
      <h1 className="text-3xl font-bold text-center ">Signup</h1>
      <form className="flex flex-col gap-6">
        {formInputs.map((ele, idx) => (
          <Input key={idx} {...ele} />
        ))}
        <Button
          variant="primary"
          onclick={handleSignup}
          type="submit"
          disabled={isBtnDisabled}
          className="form-btn">
          Signup
        </Button>
      </form>
      <div className="flex flex-row items-center justify-center w-full gap-1 font-normal text-normal">
        <p className=" text-[#606060]">Already have an account?</p>
        <Link
          to={"/login"}
          className="hover:underline text-[var(--primary-color)] font-medium ">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
