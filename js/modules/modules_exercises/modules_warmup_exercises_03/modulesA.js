import { topMovies } from "./modulesB.js";

const serchMovie = (movie) => {
  if (topMovies.includes(movie)) {
    return true;
  }
  return false;
};

export { topMovies, serchMovie };
