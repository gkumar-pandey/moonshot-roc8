import { SignupFormData } from "./../../types/dashboard/DashboardTypes";
import axios, { AxiosResponse } from "axios";
import { LoginFormData } from "../../types/dashboard/DashboardTypes";

export const BASE_URL = "https://moonshot-roc8.vercel.app/api/v1";

export const loginService = async (loginFormData: LoginFormData) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, loginFormData);
    return res;
  } catch (error: any) {
    return error;
  }
};

export const signupService = async (signupFormData: SignupFormData) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/signup`, signupFormData);
    return res;
  } catch (error: any) {
    return error;
  }
};
