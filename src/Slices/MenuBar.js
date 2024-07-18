import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpenMenu: false,
};

const MenuBarSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setIsOpenMenu(state, action) {
      if (state.isOpenMenu) {
        state.isOpenMenu = false;
      } else state.isOpenMenu = true;
    },
  },
});

export const { setIsOpenMenu } = MenuBarSlice.actions;
export default MenuBarSlice.reducer;
