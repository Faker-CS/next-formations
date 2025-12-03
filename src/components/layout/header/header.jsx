'use client';

import Image from "next/image";

export default function Header() {
  return (
    <div className="relative w-full h-[35px] left-0 top-[2px] bg-[#1B365E] sm:h-[45px] md:h-[50px] lg:h-[45px]">
      <div className="flex flex-row items-center p-0 gap-[1px] absolute w-full max-w-[390px] h-[18px] left-1/2 -translate-x-1/2 top-[8px] sm:gap-1 sm:max-w-[424px] sm:h-[20px] md:max-w-[600px] md:h-[22px] md:gap-2 lg:max-w-[800px] lg:h-[24px] lg:gap-2">
        <p className="w-[200px] h-[18px] font-lato font-normal text-[8px] leading-[16px] ml-[10px] text-center tracking-[0.02em] text-[#D9D9D9] flex-none order-0 grow-0 sm:w-[256px] sm:h-[20px] sm:text-[14px] sm:leading-[20px] sm:ml-0 md:w-[300px] md:text-[16px] md:leading-[24px] lg:w-[400px] lg:text-[18px] lg:leading-[26px]">
          Vous avez une question ? (de 8h à 18h) :
        </p>

        <div className="w-[16px] h-[16px] flex-none order-1 grow-0 relative sm:w-[16px] sm:h-[16px] md:w-[16px] md:h-[16px] lg:w-[28px] lg:h-[28px]">
          <Image
            src="/assets/icons/icon-phone.svg"
            alt=""
            fill
            sizes="(max-width: 768px) 16px, (max-width: 1024px) 16px, 16px"
            className="object-contain"
          />
        </div>

        <p className="w-[132px] h-[18px] font-lato font-bold text-[11px] leading-[16px] text-center tracking-[0.02em] text-white flex-none order-2 grow-0 sm:h-[18px] sm:text-[15px] sm:leading-[18px] md:w-[150px] md:text-[17px] md:leading-[20px] lg:w-[180px] lg:text-[19px] lg:leading-[22px]">
          + 33 6 00 00 00 00
        </p>
      </div>
    </div>
  );
}