import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  day: 7,
  fullGraph: [],
  avg: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterDay: (state, action) => {
      state.day = action.payload;
    },
    fullGraph: (state, action) => {
      state.fullGraph = action.payload;
    },
    avg: (state, action) => {
      state.avg = action.payload;
    },
  },
});

export const { filterDay, fullGraph, avg } = filterSlice.actions;
export default filterSlice.reducer;
