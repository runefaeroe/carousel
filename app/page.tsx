import Carousel from "../src/components/Carousel/Carousel";
import { fetchRandomMovies } from "../src/utils/getRandomMovies";

export default async function Home() {
  const movies = await fetchRandomMovies();

  return (
    <main>
      <h1>Movie carousel</h1>

      <Carousel movies={movies} />
    </main>
  );
}
