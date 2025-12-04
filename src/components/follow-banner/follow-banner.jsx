// src/components/FollowBanner.jsx
import React, { useState } from "react";
import Image from "next/image";
import Button from "../common/button";
import { mockFormations } from "../../data/mockFormations";
import flowtingIcon from "../../assets/icons/launching-2.svg";

export default function FollowBanner() {
  // Flatten mock data + keep category
  const formations = Object.entries(mockFormations).flatMap(
    ([category, items]) => items.map((item) => ({ ...item, category }))
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((i) => Math.min(i + 2, Math.max(0, formations.length - 2)));
  const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - 2));

  const visibleFormations = formations.slice(currentIndex, currentIndex + 2);

  return (
    <section className="relative w-full">
      {/* Top colored bar */}
      <div className="h-[10px] bg-[#c7f8ff90]" />

      {/* Floating central icon */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-9 w-28 h-28 bg-white border-b-2 border-[#40bfde] rounded-[30px] flex items-center justify-center shadow-lg md:w-[112.47px] md:h-[112.47px] md:-top-[35px]"
        aria-hidden="true"
      >
        <Image
          src={flowtingIcon}
          alt="Icone de lancement"
          className="w-55 h-55 md:w-[90px] md:h-[90px] object-contain "
        />
      </div>

      {/* Main content */}
      <div className="bg-[#c7f8ff90] pt-24 pb-12 md:pt-[130px] md:pb-16">
        <div className="mx-auto px-5 md:px-10 max-w-7xl">
          {/* Title */}
          <h3 className="text-center font-red-hat-display font-light text-3xl leading-9 text-[#1b365e] tracking-wider mb-10 md:text-5xl md:leading-[53px] md:mb-12">
            Formations idéales pour se lancer dans
            <br className="md:hidden" /> l&apos;entreprenariat
          </h3>

          {/* Desktop navigation arrows (hidden on mobile) */}
          <div className="hidden md:flex flex-col gap-8 absolute right-10 top-96 z-10">
            <button
              onClick={handleNext}
              disabled={currentIndex + 2 >= formations.length}
              className="disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-70 transition"
              aria-label="Suivant"
            >
              <Image
                src="/assets/icons/arrows/arrow-blue.svg"
                alt=""
                width={40}
                height={80}
              />
            </button>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-70 transition"
              aria-label="Précédent"
            >
              <Image
                src="/assets/icons/arrows/arrow-grey.svg"
                alt=""
                width={40}
                height={80}
              />
            </button>
          </div>

          {/* Cards – mobile = stacked, desktop = side-by-side */}
          <div className="flex flex-col gap-2 md:flex-row md:gap-5 md:justify-center">
            {visibleFormations.map((formation) => (
              <article
                key={`${formation.category}-${formation.id}`}
                className=" rounded-2xl p-6  flex flex-col justify-between min-h-[320px] md:w-[48%] lg:w-[1040px]"
              >
                <div>
                  <h4 className="font-red-hat-display font-light text-5xl leading-[76px] text-[#40bfde] tracking-wider mb-2 md:text-6xl">
                    {formation.title}
                  </h4>
                  <h5 className="font-red-hat-display font-light text-5xl leading-[76px] text-[#1b365e] tracking-wider mb-4 md:text-2xl">
                    {formation.category}
                  </h5>
                  <p className="text-[#1d1d1d] text-base leading-6 mt-4">
                    {formation.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-1">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-[#1b365e] font-bold hover:gap-3 transition-all"
                  >
                    <Image
                      src="/assets/icons/micro/arrow-right-circle.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                    <span>Découvrir</span>
                  </button>
                  <Button
                    variant="secondary"
                    size="small"
                    className="bg-principal-dark-blue text-white rounded-[9px] px-5 py-2.5 font-lato font-bold text-[13px] leading-[18px] tracking-[0.02em] capitalize min-w-fit h-9 hover:bg-[#163054]"
                  >
                    S&apos;inscrire
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12 w-auto md:w-auto md:h-[58px] h-[58px]">
            <Button
              variant="primary"
              className="hero__btn-primary w-full md:w-auto md:h-[58px] h-[58px]"
            >
              Toutes les formations de l&apos;entreprenariat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
