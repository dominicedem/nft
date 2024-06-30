import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  filteredName: [],
  filteredEmail: [],
  userEmail: "",
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
    setUserEmail(state, action) {
      state.userEmail = action.payload;
    },
  },
});

export const { setFilteredName, setFilteredEmail, setUserEmail } =
  AllEmailNameSlice.actions;
export default AllEmailNameSlice.reducer;
