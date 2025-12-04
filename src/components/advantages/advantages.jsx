import React from "react";
import Image from "next/image";
import Button from "../common/button";

export default function Advantages() {
  const advantages = [
    {
      id: 1,
      title: "Des services à votre mesure",
    },
    {
      id: 2,
      title: "Une évaluation des enseignements",
    },
    {
      id: 3,
      title: "Présentiel, distanciel ou mixte",
    },
    {
      id: 4,
      title: "Accompagnement personnalisé",
    },
  ];

  return (
    <section className="w-full h-auto py-5 bg-[rgba(255,228,180,0.3)] md:h-[1000px] md:py-[60px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[40px]">
        {/* Header with title and rating */}
        <div className="flex flex-col items-center justify-center gap-4 mb-6 relative md:flex-row md:gap-6 md:mb-[70px]">
          <h2 className="font-red-hat-display font-light text-[24px] leading-8 text-center tracking-[0.02em] text-[#1b365e] my-0 mb-4 md:text-[48px] md:leading-[53px] md:my-[10px_0_30px_0]">
            Les avantages de notre méthode
          </h2>
        </div>
        <div className="flex flex-row items-center p-2 gap-2 bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] static mx-auto pt-[5px] md:absolute md:right-0 md:mx-0 md:pt-2">
          <Image
            src="/assets/badges/Evalutation2.png"
            alt="5 étoiles"
            width={100}
            height={62}
            className="w-auto h-12 object-contain md:h-[62px]"
          />
        </div>
        {/* Description */}
        <div className="mb-6 md:mb-[70px]">
          <p className="font-lato font-medium text-[12px] leading-[18px] text-[#1d1d1d] mt-0 text-center mx-auto pt-[5px] max-w-full md:text-[20px] md:leading-[30px] md:mt-[2.5%] md:max-w-[757px] md:max-h-[69px] md:tracking-[0.02em]">
            Nous optimisons le développement et le succès des entrepreneurs et
            des futurs indépendants, grâce à un accompagnement personnalisé et
            sur-mesure
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="flex flex-col items-start gap-3 w-full pl-[60px] pt-[35px] md:flex-row md:items-center md:justify-center md:gap-[60px] md:pl-0 md:pt-0">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className="flex flex-row items-center gap-2 w-auto md:gap-3"
            >
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 md:w-10 md:h-10">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="md:w-10 md:h-10"
                >
                  <circle cx="12" cy="12" r="6" fill="#40BFDE" />
                </svg>
              </div>
              <h3 className="font-lato font-bold text-[14px] leading-5 text-[#1b365e] text-left m-0 md:text-base md:leading-6">
                {advantage.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Journey Section */}
        <div className="flex flex-col items-center mt-10 gap-5 min-h-auto static bg-[url('/assets/images/vector-3.png')] bg-no-repeat pb-6 bg-right md:flex-row md:items-start md:justify-between md:gap-10 md:mt-[70px] md:relative md:min-h-[700px] md:z-0 md:bg-none md:before:content-[''] md:before:absolute md:before:w-[1400px] md:before:h-[290px] md:before:left-1/2 md:before:top-[-40px] md:before:-translate-x-1/2 md:before:bg-[url('/assets/images/vector-2.png')] md:before:bg-no-repeat md:before:bg-center md:before:bg-contain md:before:z-0 md:before:pointer-events-none">
          <div className="static w-full max-w-[200px] h-auto z-[1] md:absolute md:w-[243px] md:h-[299px] md:left-[78px] md:top-0">
            <Image
              src="/assets/images/01.png"
              alt="Orientation & Test de niveau"
              width={243}
              height={299}
              className="w-full h-auto"
            />
          </div>

          <div className="static w-full max-w-[200px] h-auto z-[1] md:absolute md:w-[165px] md:h-[178px] md:left-[394px] md:top-[60px]">
            <Image
              src="/assets/images/02.png"
              alt="Orientation & Test de niveau"
              width={165}
              height={178}
              className="w-full h-auto"
            />
          </div>

          <div className="static w-full max-w-[200px] h-auto z-[1] md:absolute md:w-[243px] md:h-[297px] md:left-[625px] md:top-[65px]">
            <Image
              src="/assets/images/03.png"
              alt="Orientation & Test de niveau"
              width={243}
              height={297}
              className="w-full h-auto"
            />
          </div>

          <div className="static w-full max-w-[200px] h-auto z-[1] md:absolute md:w-[243px] md:h-[210.87px] md:left-[903px] md:top-[85px]">
            <Image
              src="/assets/images/04.png"
              alt="Orientation & Test de niveau"
              width={243}
              height={210.87}
              className="w-full h-auto"
            />
          </div>

          <div className="static w-full max-w-[200px] h-auto z-[1] md:absolute md:w-[243px] md:h-[230px] md:left-[1133px] md:top-[35px]">
            <Image
              src="/assets/images/05.png"
              alt="Orientation & Test de niveau"
              width={243}
              height={230}
              className="w-full h-auto"
            />
          </div>

          {/* Decorations - hidden on mobile */}
          <div className="md:block md:absolute md:w-[14px] md:h-[14px] md:left-[1357px] md:top-[-55px] md:z-[1]">
            <Image
              src="/assets/images/Group-13.png"
              alt="Decoration"
              width={14}
              height={14}
            />
          </div>

          <div className=" left-[30%] top-[100%] md:block md:absolute md:w-[8px] md:h-[8px] md:left-[31px] md:top-[240px] md:z-[1]">
            <Image
              src="/assets/images/Ellipse-13.png"
              alt="Decoration"
              width={8}
              height={8}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-start mt-10 gap-[35px] static z-[3] md:flex-row md:justify-center md:items-center md:mt-[-300px] md:relative">
          <Button
            variant="primary"
            className="hero__btn-primary w-full md:w-auto"
          >
            Découvrir toutes nos formations
          </Button>

          {/* Financement Badge - positioned differently on desktop */}
          <div className="static w-full max-w-[382px] h-auto flex text-center text-[12px] leading-[18px] text-[#1d1d1d] md:absolute md:w-[382px] md:h-10 md:left-[1045px] md:top-[90px] md:z-[6]">
            <Image
              src="/assets/images/Financement.png"
              alt="Financement badge"
              width={382}
              height={40}
              className="w-full h-auto"
            />
          </div>

          {/* Logo */}
          <div className="static w-[150px] h-auto mx-auto mt-4 pb-[70px] md:absolute md:w-[215px] md:h-[14px] md:left-1/2 md:-translate-x-1/2 md:top-[calc(100%+47px)] md:mt-0 md:pb-0">
            <Image
              src="/assets/logos/Calque_1.svg"
              alt="Calque logo"
              width={215}
              height={14}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
