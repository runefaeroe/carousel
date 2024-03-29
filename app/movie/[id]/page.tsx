import NotFound from "@/app/not-found";
import AddFavoriteMovie from "@/src/components/AddFavoriteMovie";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  try {
    const response = await fetch(
      `${process.env.OMDB_BASE_URL}/?i=${params.id}&apikey=${process.env.API_KEY}`,
    );

    const movie = await response.json();

    const genre = movie.Genre.split(", ");

    return (
      <div className="relative max-w-3xl p-6 mx-auto mt-16 md:flex md:flex-wrap">
        <Link href="/" className="absolute top-0 hover:underline">
          &lt; Tilbake
        </Link>
        <div className="flex justify-center mt-8">
          <img src={movie.Poster} alt={movie.Title} className="rounded-lg" />
        </div>
        <div className="flex-1 mt-8 md:p-6">
          <AddFavoriteMovie imdbID={movie.imdbID} />
          <h1 className="text-2xl font-bold">{movie.Title}</h1>
          <div className="flex gap-4 mt-4">
            <p className="text-lg font-bold">{movie.Year}</p>
            <p className="text-lg font-bold">{movie.Runtime}</p>|
            <div className="flex flex-wrap gap-2">
              {genre.map((genre: string) => {
                return (
                  <p
                    key={genre}
                    className="self-start px-2 font-medium border-2 rounded-full text-md"
                  >
                    {genre}
                  </p>
                );
              })}
            </div>
          </div>
          <p className="mt-4">
            &#9733;{movie.imdbRating}/10 - {movie.imdbVotes} votes
          </p>
          <div className="mt-8">
            <p className="text-lg font-bold">Plot</p>
            <p className="mt-2">{movie.Plot}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return NotFound();
  }
}
