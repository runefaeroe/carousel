"use client";

import { useState } from "react";

const AddFavoriteMovie = ({ imdbID }: { imdbID: string }) => {
  const storedFavoriteMovies = localStorage.getItem("favoriteMovies");
  const initialFavoriteMovies: string[] = storedFavoriteMovies
    ? JSON.parse(storedFavoriteMovies)
    : [];
  const [favoriteMovies, setFavoriteMovies] = useState(initialFavoriteMovies);

  const isMovieInFavorites = favoriteMovies.includes(imdbID);

  const toggleMovieFavoriteStatus = () => {
    let updatedFavoriteMovies;

    if (isMovieInFavorites) {
      updatedFavoriteMovies = favoriteMovies.filter((id) => id !== imdbID);
    } else {
      updatedFavoriteMovies = [...favoriteMovies, imdbID];
    }

    localStorage.setItem(
      "favoriteMovies",
      JSON.stringify(updatedFavoriteMovies),
    );
    setFavoriteMovies(updatedFavoriteMovies);
  };

  return (
    <button
      onClick={toggleMovieFavoriteStatus}
      className="text-yellow-500 mb-6"
    >
      {isMovieInFavorites ? (
        <span className="text-2xl">
          &#9733;
          <span className="text-sm">Remove from Favorites</span>
        </span>
      ) : (
        <span className="text-2xl">
          &#9734;
          <span className="text-sm">Add to Favorites</span>
        </span>
      )}
    </button>
  );
};

export default AddFavoriteMovie;
