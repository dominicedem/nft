import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  overlay: false,
  joinOverLay: false,
};

const overLaySlice = createSlice({
  name: "overlay",
  initialState,
  reducers: {
    setOverlay(state, action) {
      state.overlay = action.payload;
    },
    setJoinOverLay(state, action) {
      state.joinOverLay = action.payload;
    },
  },
});

export const { setOverlay, setJoinOverLay } = overLaySlice.actions;
export default overLaySlice.reducer;
