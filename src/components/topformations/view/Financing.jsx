import React, { useEffect, useState } from "react";
import FinancingCard from "../../common/financing-card"; // Assuming adapted to Tailwind
import mockFinancing from "../../../data/mockFinancing";
import DotNavigation from "../../common/dot-navigation"; // Assuming adapted
import Button from "../../common/button"; // Assuming adapted
import useCarousel from "../hooks/useCarousel";
import Image from "next/image";

export default function Financing({
  formations,
  currentIndex,
  handleNext,
  handlePrev,
  handleBookmark,
  handleDiscover,
}) {
  // Note: formations and related props seem unused; consider removing if not needed
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia("(max-width: 768px)");
      setIsMobile(media.matches);

      const listener = (e) => setIsMobile(e.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }
  }, []);

  const pageSize = isMobile ? 1 : 4;
  const step = pageSize;
  const cardWidth = isMobile ? 223 : 284;
  const gap = isMobile ? 34 : 16;
  const length = mockFinancing.length;
  const maxIndex = length - pageSize;

  const {
    index,
    goto,
    touchHandlers,
    keyboardHandlers,
  } = useCarousel({
    length,
    pageSize,
    initialIndex: 0,
    step,
  });

  return (
    <>
      <p className="font-lato font-normal text-base leading-6 text-center text-[#1D1D1D] mx-auto max-w-[900px]">
        Prise en charge de votre formation grâce aux dispositifs d’aide au
        financement d&apos;une formation professionnelle, adaptés à différentes
        situations. Optimisez le financement de votre formation selon votre
        contexte.
      </p>
      <div className="relative w-full overflow-hidden mt-6">
        <div
          className={`w-full relative px-${isMobile ? '[calc((100vw-223px)/2)]' : '4'} user-select-none touch-pan-x outline-none`}
          onTouchStart={touchHandlers.onTouchStart}
          onTouchMove={touchHandlers.onTouchMove}
          onTouchEnd={touchHandlers.onTouchEnd}
          onKeyDown={keyboardHandlers.onKeyDown}
          tabIndex={0}
        >
          <div
            className={`flex relative gap-${isMobile ? '[34px]' : '4'}`}
            style={{
              transform: `translateX(-${index * (cardWidth + gap)}px)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {mockFinancing.map((f) => (
              <FinancingCard
                key={f.id}
                item={f}
                className="flex-shrink-0"
                style={{ minWidth: `${cardWidth}px` }}
              />
            ))}
          </div>
        </div>

        {!isMobile && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
            <button
              type="button"
              className="w-[35px] h-[75px] bg-transparent border-none flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out flex-shrink-0 p-0 hover:opacity-70 disabled:opacity-90 disabled:cursor-not-allowed"
              aria-label="Suivant"
              onClick={() => goto(Math.min(index + step, maxIndex))}
              disabled={index + step > maxIndex}
            >
              <Image
                width={24}
                height={24}
                src="/assets/icons/arrows/arrow-blue.svg"
                alt="Suivant"
                className="w-10 h-20 object-contain"
              />
            </button>
            <button
              type="button"
              className="w-[35px] h-[75px] bg-transparent border-none flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out flex-shrink-0 p-0 hover:opacity-70 disabled:opacity-90 disabled:cursor-not-allowed"
              aria-label="Précédent"
              onClick={() => goto(Math.max(index - step, 0))}
              disabled={index === 0}
            >
              <Image
                width={24}
                height={24}
                src="/assets/icons/arrows/arrow-grey.svg"
                alt="Précédent"
                className="w-10 h-20 object-contain"
              />
            </button>
          </div>
        )}

        {isMobile && (
          <DotNavigation
            total={length}
            current={index}
            onDotClick={(i) => goto(i)}
          />
        )}
      </div>
      <p className="font-lato font-normal text-base leading-6 text-center text-[#1d1d1d] mx-auto max-w-[800px] mt-10">
        Vous pouvez financer tout ou une partie de votre parcours de formation
        grâce aux dispositifs d’aide.
      </p>
      <div className="flex flex-row items-center p-0 gap-8 mt-[25px] mx-auto justify-center md:flex-col md:w-full md:px-[10px]">
        <Button
          variant="ghost"
          className="btn--ghost w-[379px] max-w-full md:max-w-none"
        >
          Être accompagné dans mon financement
        </Button>
      </div>
    </>
  );
}