import axios from "axios";
import { API_URL } from "../utils";

export const fetchEmailsService = async (pageNum: number) => {
  try {
    const res = await axios.get(`${API_URL}?page=${pageNum}`);

    if (res.status == 200) {
      return res.data;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const fetchEmailBodyService = async (id: string | undefined) => {
  try {
    const res = await axios.get(`${API_URL}?id=${id}`);
    if (res.status == 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
