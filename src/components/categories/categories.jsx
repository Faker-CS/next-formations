'use client';

import { useState } from "react";
import Image from "next/image";
import { H1, H2, H6 } from "../common/typography";
import DotNavigation from "../common/dot-navigation";
import Cat01 from "../../assets/icons/Illust_MD_1.png";
import Cat02 from "../../assets/icons/launching-2.svg";
import Cat03 from "../../assets/icons/Ill-RS.svg";
import Cat04 from "../../assets/icons/Illustration_productivité.svg";
import Cat05 from "../../assets/icons/Illustration_leader.svg";

export default function Categories() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const categories = [
    {
      id: 1,
      icon: Cat01,
      title: "Marketing Digital",
    },
    {
      id: 2,
      icon: Cat02,
      title: "Management & Leadership",
    },
    {
      id: 3,
      icon: Cat03,
      title: "Marketing Digital",
    },
    {
      id: 4,
      icon: Cat04,
      title: "Finance & Comptabilité",
    },
    {
      id: 5,
      icon: Cat05,
      title: "Soft Skills & Communication",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + categories.length) % categories.length
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleCardClick = (index) => {
    if (index > currentSlide) {
      handleNext();
    } else if (index < currentSlide) {
      handlePrev();
    }
  };

  return (
    <section className="w-full bg-white flex justify-center relative py-[40px] md:py-[40px]">
      <div className="max-w-[1200px] w-full p-0 text-center">
        <H1 className="font-red-hat-display font-normal text-[24px] leading-[32px] text-center !text-[#1b365e] mt-[5px] mb-[15px] md:text-[40px] md:leading-[70px]">
          Votre autonomie, c&apos;est notre réussite !
        </H1>

        <H2 className="font-lato font-bold text-[14px] leading-[20px] text-center text-[#fc7f16] m-0 mb-[40px] static md:text-[26px] md:leading-[24px] md:mb-[60px]">
          Les catégories de nos formations
        </H2>

        {/* Desktop Grid - visible on larger screens */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-[40px] lg:grid-cols-5 lg:gap-[32px] w-full max-w-[1200px] mx-auto items-center">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center justify-center bg-white border border-[#e0e0e0] rounded-2xl transition-all duration-300 ease-in-out cursor-pointer aspect-square hover:bg-[#f9f9f9] hover:border-[#fc7f16] hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
              <div className="w-full h-auto flex items-center justify-center">
                <Image src={category.icon} alt={category.title} width={154} height={154} className="w-[70%] h-auto object-cover block" />
              </div>
              <p className="font-lato font-bold text-[14px] leading-[20px] text-center text-[#1b365e] m-0 mb-2">
                {category.title}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel - visible on mobile */}
        <div
          className="block md:hidden w-full overflow-hidden relative p-[0_20px] select-none touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex w-full relative gap-4">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`flex flex-col items-center justify-center p-[16px_12px] gap-3 min-w-[70%] flex-shrink-0 max-w-[280px] cursor-pointer opacity-60 transition-[opacity,transform] duration-300 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : ""}`}
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: "transform 0.3s ease-in-out",
                }}
                onClick={() => handleCardClick(index)}
              >
                <div className="w-[80px] h-[80px] rounded-full bg-[#c7f8ff] flex items-center justify-center">
                  <Image src={category.icon} alt={category.title} width={60} height={60} className="object-contain" />
                </div>
                <p className="font-lato font-semibold text-[12px] leading-[18px] text-center tracking-[0.02em] text-[#1b365e] m-0 mb-2">
                  {category.title}
                </p>
              </div>
            ))}
          </div>

          <DotNavigation
            total={categories.length}
            current={currentSlide}
            onDotClick={setCurrentSlide}
          />
        </div>
      </div>

      {/* Floating logo */}
      <div className="box-border flex items-center justify-center p-[8px_10px] gap-[10px] absolute left-1/2 -translate-x-1/2 top-[-20px] z-[9] w-[65px] h-[41px] bg-white border-b border-[#40bfde] rounded-[40px]">
        <Image src="/vector.svg" alt="Spot Formations" width={45} height={21} className="w-full h-auto" />
      </div>
    </section>
  );
}