'use client';

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { SUB_DRAWERS } from "../data/navbarData";
import SubDropdown from "./SubDropdown";

export default function Dropdown({ link }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { label, href, variant, subDrawerId } = link;
  const drawer = subDrawerId ? SUB_DRAWERS[subDrawerId] : null;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleToggle = (e) => {
    e.preventDefault();
    setOpen((prev) => {
      if (prev) {
        // Remove focus when closing
        if (dropdownRef.current) {
          dropdownRef.current.querySelector('a')?.blur();
        }
      }
      return !prev;
    });
  };

  return (
    <div
      className="relative inline-block z-[10001]"
      ref={dropdownRef}
    >
      <a
        href={href}
        className={`navbar__menu-btn flex flex-row justify-center items-center px-[18px] py-[12px] gap-[10px] w-auto h-[34px] bg-white rounded-[16px] font-lato font-bold text-[14px] leading-[14px] tracking-[0.02em] text-[#1b365e] no-underline flex-none flex-grow-0 z-[7] hover:bg-[#f5f5f5] active:bg-[#d9d9d9] active:border active:border-[#40bfde] active:rounded-[24px] navbar__menu-btn--highlight hover:bg-[#c7f8ff] hover:rounded-[24px] hover:text-[#1b365e] focus:bg-[#c7f8ff] focus:text-[#1B365E] focus:font-bold focus:border-t-[20px] focus:border-t-[#c7f8ff] focus:border-b-0 focus:border-l-0 focus:border-r-0 focus:rounded-t-[20px] focus:relative focus:z-[100001] focus:shadow-[0_2px_8px_rgba(27,54,94,0.08)] focus:after:content-[""] focus:after:absolute focus:after:bottom-[-18px] focus:after:left-0 focus:after:right-0 focus:after:h-[20px] focus:after:bg-[#c7f8ff] ${open ? 'bg-[#c7f8ff]' : ''}`}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleToggle}
      >
        {label}
      </a>
      {drawer && open && (
        <div className="navbar__dropdown-menu absolute top-full left-0 p-[2px] z-[100010]">
          <div className="navbar__dropdown-list-wrapper block">
            <div className="navbar__dropdown-inner flex gap-0">
              <SubDropdown drawer={drawer} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}