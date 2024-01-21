"use client";

export const CarouselItem = ({
  title,
  poster,
}: {
  title: string;
  poster: string;
}) => {
  return (
    <div className="relative basis-full flex-grow md:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex-shrink-0 flex justify-center max-h-[600px]">
      <div className="relative group cursor-pointer w-full h-full object-cover">
        <img
          src={poster}
          alt={title}
          className="w-full h-full object-cover transition-transform transform group-hover:scale-105 rounded-2xl"
        />

        <div className="p-4 w-full h-full absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:scale-105 bg-[#100118] bg-opacity-80">
          <p className="text-white text-lg font-bold">{title}</p>
        </div>
      </div>
    </div>
  );
};
