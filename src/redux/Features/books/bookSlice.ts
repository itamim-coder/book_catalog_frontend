// filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";

interface IBookFilter {
  genre: string;
  year: string;
  searchQuery: string;
}

const initialState: IBookFilter = {
  genre: "",
  year: "",
  searchQuery: "",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setGenre, setYear, setSearchQuery } = bookSlice.actions;

export default bookSlice.reducer;
