import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchModal: false,
  filteredNft: "",
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
  },
});

export const { setSearchModal, setFilteredNft } = searchSlice.actions;
export default searchSlice.reducer;
