import { createSlice } from "@reduxjs/toolkit";
import Movies from "../Movies";

const initialState = {
  movies: Movies,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies = [...state.movies, action.payload];
    },
  },
});

export const movieActions = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
