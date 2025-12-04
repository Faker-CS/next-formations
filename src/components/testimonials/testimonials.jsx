import React from "react";
import Image from "next/image";
import { H2 } from "../common/typography";

const mockTestimonial = {
  name: "Martha",
  title: "Entrepreneuse",
  avatar: "/assets/images/Martha_Murguia.png",
  quoteTitle:
    "Martha, entrepreneuse atypique, propulse son activité grâce à nos formations et à l'accompagnement sur mesure",
  text: `Martha est une entrepreneuse dont l'activité ne court pas les rues. À la fois commerçante, promotrice et importatrice, elle évolue dans un secteur niche qui exige une communication ciblée et efficace. Consciente de l'importance d'une présence en ligne performante, Martha avait un projet web en cours, mais manquait des compétences techniques pour le mener à bien de manière autonome. C'est dans cette optique qu'elle a rejoint la formation WordPress proposée par Spot Formations. La formation WordPress s'est avérée être une véritable révélation pour Martha. Grâce à une approche pédagogique axée sur la pratique, elle a rapidement acquis les compétences nécessaires pour gérer son site web en toute autonomie. « Les exercices pratiques étaient vraiment l'idéal pour moi », explique-t-elle.

L'expertise du formateur, tant sur le plan technique que pédagogique, a été un facteur déterminant dans la réussite de Martha. « Chloé était non seulement une experte de WordPress, mais elle savait aussi adapter son enseignement à nos différents niveaux », souligne-t-elle. « Elle était toujours disponible pour répondre à nos questions et elle a tout de suite compris mon métier et mon projet »`,
  rating: 4.9,
  date: "14/02/2025",
};

export default function Testimonials({ testimonial = mockTestimonial }) {
  return (
    <section className="w-full bg-gradient-to-b from-[#21365a] to-[#163054] h-auto text-white py-6 pb-8 relative md:h-[643px] md:py-14">
      {/* Background Image with Gradient Mask */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[95%] h-auto pointer-events-none z-0"
        style={{
          maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.45) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.45) 100%)'
        }}
      >
        <Image
          src="/assets/vector/vector-3.png"
          alt=""
          aria-hidden="true"
          width={1200}
          height={643}
          className="w-full h-auto"
        />
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center px-[18px] gap-5 relative z-[1] md:flex-row md:items-start md:text-left md:gap-[100px] md:px-10">
        
        {/* Left - Avatar (hidden on mobile) */}
        <div className="hidden flex-[0_0_200px] items-center justify-center relative md:flex">
          <div className="w-[225.91px] h-[300.94px] rounded-[169.42px] border-b-[6px] border-[#ff5758] shadow-[0_8px_24px_rgba(0,0,0,0.25)] -mt-10 bg-white z-[2] relative rotate-[33.83deg] overflow-hidden top-[105px]">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={286}
              height={381}
              className="object-cover relative -rotate-[33.83deg] scale-125 origin-center"
            />
          </div>
          {/* Decorative rotated image */}
          <Image
            src="/assets/images/vector/vector-3.png"
            alt=""
            aria-hidden="true"
            width={360}
            height={360}
            className="absolute w-[360px] h-auto -right-10 -top-[60px] rotate-[18deg] opacity-95 pointer-events-none z-0"
          />
        </div>

        {/* Center - Content */}
        <div className="flex-1 w-full flex flex-col items-center order-2 md:items-start md:order-[0]">
          <h2 className="font-red-hat-display font-normal text-[20px] leading-7 tracking-normal text-white my-0 mb-3 w-full h-auto order-0 md:font-light md:text-[40px] md:leading-[53px] md:tracking-[0.02em] md:mb-6 md:w-[612px] md:h-[53px]">
            Témoignages
          </h2>
          <H2 className="font-lato font-normal text-[15px] leading-[22px] tracking-normal text-white my-0 mb-5 w-full h-auto md:font-bold md:text-base md:leading-[26px] md:mb-5 md:w-[556px] md:h-[52px]">
            {testimonial.quoteTitle}
          </H2>
          
          <p className="font-lato font-normal text-[13px] leading-[18px] tracking-normal text-white mb-6 w-full h-auto text-center md:text-sm md:leading-5 md:mb-4 md:w-[686px] md:h-[293px] md:text-left md:tracking-[0.02em]">
            Martha est une entrepreneuse dont l&apos;activité ne court pas les rues.
            À la fois commerçante, promotrice et importatrice, elle évolue dans
            un secteur niche qui exige une communication ciblée et efficace.
            Consciente de l&apos;importance d&apos;une présence en ligne performante,
            Martha avait un projet web en cours, mais manquait des compétences
            techniques pour le mener à bien de manière autonome. C&apos;est dans
            cette optique qu&apos;elle a rejoint la formation WordPress proposée par
            Spot Formations.
            <br /> <br/>
            La formation WordPress s&apos;est avérée être une véritable révélation
            pour Martha. Grâce à une approche pédagogique axée sur la pratique,
            elle a rapidement acquis les compétences nécessaires pour gérer son
            site web en toute autonomie. « Les exercices pratiques étaient
            vraiment l&apos;idéal pour moi », explique-t-elle.
            <br /> <br />
            L&apos;expertise du formateur, tant sur le plan technique que pédagogique,
            a été un facteur déterminant dans la réussite de Martha. « Chloé
            était non seulement une experte de WordPress, mais elle savait aussi
            adapter son enseignement à nos différents niveaux », souligne-t-elle. « Elle était toujours disponible pour répondre à nos questions
            et elle a tout de suite compris mon métier et mon projet »
          </p>
          
          <div className="mt-6 order-3 w-full flex justify-center md:mt-2 md:w-auto md:justify-start md:order-[0]">
            <button className="flex items-center gap-2 text-white font-normal hover:gap-3 transition-all text-[15px] py-0 md:text-base md:py-0 md:w-auto md:font-bold" type="button">
              <Image
                src="/assets/icons/micro/arrow-right-circle2.svg"
                alt="Découvrir"
                width={24}
                height={24}
              />
              <span>Découvrir leurs parcours</span>
            </button>
          </div>
        </div>

        {/* Right - Rating Badge */}
        <div className="flex-[0_0_auto] w-full flex justify-center mb-6 order-1 md:flex-[0_0_160px] md:w-auto md:mb-0 md:justify-end md:items-start md:order-[0]">
          <div className="flex items-center gap-2 py-1 px-3 rounded-lg mx-auto mb-0 text-base bg-transparent md:gap-2 md:p-2 md:px-4 md:mb-0 md:mx-0 md:text-base">
            <div className="font-lato font-bold text-[20px] leading-none text-white md:text-[18px]">
              {testimonial.rating}
            </div>
            <div className="text-[#FFD66B] text-[24px] leading-none w-6 h-6 flex items-center justify-center md:text-2xl md:w-6 md:h-6">
              ★
            </div>
            <div className="font-lato font-normal text-[13px] leading-none text-white whitespace-nowrap md:text-xs md:text-[#40BFDE]">
              Noté le {testimonial.date}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}