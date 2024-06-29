import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  filteredName: [],
  filteredEmail: [],
};

const AllEmailNameSlice = createSlice({
  name: "AllEmailName",
  initialState,
  reducers: {
    setFilteredName(state, action) {
      state.filteredName = action.payload;
    },
    setFilteredEmail(state, action) {
      state.filteredEmail = action.payload;
    },
  },
});

export const { setFilteredName, setFilteredEmail } = AllEmailNameSlice.actions;
export default AllEmailNameSlice.reducer;
