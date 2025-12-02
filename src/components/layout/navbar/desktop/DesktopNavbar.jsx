'use client';

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";
// import LoginForm from "../../../../auth/components/LoginForm";
import Image from "next/image";

export default function DesktopNavbar({ links }) {
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setAccountOpen(false);
      }
    }

    if (accountOpen) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [accountOpen]);

  return (
    <div className="navbar__menu flex flex-row justify-end items-center p-0 gap-[18px] isolate m-auto w-[1024px] h-[48px] flex-none order-1 flex-grow-0 z-[100001] xl:w-auto xl:gap-[12px] lg:gap-[12px]">
      {links.map((link) => {
        if (link.subDrawerId) {
          return <Dropdown key={link.label} link={link} />;
        }

        return (
          <Link
            key={link.label}
            href={link.href}
            className={`navbar__menu-btn flex flex-row justify-center items-center px-[18px] py-[12px] gap-[10px] w-auto h-[34px] bg-white rounded-[16px] font-lato font-bold text-[14px] leading-[14px] tracking-[0.02em] text-[#1b365e] no-underline flex-none flex-grow-0 z-[7] hover:bg-[#f5f5f5] active:bg-[#d9d9d9] active:border active:border-[#40bfde] active:rounded-[24px] lg:px-[12px] lg:py-[8px] lg:text-[11px] md:px-[8px] md:py-[6px] md:text-[10px] ${link.variant === 'highlight' ? 'navbar__menu-btn--highlight hover:bg-[#c7f8ff] hover:rounded-[24px] hover:text-[#1b365e] focus:bg-[#c7f8ff] focus:text-[#1B365E] focus:font-bold focus:border-t-[20px] focus:border-t-[#c7f8ff] focus:border-b-0 focus:border-l-0 focus:border-r-0 focus:rounded-t-[20px] focus:relative focus:z-[100001] focus:shadow-[0_2px_8px_rgba(27,54,94,0.08)] focus:after:content-[""] focus:after:absolute focus:after:bottom-[-18px] focus:after:left-0 focus:after:right-0 focus:after:h-[20px] focus:after:bg-[#c7f8ff]' : ''} ${link.variant === 'secondary' ? 'navbar__menu-btn--secondary bg-[#efefef] rounded-[28px] text-[#1b515e] active:bg-[#d9d9d9] active:border active:border-[#40bfde] active:rounded-[24px] hover:bg-[#c7f8ff] hover:rounded-[24px] hover:text-[#1b365e]' : ''}`}
          >
            {link.label}
          </Link>
        );
      })}

      <div className="navbar__actions flex flex-row items-center p-0 gap-[14px] w-[283px] h-[38px] flex-none order-7 flex-grow-0 z-0 lg:w-auto md:justify-center">
        <Link href="/contact" className="navbar__contact-btn flex flex-row justify-center items-center px-[18px] py-[10px] gap-[10px] w-[121px] h-[34px] bg-[#ffe4b4] rounded-[24px] font-lato font-bold text-[11.9px] leading-[14px] tracking-[0.02em] text-[#1b365e] no-underline flex-none order-0 flex-grow-0 transition-all hover:bg-[#ffd89b] active:bg-[#fc7f16] active:text-white">
          Nous contacter
        </Link>
        <div className="navbar__divider w-[2px] h-[27px] bg-[#c7f8ff] opacity-60 border-0 rounded-[2px] flex-none order-1 flex-grow-0"></div>

        <div ref={accountRef} className="relative inline-block">
          <button
            className={`navbar__account-btn relative w-[80px] h-[38px] bg-white border-transparent rounded-[84px] cursor-pointer p-[12px] bg-gradient-to-b from-white to-white bg-origin-border bg-clip-padding flex-none order-2 flex-grow-0 transition-all hover:bg-[#ffe4b4] hover:bg-gradient-to-b hover:from-[#ffe4b4] hover:to-[#ffe4b4] active:bg-[#fc7f16] active:bg-none ${accountOpen ? 'is-open bg-[#ffe4b4] font-bold border-t-[20px] border-t-[#ffe4b4] border-b-0 border-l-0 border-r-0 rounded-t-[20px] relative z-[100001] after:content-[""] after:absolute after:bottom-[-18px] after:left-0 after:right-0 after:h-[20px] after:bg-[#ffe4b4]' : ''}`}
            aria-label="Mon compte"
            aria-expanded={accountOpen}
            onClick={() => setAccountOpen((v) => !v)}
          >
            <div className="navbar__account-icon absolute left-[23.75%] top-[30.02%] flex items-center justify-center">
              <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
                <circle cx="9.5" cy="4" r="3.25" stroke="#FC7F16" strokeWidth="1.5" />
                <path d="M2 13C2 10.2386 4.23858 8 7 8H12C14.7614 8 17 10.2386 17 13" stroke="#FC7F16" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="navbar__arrow absolute left-[61.25%] top-[36%] flex items-center justify-center">
              <Image src="/assets/icons/down-arrow.svg" alt="Arrow" width={12} height={12} />
            </div>
          </button>

          {accountOpen && (
            <div className="absolute right-[-50px] top-[calc(100%+10px)] z-[100020] w-[460px] h-[319px] overflow-hidden">
              {/* <LoginForm onClose={() => setAccountOpen(false)} /> */}
            </div>
          )}
        </div>

        <button className="navbar__bookmark-btn flex flex-row justify-center items-center p-[10px] gap-[8px] w-[38px] h-[38px] bg-white border border-[#fc7f16] rounded-[20px] cursor-pointer flex-none order-3 flex-grow-0 transition-all hover:bg-[#fff5e6] hover:scale-105 active:bg-[#fc7f16]" aria-label="Favoris">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M3 2.5C3 1.67157 3.67157 1 4.5 1H13.5C14.3284 1 15 1.67157 15 2.5V16.5L9 13L3 16.5V2.5Z"
              stroke="#FC7F16"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}