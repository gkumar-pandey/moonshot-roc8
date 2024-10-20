import axios from "axios";
import { BASE_URL } from "./authServices";

export const fetchDataApi = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/data`);
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
};
