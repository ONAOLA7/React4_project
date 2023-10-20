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
      const len = state.movies.length;
      const id = len > 0 ? state.movies[len - 1].id + 1 : 1;
      state.movies = [...state.movies, { ...action.payload, id }];
    },
  },
});

export const movieActions = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
