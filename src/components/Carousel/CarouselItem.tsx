"use client";

export const CarouselItem = ({
  title,
  poster,
}: {
  title: string;
  poster: string;
}) => {
  return (
    <div role="group" className="relative w-full h-full cursor-pointer group">
      <img
        src={poster}
        alt={title}
        className="object-cover w-full h-full transition-transform transform group-hover:scale-100"
      />

      <div className="absolute inset-0 flex items-center justify-center p-4 w-full h-full bg-[#100118] bg-opacity-80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-lg font-bold text-white">{title}</p>
      </div>
    </div>
  );
};
