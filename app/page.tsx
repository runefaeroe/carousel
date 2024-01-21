import Carousel from "../src/components/Carousel/Carousel";
import { fetchRandomMovies } from "../src/utils/getRandomMovies";

export default async function Home() {
  const movies = await fetchRandomMovies();

  return (
    <main className="text-center pt-20 px-8">
      <h1 className="text-4xl mb-6">Movie carousel</h1>

      <Carousel movies={movies} />
    </main>
  );
}
