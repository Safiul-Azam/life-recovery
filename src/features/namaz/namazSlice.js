import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  },
  email: "",
};

const namazSlice = createSlice({
  name: "namaz",
  initialState,
  reducers: {
    toDay: (state, action) => {
      state.date = action.payload.date;
      state.email = action.payload.email;
    },
  },
});

export const { toDay } = namazSlice.actions;
export default namazSlice.reducer;
