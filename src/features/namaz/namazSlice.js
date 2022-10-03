import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: "",
  namaz: [],
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
  },
});

export const { toDay } = namazSlice.actions;
export default namazSlice.reducer;
