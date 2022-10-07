import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: "",
  namaz: [],
  data: [],
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
    filterData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { toDay, filterData } = namazSlice.actions;
export default namazSlice.reducer;
