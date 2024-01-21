import { generate } from "random-words";

export interface Movies {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export const fetchRandomMovies = async (): Promise<Movies[]> => {
  const randomSearchTerm = generate({ min: 10, max: 10 });

  const moviePromise = randomSearchTerm.map(async (term) => {
    try {
      const response = await fetch(
        `${process.env.OMDB_BASE_URL}/?apikey=${process.env.API_KEY}&s=${term}`,
      );
      const data = await response.json();
      return data.Search;
    } catch (error) {
      console.error(error);
    }
  });
  const movies: Movies[] = (await Promise.all(moviePromise)).flatMap(
    (movie) => movie,
  );

  return movies;
};