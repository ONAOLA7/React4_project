import React from "react";
import MovieList from "./MovieList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviePage from "./MoviePage";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={
              <div>
                <MovieList />
              </div>
            }
          />
          <Route path=":id" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
