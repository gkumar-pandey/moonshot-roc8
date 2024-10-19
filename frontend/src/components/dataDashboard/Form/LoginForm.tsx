import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";

const LoginForm = () => {
  const [loginFormData, setLoginFormData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    setLoginFormData(pre => ({ ...pre, [key]: [value] }));
  };

  return (
    <>
      <div
        className={` bg-white border border-[var(--border-color)] shadow-lg px-6 py-8 rounded-xl gap-6 flex flex-col w-full max-w-[500px]`}>
        <h1 className="text-3xl font-bold text-center ">Login</h1>
        <form className="flex flex-col gap-6">
          <Input
            label={"Enter Your Email"}
            value={loginFormData.email}
            placeholder="Your email"
            type="email"
            name="email"
            onChange={handleOnChange}
          />

          <Input
            label={"Enter Your Password"}
            value={loginFormData.password}
            placeholder="Your password"
            type="password"
            name="password"
            onChange={handleOnChange}
          />
          <Button type="submit" variant="primary">
            Login
          </Button>
        </form>
        <div className="flex flex-row items-center justify-center w-full gap-1 font-normal text-normal">
          <p className=" text-[#606060]">Don&apos;t have an account?</p>
          <Link
            to={"/signup"}
            className=" hover:underline text-[var(--primary-color)] font-medium">
            New Account
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
