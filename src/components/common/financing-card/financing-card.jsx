'use client';

import Image from "next/image";
import React from "react";

export default function FinancingCard({ item }) {
  return (
    <div className="w-full h-auto max-w-full border border-[#e6eef6] rounded-[10px] p-4 bg-white flex flex-col gap-[1px] shadow-[0_4px_12px_rgba(27,54,94,0.04)] box-border text-left md:w-[223px] md:h-[320px]">
      <div className="flex w-full justify-start items-start">
        <div className="flex flex-col">
          <h4 className="m-0 mb-[6px] font-semibold text-[18px] text-[#163054] whitespace-nowrap text-left">
            {item.title}
          </h4>
          {item.subtitle && (
            <span className="block text-[13px] text-[#163054]">
              {item.subtitle}
            </span>
          )}
        </div>
      </div>

      <div className="flex justify-start items-start w-full mt-[6px]">
        <Image 
          src={`/assets/logos/financement/${item.logo}`} 
          alt={item.title} 
          className="w-[140px] h-auto object-contain"
        />
      </div>

      <p className="mt-[6px] mb-0 text-[13px] text-[#26343f] leading-[1.5] min-h-[80px] overflow-hidden text-left">
        {item.description}
      </p>

      <div className="h-[1px] bg-[#e6eef6] my-3" />

      <a 
        href={item.href} 
        className="mt-auto flex items-center gap-[6px] text-[#163054] font-semibold no-underline justify-center whitespace-nowrap mx-auto group"
      >
        <Image 
          src="/assets/icons/micro/arrow-right-circle.svg" 
          alt={item.ctaLabel}
          className="w-6 h-6 rounded-full p-1 object-contain group-hover:bg-[#f4fbff]"
        />
        <span className="inline-block whitespace-nowrap text-[#163054]">
          {item.ctaLabel}
        </span>
      </a>
    </div>
  );
}