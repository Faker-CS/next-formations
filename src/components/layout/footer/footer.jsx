import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-auto pt-10 bg-[#1b365e] text-white md:h-[413px]">
      <div className="max-w-[1440px] mx-auto p-0 px-6 md:pt-7 md:px-0">
        <div className="flex flex-col gap-10 md:flex-row md:gap-10">
          <div className="flex flex-col gap-10 mb-[1px] border-b-0 md:flex-row md:gap-10 md:border-b md:border-[#c7f8ff] md:mb-[110px]">
            <div className="flex flex-col items-start gap-4 w-full md:flex-[0_0_auto]">
              <div className="relative w-full max-w-full flex flex-col-reverse gap-3 md:w-[242px] md:h-auto md:mb-0 md:flex-col">
                <Image src="/assets/images/logo-SF-H.png" alt="Spot Formations" width={221} height={15} className="relative bottom-0 right-0 mt-0 mb-0 md:mt-[-10px] md:mb-[14px]" />
                <Image
                  src="/assets/images/chloe-photo.svg"
                  alt="Formation"
                  width={221}
                  height={125}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="flex-none w-full text-left md:flex-[0_0_270px]">
              <h3 className="font-['Red_Hat_Display'] font-bold text-[14px] leading-[20px] tracking-[0.02em] text-white my-[18px_0_8px_0]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </h3>
              <p className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white m-0 mb-2">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
              <p className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white m-0 mb-2">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
            </div>
            
          </div>

          <div className="static w-auto mt-5 left-0 bottom-0 order-10 pt-5 border-t border-[#c7f8ff] flex items-center text-white whitespace-nowrap md:relative md:left-[-41.5%] md:w-[104px] md:bottom-[-55px] md:mt-0 md:pt-0 md:border-t-0" aria-hidden="false">
            <Image src="/assets/svgs/globe-solid-2.svg" alt="Language Icon" width={28} height={28} className="w-7 h-7 rounded-full inline-flex items-center justify-center text-[#c7f8ff] p-1" />
            <span className="font-lato text-[14px] text-white">Français (FR)</span>
          </div>

          <div className="flex-1 grid grid-cols-1 gap-8 order-5 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-10">
            <div className="flex flex-col w-full h-auto mt-0 lg:mt-[18px] lg:w-[188px] lg:h-[154px]">
              <h4 className="font-['Red_Hat_Display'] font-bold text-[12px] leading-[18px] tracking-[0.02em] text-white m-0 mb-[10px]">
                Nos Formations par catégorie
              </h4>
              <ul className="list-none p-0 m-0 mb-3">
                <li className="mb-[6px] last:mb-0">
                  <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]">Marketing et Digital</a>
                </li>
                <li className="mb-[6px] last:mb-0">
                  <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]">Développement Commercial et Entrepreneuriat</a>
                </li>
                <li className="mb-[6px] last:mb-0">
                  <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]">Réseaux Sociaux et Contenus</a>
                </li>
                <li className="mb-[6px] last:mb-0">
                  <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]">Outils et Productivité</a>
                </li>
                <li className="mb-[6px] last:mb-0">
                  <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]">Développement Personnel et Leadership</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col w-full h-auto mt-0 lg:mt-[18px] lg:w-[157px] lg:h-[214px]">
              <h4 className="font-['Red_Hat_Display'] font-bold text-[12px] leading-[18px] tracking-[0.02em] text-white m-0 mb-[10px]">
                Vos droits et nos devoirs
              </h4>
              <ul className="list-none p-0 m-0 mb-3">
                <li className="mb-[6px] last:mb-0">
                  <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]">CGU /CGV</a>
                </li>
                <li className="mb-[6px] last:mb-0">
                  <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]">Mentions Légales</a>
                </li>
                <li className="mb-[6px] last:mb-0">
                  <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]">Politique de confidentialité</a>
                </li>
                <li className="mb-[6px] last:mb-0">
                  <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]">Règlement</a>
                </li>
                <li className="mb-[6px] last:mb-0">
                  <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]">Notre Société</a>
                </li>
              </ul>
              <div className="flex flex-col gap-2">
                <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-[#40bfde] no-underline transition-opacity duration-200 hover:opacity-80 m-0">
                  Accessibilité réduite disponible
                </a>
                <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-[#40bfde] no-underline transition-opacity duration-200 hover:opacity-80 m-0">
                  Contact du référent
                </a>
              </div>
            </div>

            <div className="flex flex-col w-full h-auto mt-0 lg:mt-[18px] lg:w-[168px] lg:h-[257px]">
              <h4 className="font-['Red_Hat_Display'] font-bold text-[12px] leading-[18px] tracking-[0.02em] text-white m-0 mb-[10px]">À propos de nous</h4>
              <ul className="list-none p-0 m-0 mb-3">
                <li className="mb-[6px] last:mb-0">
                  <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]">Qui sommes nous ?</a>
                </li>
                <li className="mb-[6px] last:mb-0">
                  <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]">Devenir Mentor</a>
                </li>
                <li className="mb-[6px] last:mb-0">
                  <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]">La Méthode Spot Formations</a>
                </li>
                <li className="mb-[6px] last:mb-0">
                  <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]">Nous rejoindre</a>
                </li>
                <li className="mb-[6px] last:mb-0">
                  <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]">Programme Organisme Certificateur</a>
                </li>
              </ul>
              <div className="flex flex-col mt-auto">
                <Image
                  src="/assets/badges/qualiopi.svg"
                  alt="Qualiopi"
                  width={100}
                  height={50}
                  className="mb-2"
                />
                <p className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-[#40bfde] m-0">
                  Numéro de déclaration d&apos;activité
                  <br />
                  NDA : 000-0000
                </p>
              </div>
            </div>

            <div className="flex flex-col w-full h-auto mt-0 lg:mt-[18px] lg:w-[143px] lg:h-[215px]">
              <h4 className="font-['Red_Hat_Display'] font-bold text-[12px] leading-[18px] tracking-[0.02em] text-white m-0 mb-[10px]">Nous contacter</h4>
              <ul className="list-none p-0 m-0 mb-3">
                <li className="mb-[6px] last:mb-0">
                  <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]">Enseigner chez nous</a>
                </li>
                <li className="mb-[6px] last:mb-0">
                  <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]">+33 0 00 00 00 00</a>
                </li>
                <li className="mb-[6px] last:mb-0">
                  <a href="mailto:minimal@minimal.com" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]">minimal@minimal.com</a>
                </li>
                <li className="mb-[6px] last:mb-0">
                  <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]">Lorem Ipsum</a>
                </li>
                <li className="mb-[6px] last:mb-0">
                  <a href="#" className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]">Lorem Ipsum</a>
                </li>
              </ul>
              <div className="flex gap-3 mt-2 justify-start">
                <a href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white no-underline transition-all duration-200 hover:bg-[#40bfde] hover:border-[#40bfde]">
                  <i className="fab fa-instagram text-[16px]"></i>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white no-underline transition-all duration-200 hover:bg-[#40bfde] hover:border-[#40bfde]">
                  <i className="fab fa-instagram text-[16px]"></i>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white no-underline transition-all duration-200 hover:bg-[#40bfde] hover:border-[#40bfde]">
                  <i className="fab fa-instagram text-[16px]"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-[32px_0] flex flex-col gap-4 justify-center items-center text-left order-15 md:p-[56px_0] md:flex-row md:text-center">
          <p className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-[#f5b942] mt-0 text-left md:mt-[18px] md:text-center">
            Spot Formations 2025 © Tous les droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}