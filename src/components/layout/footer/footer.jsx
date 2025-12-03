import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full h-auto md:h-[413px] pt-10 bg-[#1b365e] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <Image
          src="/assets/images/logo-SF-H.png"
          alt="Spot Formations"
          width={221}
          height={15}
          className="absolute mb-4 md:mb-0 md:left-[1.94%] md:right-[82.71%] md:top-[7.99%] md:bottom-[88.38%]"
        />
        <div className="flex flex-col gap-10 md:flex-row md:gap-6 lg:gap-8  md:bottom-[-88.38%]">
          {/* Left section with image and description */}
          <div className="flex flex-col gap-10 md:flex-row md:gap-6 lg:gap-8 md:flex-shrink-0">
            {/* Image with language selector */}
            <div className="flex flex-col items-start gap-4 w-full md:w-[242px] bottom-66">
              <Image
                src="/assets/images/chloe-photo.svg"
                alt="Formation"
                width={242}
                height={137}
                className="w-full h-auto object-cover"
              />
              <div
                aria-hidden="true"
                className="hidden md:block w-[536px] h-[1px] bg-white/20 ml-4 md:ml-[90px] self-center"
              ></div>

              {/* Language selector below image with divider */}
              <div className="flex items-center gap-3 text-white mt-4 w-full md:items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/svgs/globe-solid-2.svg"
                    alt="Language Icon"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span className="font-lato text-[14px] text-white">
                    Français (FR)
                  </span>
                </div>
              </div>
            </div>

            {/* Description text */}
            <div className="w-full md:w-[270px] text-left">
              <h3 className="font-['Red Hat Display', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'] font-bold text-[14px] leading-[20px] tracking-[0.02em] text-white mb-2">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </h3>
              <p className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white mb-2">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
              <p className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
            </div>
          </div>

          {/* Right section with columns */}
          <div className="flex-1 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {/* Column 1: Nos Formations */}
            <div className="flex flex-col">
              <h4 className="font-['Red Hat Display', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'] font-bold text-[12px] leading-[18px] tracking-[0.02em] text-white mb-3">
                Nos Formations par catégorie
              </h4>
              <ul className="list-none p-0 m-0 space-y-1">
                <li>
                  <a
                    href="#"
                    className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]"
                  >
                    Marketing et Digital
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]"
                  >
                    Développement Commercial et Entrepreneuriat
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]"
                  >
                    Réseaux Sociaux et Contenus
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]"
                  >
                    Outils et Productivité
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]"
                  >
                    Développement Personnel et Leadership
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Vos droits */}
            <div className="flex flex-col">
              <h4 className="font-['Red Hat Display', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'] font-bold text-[12px] leading-[18px] tracking-[0.02em] text-white mb-3">
                Vos droits et nos devoirs
              </h4>
              <ul className="list-none p-0 m-0 space-y-1 mb-4">
                <li>
                  <a
                    href="#"
                    className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]"
                  >
                    CGU /CGV
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]"
                  >
                    Mentions Légales
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]"
                  >
                    Politique de confidentialité
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]"
                  >
                    Règlement
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]"
                  >
                    Notre Société
                  </a>
                </li>
              </ul>
              <div className="flex flex-col gap-1">
                <a
                  href="#"
                  className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-[#40bfde] no-underline transition-opacity duration-200 hover:opacity-80"
                >
                  Accessibilité réduite disponible
                </a>
                <a
                  href="#"
                  className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-[#40bfde] no-underline transition-opacity duration-200 hover:opacity-80"
                >
                  Contact du référent
                </a>
              </div>
            </div>

            {/* Column 3: À propos */}
            <div className="flex flex-col">
              <h4 className="font-['Red Hat Display', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'] font-bold text-[12px] leading-[18px] tracking-[0.02em] text-white mb-3">
                À propos de nous
              </h4>
              <ul className="list-none p-0 m-0 space-y-1 mb-4">
                <li>
                  <a
                    href="#"
                    className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]"
                  >
                    Qui sommes nous ?
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]"
                  >
                    Devenir Mentor
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]"
                  >
                    La Méthode Spot Formations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]"
                  >
                    Nous rejoindre
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]"
                  >
                    Programme Organisme Certificateur
                  </a>
                </li>
              </ul>
              <div className="mt-auto">
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

            {/* Column 4: Nous contacter */}
            <div className="flex flex-col">
              <h4 className="font-['Red Hat Display', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'] font-bold text-[12px] leading-[18px] tracking-[0.02em] text-white mb-3">
                Nous contacter
              </h4>
              <ul className="list-none p-0 m-0 space-y-1 mb-4">
                <li>
                  <a
                    href="#"
                    className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]"
                  >
                    Enseigner chez nous
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]"
                  >
                    +33 0 00 00 00 00
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:minimal@minimal.com"
                    className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]"
                  >
                    minimal@minimal.com
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]"
                  >
                    Lorem Ipsum
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:text-[#40bfde]"
                  >
                    Lorem Ipsum
                  </a>
                </li>
              </ul>
              <div className="flex gap-3 justify-start">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white no-underline transition-all duration-200 hover:bg-[#40bfde] hover:border-[#40bfde]"
                >
                  <i className="fab fa-instagram text-[14px]"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white no-underline transition-all duration-200 hover:bg-[#40bfde] hover:border-[#40bfde]"
                >
                  <i className="fab fa-linkedin-in text-[14px]"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white no-underline transition-all duration-200 hover:bg-[#40bfde] hover:border-[#40bfde]"
                >
                  <i className="fab fa-twitter text-[14px]"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <p className="font-lato font-normal text-[12px] leading-[18px] tracking-[0.02em] text-[#f5b942] mb-[9px] flex justify-center">
          Spot Formations 2025 © Tous les droits réservés
        </p>
      </div>
    </footer>
  );
}
