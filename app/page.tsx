import { fetchRandomMovies } from "../src/utils/getRandomMovies";
import Carousel from "./Carousel";

export default async function Home() {
  const movies = await fetchRandomMovies();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Movie carousel</h1>
      <Carousel movies={movies} />
    </main>
  );
}
