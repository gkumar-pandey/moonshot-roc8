import axios from "axios";
import { API_URL } from "../utils";

export const fetchEmailsService = async () => {
  try {
    const res = await axios.get(`${API_URL}`);

    if (res.status == 200) {
      return res.data;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};
