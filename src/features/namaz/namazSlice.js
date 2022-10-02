import { createSlice } from "@reduxjs/toolkit";

/* 
    day: "",
    month: "",
    year: "",
*/
const initialState = {
  date: {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  },
  namaz: [],
};

const namazSlice = createSlice({
  name: "namaz",
  initialState,
  reducers: {
    toDay: (state, action) => {
      console.log(action)
      state.date = action.payload.date;
      state.namaz = action.payload.namaz;
    },
  },
});

export const { toDay } = namazSlice.actions;
export default namazSlice.reducer;
