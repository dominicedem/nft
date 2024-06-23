import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  all: true,
  gaming: false,
  photography: false,
  art: false,
  membership: false,
  pfp: false,
  exhibition: false,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setAll(_, action) {
      return { ...initialState, all: action.payload };
    },
    setGaming(_, action) {
      return { ...initialState, gaming: action.payload, all: false };
    },
    setPhotography(_, action) {
      return { ...initialState, photography: action.payload, all: false };
    },
    setArt(_, action) {
      return { ...initialState, art: action.payload, all: false };
    },
    setMembership(_, action) {
      return { ...initialState, membership: action.payload, all: false };
    },
    setPfp(_, action) {
      return { ...initialState, pfp: action.payload, all: false };
    },
    setExhibition(_, action) {
      return { ...initialState, exhibition: action.payload, all: false };

      //   state.exhibition = action.payload;
    },
  },
});

export const {
  setAll,
  setGaming,
  setPhotography,
  setArt,
  setMembership,
  setPfp,
  setExhibition,
} = navigationSlice.actions;
export default navigationSlice.reducer;
