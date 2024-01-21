"use client";
import { useRef } from "react";
import { Movies } from "../../utils/getRandomMovies";
import { CarouselItem } from "./CarouselItem";

const sharedButtonIconStyling =
  "text-5xl bg-[#6704FF] shadow-md rounded-lg text-[#FAFAFA] w-14 h-14 cursor-pointer";

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
      <div className="m-8">
        <div
          className="flex overflow-y-hidden overflow-x-auto scroll-smooth no-scrollbar  mx-auto mb-8 gap-8 no-scrollbar"
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
