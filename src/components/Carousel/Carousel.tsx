"use client";
import { useRef } from "react";
import { Movies } from "../../utils/getRandomMovies";
import { CarouselItem } from "./CarouselItem";

const sharedButtonIconStyling =
  "text-5xl bg-white bg-opacity-40 shadow-md rounded-lg text-black w-14 h-14 cursor-pointer";

const Carousel = ({ movies }: { movies: Movies[] }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleLeftButtonClick = () => {
    let carouselElement = carouselRef.current;

    if (carouselElement !== null) {
      carouselElement.scrollLeft -= carouselElement.clientWidth;
    }
  };

  const handleRightButtonClick = () => {
    let carouselElement = carouselRef.current;

    if (carouselElement !== null) {
      carouselElement.scrollLeft += carouselElement.clientWidth;
    }
  };

  return (
    <div>
      <div className="p-6 bg-blue-500">
        <div
          className="flex overflow-x-hidden scroll-smooth no-scrollbar max-w-screen-2xl mx-auto mb-8 gap-4"
          ref={carouselRef}
        >
          {movies.map((movie) => {
            return (
              <CarouselItem
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
              />
            );
          })}
        </div>
        <div className="flex justify-center gap-14">
          <button onClick={handleLeftButtonClick}>
            <p className={sharedButtonIconStyling}>&lt;</p>
          </button>
          <button onClick={handleRightButtonClick}>
            <p className={sharedButtonIconStyling}>&gt;</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
