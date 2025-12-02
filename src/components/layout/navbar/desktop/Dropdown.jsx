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
        className={`text-[#1b365e] font-medium px-4 py-2 rounded-lg hover:bg-[#c7f8ff] transition-colors duration-200 ${variant ? `variant-${variant}` : ''} ${open ? 'bg-[#c7f8ff]' : ''}`}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleToggle}
      >
        {label}
      </a>
      {drawer && open && (
        <div className="absolute top-[calc(100%+10px)] left-[-12px] z-[100010] p-0.5">
          <div className="block">
            <SubDropdown drawer={drawer} />
          </div>
        </div>
      )}
    </div>
  );
}