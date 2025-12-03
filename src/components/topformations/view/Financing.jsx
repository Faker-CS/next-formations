// src/components/topformations/view/Financing.jsx
import React, { useEffect } from "react";
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
  const visibleFormations = formations.slice(currentIndex, currentIndex + 4);

  // Carousel for financing mock items (mobile)
  const {
    index: financingIndex,
    goto: gotoFin,
    touchHandlers: financingTouch,
    keyboardHandlers: financingKeyboard,
  } = useCarousel({
    length: mockFinancing.length,
    pageSize: 1,
    initialIndex: 0,
    step: 1,
  });

  return (
    <>
      <p className="font-lato font-normal text-base leading-6 text-center text-[#1D1D1D] mx-auto max-w-[900px]">
        Prise en charge de votre formation grâce aux dispositifs d’aide au
        financement d&apos;une formation professionnelle, adaptés à différentes
        situations. Optimisez le financement de votre formation selon votre
        contexte.
      </p>
      <div className="relative">
        <div className="flex flex-row gap-4 pl-4 mt-6 w-full overflow-x-auto touch-pan-x flex-nowrap items-start md:grid md:grid-cols-1 md:gap-4 md:p-0 md:overflow-visible md:pl-3">
          {mockFinancing.map((f) => (
            <FinancingCard key={f.id} item={f} />
          ))}
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
          <button
            type="button"
            className="w-[35px] h-[75px] bg-transparent border-none flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out flex-shrink-0 p-0 hover:opacity-70 disabled:opacity-90 disabled:cursor-not-allowed"
            aria-label="Suivant"
            onClick={handleNext}
            disabled={currentIndex + 4 >= formations.length}
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
            onClick={handlePrev}
            disabled={currentIndex === 0}
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
      </div>
      <div className="relative w-full">
        <div className="flex items-center w-full max-w-[1400px] relative">
          {/* Mobile Carousel */}
          <div
            className="w-full overflow-visible relative px-[calc((100vw-223px)/2)] user-select-none touch-pan-y hidden md:block"
            onTouchStart={financingTouch.onTouchStart}
            onTouchMove={financingTouch.onTouchMove}
            onTouchEnd={financingTouch.onTouchEnd}
            onKeyDown={financingKeyboard.onKeyDown}
            tabIndex={0}
          >
            <div
              className="flex w-full relative gap-[34px]"
              style={{
                transform: `translateX(-${financingIndex * (223 + 34)}px)`,
                transition: "transform 0.3s ease-in-out",
              }}
            >
              {mockFinancing.map((f, index) => (
                <div
                  key={f.id}
                  className={`min-w-[223px] flex-shrink-0 max-w-[320px] relative cursor-pointer opacity-60 transition-opacity duration-300 ease-in-out hover:scale-[0.98] ${
                    index === financingIndex ? "opacity-100 z-10" : ""
                  }`}
                  onClick={() => gotoFin(index)}
                >
                  <FinancingCard item={f} />
                </div>
              ))}
            </div>

            <DotNavigation
              total={mockFinancing.length}
              current={financingIndex}
              onDotClick={(index) => gotoFin(index)}
            />
          </div>
        </div>

        <p className="font-lato font-normal text-base leading-6 text-center text-[#1B365E] mx-auto max-w-[800px] mt-10">
          Vous pouvez financer tout ou une partie de votre parcours de formation
          grâce aux dispositifs d’aide.
        </p>

        <div className="flex flex-row items-center p-0 gap-8 mt-[25px] mx-auto justify-center md:flex-col md:w-full md:px-[10px]">
          <Button
            variant="ghost"
            className="btn--ghost w-full max-w-full md:max-w-none"
          >
            Être accompagné dans mon financement
          </Button>
        </div>
      </div>
    </>
  );
}
