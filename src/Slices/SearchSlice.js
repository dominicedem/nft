import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchModal: false,
  filteredNft: "",
  filteredExhibition: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchModal(state, action) {
      state.searchModal = action.payload;
    },
    setFilteredNft(state, action) {
      state.filteredNft = action.payload;
    },
    setFilteredExhibition(state, action) {
      state.filteredExhibition = action.payload;
    },
  },
});

export const { setSearchModal, setFilteredNft, setFilteredExhibition } =
  searchSlice.actions;
export default searchSlice.reducer;
