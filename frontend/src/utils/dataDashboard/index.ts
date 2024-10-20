import {
  BETWEEN15TO25,
  GREATEETHAN25,
} from "../../components/dataDashboard/FilterBar/FilterBar";
import {
  Data,
  FormatDateOptions,
  GetFilterDataByAgeRangeType,
  GetFilterDataByDateType,
  GetFilterDataByGenderType,
  getFilteredDataType,
  TotalTimeSpent,
} from "../../types/dashboard/DashboardTypes";

export const totalTimeSpent: TotalTimeSpent = data => {
  let A = 0;
  let B = 0;
  let C = 0;
  let D = 0;
  let E = 0;
  let F = 0;
  data?.forEach((ele: Data) => {
    A += ele.A;
    B += ele.B;
    C += ele.C;
    D += ele.D;
    E += ele.E;
    F += ele.F;
  });
  return [A, B, C, D, E, F];
};

export const formatDate = (date: Date) => {
  const options: FormatDateOptions = {
    day: "numeric",
    month: "short",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

const gerFilterDataByAgeRange: GetFilterDataByAgeRangeType = (
  data,
  minAge,
  maxAge
) => {
  return data?.filter((ele: Data) => {
    return ele.minAge == minAge && ele.maxAge == maxAge;
  });
};

const gerFilterDataByGender: GetFilterDataByGenderType = (data, gender) => {
  return data?.filter(
    ele => ele?.gender.toLowerCase() === gender.toLowerCase()
  );
};

const getFilterDataByDateRange: GetFilterDataByDateType = (
  data,
  startDate,
  endDate
) => {
  return data?.filter(
    (ele: Data) =>
      new Date(ele.date) >= new Date(startDate) &&
      new Date(ele.date) <= new Date(endDate)
  );
};

export const getFilteredData: getFilteredDataType = (data, filters) => {
  let filteredData = [...data];
  const { age, gender, startDate, endDate } = filters;

  if (age) {
    if (age === BETWEEN15TO25) {
      filteredData = gerFilterDataByAgeRange(filteredData, 15, 25);
    }
    if (age === GREATEETHAN25) {
      filteredData = gerFilterDataByAgeRange(filteredData, 26);
    }
  }

  if (startDate && endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    filteredData = getFilterDataByDateRange(filteredData, start, end);
  }

  if (gender) {
    filteredData = gerFilterDataByGender(filteredData, gender);
  }

  return filteredData;
};

export const extractStartAndEndDate = (data: Data[]) => {
  let startDate = data[0]?.date;
  let endDate = data[0]?.date;

  data.forEach(item => {
    if (item.date < startDate) startDate = item.date;
    if (item.date > endDate) endDate = item.date;
  });
  return { startDate, endDate };
};
