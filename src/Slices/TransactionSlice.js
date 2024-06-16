import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sold: true,
  bought: false,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setSold(state, action) {
      state.sold = action.payload;
      state.bought = false;
    },
    setBought(state, action) {
      state.sold = false;
      state.bought = action.payload;
    },
  },
});

export const { setSold, setBought } = transactionSlice.actions;
export default transactionSlice.reducer;
