import { FilterEmailsType } from "../types/EmailTypes";

/**
 * @param timestamp : Date of the email
 * @returns : Formated Date DD/MM/YY/ hh:mm
 */
export const formatTimestamp = (timestamp: number | undefined) => {
  const date = new Date(Number(timestamp));
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
};

export const API_URL = "https://flipkart-email-mock.now.sh/";

/**
 * @param emails : Array of emails
 * @param filterBy : Filter types like Read, Unread, Favorite & all
 * @returns : Array of Filtered Array
 */
export const filterEmails: FilterEmailsType = (emails, filterBy) => {
  if (filterBy === "Unread") {
    return emails?.filter((ele, idx) => !ele?.isRead);
  }

  if (filterBy === "Read") {
    return emails?.filter((ele, idx) => ele?.isRead);
  }

  if (filterBy === "Favorite") {
    return emails?.filter((ele, idx) => ele?.isFavorite);
  }

  return emails;
};

/**
 * @param key : localstorage stored data key
 * @param data : updated Emails Data
 */
export const storeDataToLocalStorage = (key: string, data: unknown) => {
  localStorage.setItem(key, JSON.stringify(data));
};

/**
 * @param key : Localstorage stored data key
 * @returns : Array of stored data or and empty Array
 */
export const getDataFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return (data && JSON.parse(data)) || [];
};
