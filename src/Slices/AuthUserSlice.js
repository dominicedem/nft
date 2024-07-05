import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: false,
  userData: "",
};

const AuthUserSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
    setUser(state, action) {
      state.userData = action.payload;
    },
  },
});

export const { setIsAuthenticated, setUser } = AuthUserSlice.actions;
export default AuthUserSlice.reducer;
