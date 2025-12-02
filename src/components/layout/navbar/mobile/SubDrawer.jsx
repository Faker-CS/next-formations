'use client';

import React from "react";
import Image from "next/image";
import Button from "../../../common/button";

export default function SubDrawer({ config, isOpen, onBack, onClose }) {
  if (!config) return null;

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen bg-white z-[100001] overflow-y-auto translate-x-full transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : ''}`} aria-hidden={!isOpen}>
      <div className="flex items-center justify-between p-4 border-b border-[#e4ebf6]">
        <button className="w-10 h-10 border-none bg-[#f1f4fb] flex items-center justify-center cursor-pointer" aria-label="Retour au menu" type="button" onClick={onBack}>
          <Image src="/assets/icons/arrows/Back_arrow.svg" alt="Retour" width={24} height={24} className="block mx-auto" />
        </button>
        <div className="flex flex-col items-center gap-2 font-bold text-[#1b365e] text-[15px]">
          <Image src="/assets/images/logo-SF-H_blue.svg" alt="Spot Formations" width={150} height={24} />
          <span>{config.title}</span>
        </div>
      </div>

      <div className="flex-1 p-[24px_20px_32px] flex flex-col gap-6 overflow-y-auto">
        <ul className="list-none m-0 p-0 flex flex-col gap-3">
          {config.items.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="flex items-center justify-between p-[14px_18px] rounded-[28px] border border-[#e4ebf6] bg-white text-[#1b365e] no-underline font-bold text-sm shadow-[0_12px_30px_rgba(10,37,78,0.08)]">
                <span>{item.label}</span>
                <span className="w-3 h-3" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4 2L8 6L4 10" stroke="#1B365E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-8 mt-auto">
          {config.ctas.map((cta) => (
            <Button key={cta.id} href={cta.href} className={`w-full justify-center h-[58px] ${cta.className}`}>
              {cta.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}