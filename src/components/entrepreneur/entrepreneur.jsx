import React from "react";
import Image from "next/image";
import Button from "../common/button";

export default function Entrepreneur() {
  return (
    <section className="w-full bg-white py-[60px]">
      <div className="max-w-[1440px] h-auto py-0 mx-auto px-[20px] relative md:h-[320px] md:px-[40px] md:py-0">
        <div className="absolute w-[112px] h-[67px] right-[20px] bottom-0 flex items-center justify-center rounded-lg z-10 md:right-[28px] md:top-[105px] md:bottom-auto">
          <Image src="/vector.svg" alt="Spot Formations" width={112} height={67} className="object-contain" />
        </div>

        <div className="box-border flex flex-col items-start p-4 gap-4 bg-[#c7f8ff] rounded-xl relative w-full max-w-[calc(100%-15px)] h-auto left-[0] top-0 z-[3] mx-auto text-left md:absolute md:w-[483px] md:max-w-none md:h-[308px] md:left-[28px] md:top-[5px] md:p-6 md:mx-0 md:text-left">
          {/* Decorative before */}
          <div className="absolute bg-[#c7f8ff] rounded-2xl w-1 h-[calc(100%-32px)] right-[-8px] left-auto top-4 -z-[1] md:w-[5px] md:h-[276px] md:left-[486px] md:right-auto md:top-[16px]"></div>
          {/* Decorative after */}
          <div className="absolute bg-[#c7f8ff] rounded-2xl w-[3px] h-[calc(100%-58px)] right-[-14px] left-auto top-[29px] -z-[2] md:w-[3px] md:h-[250px] md:left-[494px] md:right-auto md:top-[29px]"></div>

          <div className="flex flex-col gap-3 flex-1 pr-0 items-center text-center w-full md:pr-[100px] md:items-start md:text-left">
            <h3 className="font-lato font-bold text-base leading-[22px] text-[#1d1d1d] my-0 mb-2 text-center md:text-[18px] md:leading-6 md:my-[6px] md:text-left">
              Vous lancez votre entreprise ?
            </h3>
            <p className="font-lato font-medium text-sm leading-5 text-[#1d1d1d] my-0 mb-2 text-center md:text-base md:leading-5 md:my-[10px_0_6px_0] md:text-left">
              Difficile de réussir dans l&apos;entrepreneuriat sans même tenter
              l&apos;aventure !
            </p>
            <p className="font-lato font-medium text-sm leading-5 text-[#1d1d1d] my-0 mb-2 text-center md:text-base md:leading-5 md:my-[10px_0_6px_0] md:text-left">
              Spot Formations vous accompagne tout au long de votre parcours de
              lancement, pour développer votre potentiel !
            </p>
            <p className="entrepreneur__author italic font-lato text-sm leading-5 text-[#1d1d1d] mt-2 mb-0 text-center md:text-base md:leading-5 md:mt-3 md:text-left">
              <em>Chloé Lecomte, Fondatrice de Spot Formations</em>
            </p>
          </div>
          <div className="static m-auto mb-4 order-[-1] w-[80px] h-[80px] rounded-full overflow-hidden md:absolute md:top-6 md:right-6 md:m-0 md:order-[0]">
            <Image src="/assets/images/Chloé.png" alt="Chloé Lecomte" width={80} height={80} className="object-cover" />
          </div>
        </div>

        <div className="mt-6 text-center md:mt-[320px]">
          <h2 className="font-red-hat-display font-bold text-[32px] leading-[40px] text-[#1b365e] mb-4 sm:text-[40px] sm:leading-[48px] md:text-[60px] md:leading-[64px] md:mb-6">
            Spot Formations
          </h2>
          <p className="font-lato text-sm leading-6 text-[#1d1d1d] max-w-full px-4 mx-auto sm:text-base md:text-[18px] md:leading-6 md:max-w-[900px] md:px-0">
            Découvrez nos{" "}
            <strong>
              solutions de formation et d&apos;accompagnement sur mesure
            </strong>{" "}
            aux entrepreneurs, et aux futurs indépendants tout au long de leur
            parcours de lancement. Spot Formations assure une assistance
            personnalisée qui s&apos;aligne sur les parcours uniques des entreprises.
            La qualité de notre méthode est garantie par notre{" "}
            <strong>processus d&apos;amélioration continue</strong>.
          </p>
        </div>

        <div className="flex flex-col gap-8 mt-6 px-4 justify-center md:flex-row md:gap-8 md:mt-10 md:px-0">
          <Button variant="ghost" className="w-full max-w-full md:w-full md:max-w-[300px]">
            Se laisser guider
          </Button>
          <Button variant="primary" className="hero__btn-primary w-full max-w-full md:w-full md:max-w-[300px]">
            Choisir votre formation
          </Button>
        </div>
      </div>
    </section>
  );
}