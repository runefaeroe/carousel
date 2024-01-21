"use client";

import { useEffect, useState } from "react";

const AddFavoriteMovie = ({ imdbID }: { imdbID: string }) => {
  const [isMovieInFavorites, setIsMovieInFavorites] = useState(false);

  const toggleMovieFavoriteStatus = () => {
    const storedFavoriteMovies = localStorage.getItem("favoriteMovies");
    const favoriteMovies: string[] = storedFavoriteMovies
      ? JSON.parse(storedFavoriteMovies)
      : [];

    if (!favoriteMovies.includes(imdbID)) {
      favoriteMovies.push(imdbID);
      localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
      setIsMovieInFavorites(true);
    } else {
      const updatedFavoriteMovies = favoriteMovies.filter(
        (id) => id !== imdbID,
      );
      localStorage.setItem(
        "favoriteMovies",
        JSON.stringify(updatedFavoriteMovies),
      );
      setIsMovieInFavorites(false);
    }
  };

  useEffect(() => {
    const storedFavoriteMovies = localStorage.getItem("favoriteMovies");
    const favoriteMovies: string[] = storedFavoriteMovies
      ? JSON.parse(storedFavoriteMovies)
      : [];
    setIsMovieInFavorites(favoriteMovies.includes(imdbID));
  }, [imdbID]);

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
