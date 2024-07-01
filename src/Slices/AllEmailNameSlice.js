import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  filteredName: [],
  filteredEmail: [],
  userEmail: "",
  token: "",
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
    setUserToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setFilteredName, setUserToken, setFilteredEmail, setUserEmail } =
  AllEmailNameSlice.actions;
export default AllEmailNameSlice.reducer;
