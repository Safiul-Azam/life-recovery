import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  day: 0,
  sum: 35,
  fullGraph: [],
  avg: [],
  allDataByDate: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterDay: (state, action) => {
      state.day = action.payload;
      state.sum = action.payload * 5;
    },

    fullGraph: (state, action) => {
      state.fullGraph = action.payload;
    },

    avg: (state, action) => {
      state.avg = action.payload;
    },

    allDataByDate: (state, action) => {
      state.allDataByDate = action.payload;
    },
  },
});

export const { filterDay, fullGraph, avg, allDataByDate } = filterSlice.actions;
export default filterSlice.reducer;
