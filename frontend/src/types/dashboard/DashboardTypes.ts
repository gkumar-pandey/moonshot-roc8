export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export interface Data {
  _id: string;
  date: Date;
  gender: string;
  minAge: number;
  maxAge: number;
  A: number;
  B: number;
  C: number;
  D: number;
  E: number;
  F: number;
  __v: number;
}

export interface FiltersInterface {
  age?: string;
  gender?: string;
  startDate?: string;
  endDate?: string;
}
export type ArrData = Data[];

export interface BarChartProps {
  data: ArrData;
}

export type HandleBarClick = (event: any, element: any) => void;

export type TotalTimeSpent = (data?: ArrData) => number[];

export type getFilteredDataType = (
  data: ArrData,
  filters: FiltersInterface
) => ArrData;

export type GetFilterDataByAgeRangeType = (
  data: ArrData,
  minAge: number,
  maxAge?: number
) => ArrData;

export type GetFilterDataByGenderType = (
  data: ArrData,
  gender: string
) => ArrData;

export type GetFilterDataByDateType = (
  data: ArrData,
  startDate: Date,
  endDate: Date
) => ArrData;

export interface FormatDateOptions {
  day?: "numeric" | "2-digit" | undefined;
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
  year?: "numeric" | "2-digit" | undefined;
}
