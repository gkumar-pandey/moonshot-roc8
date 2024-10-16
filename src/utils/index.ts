export const formatTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);

  // Extract date components
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = String(date.getFullYear());
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 0 or 24 to 12 for midnight and handle 12-hour format

  // Construct the final formatted date
  return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
};

export const API_URL = "https://flipkart-email-mock.now.sh/";
