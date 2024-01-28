"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Movies } from "../../utils/getRandomMovies";
import { CarouselItem } from "./CarouselItem";

const sharedButtonIconStyling =
  "bg-[#6704FF] cursor-pointer h-14 rounded-lg shadow-md text-5xl text-[#FAFAFA] w-14";

const Carousel = ({ movies }: { movies: Movies[] }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

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

  const handleScroll = () => {
    let carouselElement = carouselRef.current;

    if (carouselElement) {
      setIsAtStart(carouselElement.scrollLeft === 0);
      setIsAtEnd(
        carouselElement.scrollLeft + carouselElement.clientWidth ===
          carouselElement.scrollWidth,
      );
    }
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [carouselRef]);

  return (
    <>
      <div
        className="cards no-scrollbar grid grid-flow-col auto-cols-[100%] gap-x-2.5 list-none overflow-x-scroll scroll-smooth snap-x snap-mandatory mb-6"
        ref={carouselRef}
      >
        {movies.map((movie) => {
          return (
            <Link
              href={`/movie/${movie.imdbID}`}
              key={movie.imdbID}
              className="relative flex snap-center snap-start md:snap-start max-h-[600px] bg-white p-5 rounded-lg shadow transition duration-200"
            >
              <CarouselItem title={movie.Title} poster={movie.Poster} />
            </Link>
          );
        })}
      </div>
      <nav className="flex justify-center gap-x-5 md:gap-x-8 xl:gap-x-10">
        <button
          onClick={handleLeftButtonClick}
          disabled={isAtStart}
          className={`${
            isAtStart ? "pointer-events-none opacity-50" : ""
          } focus:outline-none ${sharedButtonIconStyling}`}
          aria-label="Scroll left"
        >
          &lt;
        </button>

        <button
          onClick={handleRightButtonClick}
          disabled={isAtEnd}
          className={`${
            isAtEnd ? "pointer-events-none opacity-50" : ""
          } focus:outline-none ${sharedButtonIconStyling}`}
          aria-label="Scroll right"
        >
          &gt;
        </button>
      </nav>
    </>
  );
};

export default Carousel;
