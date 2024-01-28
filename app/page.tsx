import Carousel from "../src/components/Carousel/Carousel";
import { fetchRandomMovies } from "../src/utils/getRandomMovies";
import NotFound from "./not-found";

export default async function Home() {
  try {
    const movies = await fetchRandomMovies();

    return (
      <main className="px-4 pt-20 text-center md:px-8">
        <h1 className="mb-6 text-4xl">Movie carousel</h1>
        <Carousel movies={movies} />
      </main>
    );
  } catch (error) {
    return NotFound();
  }
}
