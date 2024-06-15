import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  test: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setTest(state, action) {
      state.test = action.payload;
    },
  },
});

export const { setTest } = homeSlice.actions;
export default homeSlice.reducer;
