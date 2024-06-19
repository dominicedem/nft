import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  overlay: false,
};

const overLaySlice = createSlice({
  name: "overlay",
  initialState,
  reducers: {
    setOverlay(state, action) {
      state.overlay = action.payload;
    },
  },
});

export const { setOverlay } = overLaySlice.actions;
export default overLaySlice.reducer;
