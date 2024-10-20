import { createSlice } from "@reduxjs/toolkit";
import { ArrData } from "../../../types/dashboard/DashboardTypes";
import Cookies from "js-cookie";

interface InitialState {
  data: ArrData;
  filters: {
    age: string;
    gender: string;
    startDate: string;
    endDate: string;
  };
  selectedFeature: string;
}

const initialState: InitialState = {
  data: [],
  filters: {
    age: "",
    gender: "",
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
  },
  selectedFeature: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setSelectedFeature: (state, action) => {
      state.selectedFeature = action.payload;
    },
  },
});

export const { setFilter, setData, setSelectedFeature } = dataSlice.actions;
export default dataSlice.reducer;
