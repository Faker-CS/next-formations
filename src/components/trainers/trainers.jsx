import React from "react";
import Button from "../common/button";
import Image from "next/image";

export default function Trainers() {
  return (
    <section className="w-full min-h-[564px] py-10 relative md:py-14">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <h2 className="font-red-hat-display font-light text-[32px] leading-10 text-center tracking-[0.02em] text-principal-dark-blue m-0 mb-2 md:text-[44px] md:leading-[53px] md:mb-3">
          Nos formateurs
        </h2>
        <p className="font-lato font-normal text-sm leading-[22px] text-center tracking-[0.02em] text-secondary-light-blue m-0 mb-6 py-[18px] md:text-[24px] md:leading-[26px] md:mb-10">
          Nous ne nous contentons pas de transmettre des connaissances
        </p>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 md:ml-0">
        <div className="flex flex-col gap-6 items-start md:flex-row md:gap-10 md:mb-6">
          <div className="w-full flex flex-col gap-4 order-1 md:flex-none md:w-[335px] md:order-[0]">
            <div className="w-[330.01px] h-[186.03px] bg-gradient-to-br from-[#ff9a56] to-[#ffb347] rounded-lg relative overflow-hidden md:w-[507px] md:h-[263.46px]">
              {/* Main trainer image will go here */}
            </div>
            <div className="absolute top-1/2 left-1/4 -translate-x-[-75px] md:-translate-x-[125px]  -translate-y-1/6 z-10">
              <Image
                width={24}
                height={24}
                src="/assets/logos/Polygon_1.svg"
                alt="Spot Formations"
                className="w-[50px] h-auto md:w-[59.74px] "
              />
            </div>
            <div className="flex gap-3 justify-center w-full md:gap-4 md:justify-start">
              <div className="w-full h-20 bg-gray-200 rounded-lg border-2 border-gray-400 md:w-[128.91px] md:h-[61.21px]">
                {/* Video placeholder 1 */}
              </div>
              <div className="w-full h-20 bg-gray-200 rounded-lg border-2 border-gray-400 md:w-[128.91px] md:h-[61.21px]">
                {/* Video placeholder 2 */}
              </div>
              <div className="w-full h-20 bg-gray-200 rounded-lg border-2 border-gray-400 md:w-[128.91px] md:h-[61.21px]">
                {/* Video placeholder 3 */}
              </div>
            </div>
          </div>

          <div className="flex-col order-2 flex gap-3 w-full md:flex-1 md:gap-6 md:order-[0]">
            <div className="flex text-center flex-col gap-3 w-full md:gap-4 md:w-[685px] md:h-[160px] md:text-left md:translate-x-[150px]">
              <p className="font-lato font-normal text-xs leading-[18px] tracking-[0.02em] text-text-black m-0 md:text-sm md:leading-5">
                Chez Spot Formations, nous sommes dans un
                <strong> processus d&apos;amélioration continue</strong>, et nous
                sommes convaincus que la qualité d&apos;une formation repose avant
                tout sur l&apos;expertise de ses formateurs. C&apos;est pourquoi nous
                avons réuni une équipe de professionnels chevronnés, experts
                dans leur domaine, dotés d&apos;une solide expérience pratique.
              </p>
              <p className="font-lato font-normal text-xs leading-[18px] tracking-[0.02em] text-text-black m-0 md:text-sm md:leading-5">
                Au-delà de la transmission de connaissances,{' '}
                <strong>ils vous offrent un accompagnement personnalisé</strong>
                , un coaching individualisé et un soutien constant tout au long
                de votre parcours d&apos;apprentissage, vous permettant ainsi de
                développer pleinement votre potentiel et d&apos;atteindre vos
                objectifs professionnels.
              </p>
            </div>

            <Button 
              variant="ghost" 
             className="w-[ 200px ] md:w-[220px] md:left-[150px]"
            >
              Enseigner chez nous
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}