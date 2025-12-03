// src/components/topformations/view/BestRated.jsx
import React, { useEffect } from "react";
import Card from "../../common/card"; // Assuming adapted to Tailwind
import Button from "../../common/button";
import DotNavigation from "../../common/dot-navigation";
import useCarousel from "../hooks/useCarousel";
import Image from "next/image"; // Using Next.js Image for optimization

export default function BestRated({
  formations,
  currentIndex,
  handleNext,
  handlePrev,
  handleBookmark,
  handleDiscover,
}) {
  // Use shared carousel hook for mobile interactions (step=1)
  const {
    index: mobileIndex,
    goto,
    touchHandlers,
    keyboardHandlers,
    visibleRange,
  } = useCarousel({ length: formations.length, pageSize: 1, initialIndex: currentIndex, step: 1 });

  // Keep mobile index in sync when parent pagination changes
  useEffect(() => {
    const target = currentIndex || 0;
    if (mobileIndex !== target) goto(target);
  }, [currentIndex, formations.length, goto]);

  const visibleFormations = formations.slice(currentIndex, currentIndex + 4);

  const handleCardClick = (i) => goto(i);

  return (
    <>
      <p className="font-lato font-normal text-base leading-6 text-center text-[#1D1D1D] mx-auto max-w-[900px]">
        Rien ne vaut le témoignage de ceux qui sont passés par là. Nous vous
        présentons ici une sélection de nos formations. Ces évaluations, basées
        sur des critères rigoureux tels que la qualité de l&apos;enseignement, la
        pertinence du contenu et l&apos;impact sur les projets, sont la meilleure
        garantie de la qualité de notre Méthode.{" "}
        <a href="#methode" className="text-[#1b365e] no-underline font-bold cursor-pointer transition-colors duration-300 ease-in-out hover:underline">
          En savoir plus sur notre Méthode
        </a>
      </p>

      <div className="relative w-full">
        {/* Desktop Navigation Arrows */}
        <div className="absolute top-[65px] right-[-60px] flex flex-col gap-2 z-10 hidden md:flex">
          <button
            type="button"
            className="w-[35px] h-[75px] bg-transparent border-none flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out flex-shrink-0 p-0 hover:opacity-70 disabled:opacity-90 disabled:cursor-not-allowed"
            aria-label="Suivant"
            onClick={handleNext}
            disabled={currentIndex + 4 >= formations.length}
          >
            <Image src="/assets/icons/arrows/arrow-blue.svg" alt="Suivant" width={40} height={80} className="object-contain" />
          </button>
          <button
            type="button"
            className="w-[35px] h-[75px] bg-transparent border-none flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out flex-shrink-0 p-0 hover:opacity-70 disabled:opacity-90 disabled:cursor-not-allowed"
            aria-label="Précédent"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <Image src="/assets/icons/arrows/arrow-grey.svg" alt="Précédent" width={40} height={80} className="object-contain" />
          </button>
        </div>

        <div className="flex items-center w-full max-w-[1400px] relative">
          {/* Desktop Grid - show all 4 cards */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-7 py-12 pb-5 w-full max-w-[1200px] mx-auto hidden md:grid">
            {visibleFormations.map((formation) => (
              <div key={formation.id} className="relative flex-shrink-0 flex flex-col items-center gap-3">
                <div
                  className={`font-red-hat-display font-semibold text-[clamp(2rem,6vw,5.25rem)] leading-none text-[#1B365E] text-center ${formation.rank > 1 ? 'text-[#40BFDE]' : ''}`}
                >
                  #{formation.rank}
                </div>
                <div className="flex items-center justify-center gap-1 font-lato font-bold text-sm leading-[17px] text-[#1D1D1D]">
                  <span>{formation.rating}</span>
                  <Image src="/assets/icons/icon-star.svg" alt="étoiles" width={16} height={16} />
                </div>
                <Card
                  category={formation.category}
                  title={formation.title}
                  location={formation.location}
                  description={formation.description}
                  price={formation.price}
                  financing={formation.financing}
                  onBookmark={() => handleBookmark(formation.id)}
                  onDiscover={() => handleDiscover(formation.id)}
                />
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div
            className="w-full overflow-visible relative px-5 user-select-none touch-pan-y md:hidden"
            onTouchStart={touchHandlers.onTouchStart}
            onTouchMove={touchHandlers.onTouchMove}
            onTouchEnd={touchHandlers.onTouchEnd}
            onKeyDown={keyboardHandlers.onKeyDown}
            tabIndex={0}
          >
            <div className="flex w-full relative gap-4">
              {formations.map((formation, index) => (
                <div
                  key={formation.id}
                  className={`min-w-[70%] flex-shrink-0 max-w-[320px] relative cursor-pointer opacity-60 transition-all duration-300 ease-in-out active:scale-[0.98] ${index === mobileIndex ? 'opacity-100 z-10' : ''}`}
                  style={{
                    transform: `translateX(-${mobileIndex * 100}%)`,
                    transition: 'transform 0.3s ease-in-out'
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <div
                    className={`font-red-hat-display font-semibold text-[clamp(2rem,6vw,5.25rem)] leading-none text-[#1B365E] text-center absolute -top-[30px] left-[10px] text-[30px] leading-6 z-10 ${formation.rank > 1 ? 'text-[#40BFDE]' : ''}`}
                  >
                    #{formation.rank}
                  </div>
                  <div className="flex items-center justify-center gap-1 font-lato font-bold text-sm leading-[17px] text-[#1D1D1D] absolute -top-[25px] right-[10px] text-[15px] z-10">
                    <span>{formation.rating}</span>
                    <Image src="/assets/icons/icon-star.svg" alt="étoiles" width={15} height={15} />
                  </div>
                  <Card
                    category={formation.category}
                    title={formation.title}
                    location={formation.location}
                    description={formation.description}
                    price={formation.price}
                    financing={formation.financing}
                    onBookmark={() => handleBookmark(formation.id)}
                    onDiscover={() => handleDiscover(formation.id)}
                  />
                </div>
              ))}
            </div>
            
            {/* Mobile Dot Navigation */}
            <DotNavigation
              total={formations.length}
              current={mobileIndex}
              onDotClick={(index) => goto(index)}
            />
          </div>
        </div>

        <p className="font-lato font-normal text-base leading-6 text-center text-[#1B365E] mx-auto max-w-[800px] mt-10">
          OPCO, OPCA, CPF, aides régionales... Optimisez le{" "}
          <u>financement</u> de votre formation
        </p>

        <div className="flex items-center justify-center gap-10 mt-[10px] flex-wrap md:flex-row md:gap-2">
          <Image
            src="/assets/logos/OPCO.png"
            alt="OPCO EP"
            width={160}
            height={80}
            className="object-contain m-[30px] h-[80px] w-[160px] md:h-[85px] md:w-[145px] md:m-[5px]"
          />
          <Image
            src="/assets/logos/Logo-Mon-Compte-Formation-Appli-CPF-1.png"
            alt="Mon Compte Formation"
            width={160}
            height={80}
            className="object-contain m-[30px] h-[80px] w-[160px] md:h-[85px] md:w-[145px] md:m-[5px]"
          />
          <Image
            src="/assets/logos/logo-Region-IDF-2.png"
            alt="Région Île-de-France"
            width={160}
            height={80}
            className="object-contain m-[30px] h-[80px] w-[160px] md:h-[85px] md:w-[145px] md:m-[5px]"
          />
        </div>

        <div className="flex flex-col items-center p-0 gap-8 mt-[25px] mx-auto justify-center md:flex-row md:gap-8 md:w-full md:px-[10px] ">
          <Button variant="ghost" className="btn--ghost w-[379px] h-[58px] max-w-full md:max-w-none">
            Être accompagné dans mon financement
          </Button>
          <Button variant="primary" className="hero__btn-primary w-[320px] h-[58px] max-w-full md:max-w-none">
            Découvrir toutes nos formations
          </Button>
        </div>
      </div>
    </>
  );
}