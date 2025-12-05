import React from "react";
import Form from "../common/form";
import Image from "next/image";

export default function Evaluation() {
  return (
    <section className="w-full bg-bg-light-blue/50 min-h-auto py-16 mt-[39px] relative md:min-h-[844px] md:py-20">
      <div className="max-w-[1352px] h-auto mx-auto px-6 flex flex-col items-center text-center md:h-[677px] md:px-10">
        <div className="flex flex-col justify-center items-center px-4 py-3 gap-2.5 absolute left-1/2 top-[-22px] -translate-x-1/2 w-[65px] h-[45px] z-10 bg-white border-b border-secondary-light-blue rounded-[40px]">
          <Image width={38} height={38} src="/vector.svg" alt="Spot Formations" />
        </div>

        <p className="font-red-hat-display font-light text-sm leading-[22px] text-center tracking-[0.02em] text-principal-dark-blue mb-4 w-full flex-none order-0 grow-0 md:text-[40px] md:leading-[50px] md:w-[802px] md:h-[106px] md:mb-0">
          Vous ne savez pas encore quelle formation
          <br />
          est la meilleure option pour vous ?
        </p>

        <h2 className="font-red-hat-display font-bold-6 text-[32px] leading-10 text-center tracking-[0.02em] text-principal-dark-blue m-0 mb-10 md:text-[56px] md:leading-[37px] md:m-[60px]">
          Nous sommes là pour bien vous orienter
        </h2>

        <div className="w-full min-h-auto flex flex-col gap-8 justify-center items-start md:w-[1033px] md:min-h-[420px] md:flex-row md:gap-10">
          <div className="flex-1 w-full max-w-full px-0 md:max-w-[580px] md:px-0">
            <h3 className="font-lato font-black text-xs leading-5 tracking-[0.02em] text-principal-dark-blue m-0 mb-5 text-left w-full md:font-semibold md:text-lg md:leading-6 md:my-5 md:mx-3 md:mb-6 md:w-[439px] md:h-[60px]">
              Créez votre <strong>dossier de candidature</strong> et nous vous
              <br />
              aiderons à construire votre parcours de formation.
            </h3>
            
            <div className="flex flex-col gap-3 items-start md:gap-4">
              <div className="flex items-center gap-[10px] w-full my-0 md:gap-5 md:my-2.5">
                <span className="w-5 h-5 bg-secondary-light-blue rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 md:w-6 md:h-6 md:text-sm" />
                <span className="font-lato font-bold text-xs leading-[18px] tracking-[0.02em] text-principal-dark-blue flex-1 text-left md:text-lg md:leading-[26px]">
                  Évaluation de vos objectifs d&apos;apprentissage
                </span>
              </div>
              
              <div className="flex items-center gap-[10px] w-full my-0 md:gap-5 md:my-2.5">
                <span className="w-5 h-5 bg-secondary-light-blue rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 md:w-6 md:h-6 md:text-sm" />
                <span className="font-lato font-bold text-xs leading-[18px] tracking-[0.02em] text-principal-dark-blue flex-1 text-left md:text-lg md:leading-[26px]">
                  Comprendre vos préférences
                </span>
              </div>
              
              <div className="flex items-center gap-[10px] w-full my-0 md:gap-5 md:my-2.5">
                <span className="w-5 h-5 bg-secondary-light-blue rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 md:w-6 md:h-6 md:text-sm" />
                <span className="font-lato font-bold text-xs leading-[18px] tracking-[0.02em] text-principal-dark-blue flex-1 text-left md:text-lg md:leading-[26px]">
                  Choisir le bon format de formation
                </span>
              </div>
              
              <div className="flex items-center gap-[10px] w-full my-0 md:gap-5 md:my-2.5">
                <span className="w-5 h-5 bg-secondary-light-blue rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 md:w-6 md:h-6 md:text-sm" />
                <span className="font-lato font-bold text-xs leading-[18px] tracking-[0.02em] text-principal-dark-blue flex-1 text-left md:text-lg md:leading-[26px]">
                  Construire votre parcours de formation
                </span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-full h-auto md:max-w-[412px] md:h-[420px]">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}