import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import toast from "react-hot-toast";
import { useAppDispatch } from "../../../store/hooks";
import { setUser } from "../../../store/features/dashboard/authSlice";
import { loginService } from "../../../services/dashboardServices/authServices";
import Cookies from "js-cookie";

const LoginForm = () => {
  const [loginFormData, setLoginFormData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    setLoginFormData(pre => ({ ...pre, [key]: value }));
  };

  const resetLoginForm = () => {
    setLoginFormData({ email: "", password: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
    try {
      const res = await loginService(loginFormData);
      if (res?.status === 200) {
        const userObj = { user: res?.data?.user, token: res?.data?.token };

        dispatch(setUser(userObj));
        Cookies.set("user", JSON.stringify(userObj), { expires: 1 });
        resetLoginForm();
        toast.dismiss(toastId);
        toast.success("Login Successfully");
        navigate("/dashboard");
      } else {
        setError("Something Wents Wrong!");
        toast.dismiss(toastId);
      }
    } catch (error: any) {
      console.error(error);
      setError(error.message || "Something wents wrong!");
      toast.dismiss(toastId);
      toast.error(error.message);
    }
  };

  const guestLogin = () => {
    const guestUser = {
      email: "test@gmail.com",
      password: "test12345",
    };
    setLoginFormData(guestUser);
  };

  return (
    <>
      <div
        className={` bg-white border border-[var(--border-color)] shadow-lg px-6 py-8 rounded-xl gap-6 flex flex-col w-full max-w-[500px]`}>
        <h1 className="text-3xl font-bold text-center ">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
          {error && (
            <p className="text-base font-medium text-red-700">{error}</p>
          )}
          <div className="flex flex-col gap-2">
            <Button type="submit" variant="primary">
              Login
            </Button>
            <Button onclick={guestLogin} variant="secondary">
              Login as guest
            </Button>
          </div>
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
