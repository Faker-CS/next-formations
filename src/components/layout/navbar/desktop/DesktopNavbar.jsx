'use client';

import React, { useState, useRef, useEffect } from "react";
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
    <nav className="flex items-center justify-between" aria-label="Navigation principale">
      {links.map((link) => {
        if (link.subDrawerId) {
          return <Dropdown key={link.label} link={link} />;
        }

        return (
          <a
            key={link.label}
            href={link.href}
            className={`text-[#1b365e] font-medium px-4 py-2 rounded-lg hover:bg-[#c7f8ff] transition-colors duration-200 ${link.variant ? `variant-${link.variant}` : ''}`}
          >
            {link.label}
          </a>
        );
      })}

      <div className="flex items-center gap-4">
        <a href="#contact" className="bg-[#fc7f16] text-white px-6 py-3 rounded-full font-bold hover:bg-[#e56e14] transition-colors duration-200">
          Nous contacter
        </a>
        <div className="w-[1px] h-6 bg-[#e4ebf6]"></div>

        <div ref={accountRef} className="relative inline-block">
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${accountOpen ? 'bg-[#c7f8ff]' : ''} hover:bg-[#c7f8ff] transition-colors duration-200`}
            aria-label="Mon compte"
            aria-expanded={accountOpen}
            onClick={() => setAccountOpen((v) => !v)}
          >
            <span className="w-5 h-5">
              <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
                <circle cx="9.5" cy="4" r="3.25" stroke="#FC7F16" strokeWidth="1.5" />
                <path d="M2 13C2 10.2386 4.23858 8 7 8H12C14.7614 8 17 10.2386 17 13" stroke="#FC7F16" strokeWidth="1.5" />
              </svg>
            </span>
            <span className="w-3 h-3">
              <Image src="/assets/icons/down-arrow.svg" alt="Arrow" width={12} height={12} />
            </span>
          </button>

          {accountOpen && (
            <div className="absolute right-[-50px] top-[calc(100%+10px)] z-[100020] w-[460px] h-[319px] overflow-hidden">
              {/* <LoginForm onClose={() => setAccountOpen(false)} /> */}
            </div>
          )}
        </div>

        <button className="p-2 rounded-lg hover:bg-[#c7f8ff] transition-colors duration-200" aria-label="Favoris">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M3 2.5C3 1.67157 3.67157 1 4.5 1H13.5C14.3284 1 15 1.67157 15 2.5V16.5L9 13L3 16.5V2.5Z"
              stroke="#FC7F16"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}