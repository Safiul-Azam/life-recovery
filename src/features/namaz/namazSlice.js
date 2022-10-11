import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: "",
  namaz: [],
  allData: [],
};

const namazSlice = createSlice({
  name: "namaz",
  initialState,
  reducers: {
    toDay: (state, action) => {
      state.date = action.payload.date;
      if (action.payload.namaz) {
        state.namaz = action.payload.namaz;
      }
    },
    allData: (state, action) => {
      state.allData = action.payload;
    },
  },
});

export const { toDay, filterData, allData } = namazSlice.actions;
export default namazSlice.reducer;
