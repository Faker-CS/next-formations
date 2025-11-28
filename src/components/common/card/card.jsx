import React from 'react';
import Image from 'next/image'
import Button from '../button/Button';

export default function Card({
  category = "Marketing et Digital",
  title = "Ventes",
  location = "Paris - 6 jours",
  description = "Techniques de prospection, négociation et fidélisation client.",
  price = "1500€ TTC",
  financing = "Financement OPCO",
  onBookmark,
  onDiscover,
}) {
  return (
    <div className="flex flex-col items-end p-5 gap-2 w-[284px] h-[303px] bg-bg-light-blue rounded-3xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      {/* Header with tag and bookmark */}
      <div className="w-[244px] h-7 relative flex-none order-0 grow-0">
        <div className="flex flex-row items-center px-2 py-1 gap-3 absolute w-auto max-w-[150px] h-7 left-0 top-0 bg-white rounded-2xl font-lato font-normal text-[11px] leading-5 tracking-wide text-secondary-dark-green whitespace-nowrap overflow-hidden text-ellipsis">
          {category}
        </div>
        <button 
          className="flex flex-row justify-center items-center p-[3px] absolute w-7 h-7 right-0 top-0.5 bg-white border-none rounded-xl cursor-pointer transition-background duration-300 ease-in-out hover:bg-gray-100" 
          onClick={onBookmark} 
          aria-label="Ajouter aux favoris"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M3 2.5C3 1.67157 3.67157 1 4.5 1H13.5C14.3284 1 15 1.67157 15 2.5V16.5L9 13L3 16.5V2.5Z"
              stroke="#FC7F16"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>

      {/* Content section */}
      <div className="flex flex-col items-start p-0 w-[244px] h-[167px] flex-none order-2 self-stretch grow-0">
        <div className="flex flex-col items-start p-0 gap-3 w-[240px] flex-none order-0 self-stretch grow-0">
          <div className="flex flex-col items-start p-0 gap-[3px] w-[240px] flex-none order-0 self-stretch grow-0">
            <h3 className="font-lato font-bold text-base leading-[26px] tracking-[0.02em] text-text-black m-0 flex-none order-0 grow-0">
              {title}
            </h3>
            <p className="font-lato font-normal text-xs leading-5 tracking-[0.02em] text-principal-dark-blue m-0 flex-none order-1 grow-0">
              {location}
            </p>
          </div>
          <p className="font-lato font-normal text-sm leading-5 tracking-[0.02em] text-text-black m-0 text-left flex-none order-1 self-stretch grow-0">
            {description}
          </p>
        </div>
        <div className="mt-5 flex flex-col items-start gap-0.5">
          <div className="font-lato font-bold text-[15px] leading-[18px] tracking-[0.02em] text-principal-dark-blue">
            {price}
          </div>
          <div className="w-auto h-5 whitespace-nowrap font-lato font-normal text-[10px] leading-5 tracking-[0.03em] text-principal-dark-blue flex-none order-1 grow-0">
            {financing}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-[244px] h-0 border-t border-white flex-none order-3 self-stretch grow-0"></div>

      {/* Footer with buttons */}
      <div className="flex flex-row justify-between items-center py-2 px-0 gap-2.5 w-[244px] h-11 flex-none order-4 grow-0">
        <button 
          className="flex flex-row items-center p-0 gap-2 bg-transparent border-none cursor-pointer font-lato font-bold text-[15px] leading-[18px] tracking-[0.02em] text-principal-dark-blue transition-opacity duration-300 ease-in-out hover:opacity-70" 
          onClick={onDiscover}
        >
          <Image src="/assets/icons/micro/arrow-right-circle.svg" alt="Découvrir" width={18} height={18} className="flex-none order-0 grow-0" />
          <span className="flex-none order-1 grow-0">Découvrir</span>
        </button>
        <Button 
          variant="secondary" 
          size="small" 
          className="bg-principal-dark-blue text-white rounded-[9px] px-5 py-2.5 font-lato font-bold text-[13px] leading-[18px] tracking-[0.02em] capitalize min-w-fit h-9 hover:bg-[#163054] border-none"
        >
          S&apos;inscrire
        </Button>
      </div>
    </div>
  );
}