// src/features/counterSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Email } from "../../types/EmailTypes";
import { fetchEmailsService } from "../../services/emailServices";

interface EmailState {
  emails: Email[] | undefined;
  isLoading: boolean;
  error: string | null;
  filterBy: "All" | "Unread" | "Read" | "Favorite";
}

const initialState: EmailState = {
  emails: [],
  isLoading: false,
  error: null,
  filterBy: "All",
};

export const fetchEmails = createAsyncThunk("fetchemails", fetchEmailsService);

const emailSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    updateEmail: (state, action) => {
      state.emails = state.emails?.map((email, idx) => {
        return email.id === action.payload.id
          ? { ...email, ...action.payload.change }
          : email;
      });
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchEmails.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchEmails.fulfilled, (state, action) => {
      state.isLoading = false;

      state.emails = action.payload.list;
      state.error = null;
    });
    builder.addCase(fetchEmails.rejected, (state, action) => {
      state.isLoading = false;
      //   state.error = action.payload | "Unexpected Error!";
    });
  },
});

export const { updateEmail } = emailSlice.actions;
export default emailSlice.reducer;
