// src/features/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { Email } from "../../types/EmailTypes";

interface EmailState {
  emails: Email[];
}

const initialState: EmailState = {
  emails: [],
};

const emailSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {},
});

export const {} = emailSlice.actions;
export default emailSlice.reducer;
