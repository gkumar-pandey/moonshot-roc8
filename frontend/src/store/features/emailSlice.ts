import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Email } from "../../types/EmailTypes";
import { fetchEmailsService } from "../../services/emailServices";
import { getDataFromLocalStorage, storeDataToLocalStorage } from "../../utils";

interface EmailState {
  emails: Email[] | [];
  isLoading: boolean;
  error: string | null;
  filterBy: "All" | "Unread" | "Read" | "Favorite";
  selectedEmail: Email | null;
  totalEmails: number;
  currPage: number;
}

const initialState: EmailState = {
  emails: [],
  isLoading: false,
  error: null,
  filterBy: "All",
  selectedEmail: null,
  totalEmails: 0,
  currPage: 1,
};

export const fetchEmails = createAsyncThunk("fetchemails", fetchEmailsService);

const emailSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    updateEmail: (state, action) => {
      const updatedEmails = state.emails?.map((email, idx) => {
        return email.id === action.payload.id
          ? { ...email, ...action.payload.change }
          : email;
      });
      state.emails = updatedEmails;

      const persistedEmails = updatedEmails.filter(
        (email, idx) => email.isRead || email.isFavorite
      );
      storeDataToLocalStorage("persistedEmails", persistedEmails);

      if (state.selectedEmail?.id === action.payload.id) {
        state.selectedEmail = {
          ...state.selectedEmail,
          ...action.payload.change,
        };
      }
    },
    setFilterBy: (state, action) => {
      state.filterBy = action.payload;
    },
    setSelectedEmail: (state, action) => {
      state.selectedEmail = action.payload;
    },
    updateCurrPage: (state, action) => {
      state.currPage = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchEmails.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchEmails.fulfilled, (state, action) => {
      state.isLoading = false;

      const persistedEmails: Email[] =
        getDataFromLocalStorage("persistedEmails");

      const mergeEmails = action.payload.list.map(
        (email: Email, idx: number) => {
          const storedEmail: Email | undefined = persistedEmails?.find(
            (ele, idx) => email?.id === ele?.id
          );
          return storedEmail ? { ...email, ...storedEmail } : email;
        }
      );

      state.emails = mergeEmails;
      state.totalEmails = action.payload.total;
      state.error = null;
    });
    builder.addCase(fetchEmails.rejected, (state, action) => {
      state.isLoading = false;
      //   state.error = action.payload | "Unexpected Error!";
    });
  },
});

export const { updateEmail, setFilterBy, setSelectedEmail, updateCurrPage } =
  emailSlice.actions;
export default emailSlice.reducer;
