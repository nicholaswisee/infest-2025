"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardData } from "@/types";
import Link from "next/link";

interface EventCarouselProps {
  cards: CardData[];
}

const EventCarousel: React.FC<EventCarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  if (!cards || cards.length === 0) {
    return null;
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center bg-[#240046] py-16 px-4 overflow-hidden rounded-xl">
      <div className="absolute left-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-r from-[#240046] via-[#240046]/40 to-transparent z-30 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-l from-[#240046] via-[#240046]/40 to-transparent z-30 pointer-events-none" />
      <div className="relative w-[90%] lg:w-[70%] h-[250px] md:h-[350px] [perspective:1200px]">
        {cards.map((card, index) => {
          const totalItems = cards.length;
          const offset = index - currentIndex;

          let normalizedOffset = offset;
          if (offset > totalItems / 2) {
            normalizedOffset = offset - totalItems;
          } else if (offset < -totalItems / 2) {
            normalizedOffset = offset + totalItems;
          }

          const transformStyle = {
            transform: `
              translateX(${(normalizedOffset * 100) / 2}%) 
              scale(${1 - Math.abs(normalizedOffset) * 0.25}) 
              rotateY(${normalizedOffset * -45}deg)
            `,
            zIndex: totalItems - Math.abs(normalizedOffset),
            opacity: Math.abs(normalizedOffset) > 1 ? 0 : 1,
          };

          return (
            <div
              key={card.id}
              className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
              style={{
                transformStyle: "preserve-3d",
                ...transformStyle,
              }}
            >
              <div className="relative w-full h-full max-w-[450px] md:max-w-[550px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>

                {/* PERUBAHAN DI SINI:
                  Container konten utama sekarang hanya 'relative' untuk menjadi jangkar bagi anak-anaknya.
                */}
                <div className="relative z-10 h-full text-white">
                  {/* Blok teks ini dipusatkan secara absolut */}
                  <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-6 md:px-8">
                    <h3 className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-b from-white via-[#DABBFF] to-white text-transparent bg-clip-text">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-white font-semibold md:font-bold line-clamp-4 text-shadow-lg">
                      {card.description}
                    </p>
                  </div>

                  {/* Tombol See More diposisikan secara absolut di pojok kanan bawah */}
                  <a
                    href={card.link}
                    onClick={(e) => e.preventDefault()} // Mencegah navigasi di pratinjau
                    className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-fit bg-gradient-to-r from-zinc-300 to-violet-300 rounded-full shadow-[0px_4px_22.100000381469727px_0px_rgba(255,255,255,0.50)] text-[#2F016D] font-[600] px-4 md:px-6 py-2 sm:py-3 transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative flex items-center justify-center mt-12 w-full max-w-xs">
        <button
          onClick={handlePrev}
          className="text-white/70 hover:text-white transition-colors p-2"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex items-center justify-center gap-3 mx-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="text-white/70 hover:text-white transition-colors p-2"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default EventCarousel;
