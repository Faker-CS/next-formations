'use client';

import React, { useState } from "react";

export default function SubDropdown({ drawer }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredRight, setHoveredRight] = useState(null);
  const [showRight, setShowRight] = useState(false);

  if (!drawer) return null;

  const leftItems = drawer.items || [];
  const active = activeIndex !== null ? leftItems[activeIndex] : null;
  const rightItems = active ? active.subItems || [] : [];

  const handleLeftClick = (i) => {
    setActiveIndex(i);
    setShowRight(true);
  };

  const handleLeftOpen = (i) => {
    setActiveIndex(i);
    setShowRight(true);
  };

  return (
    <div className="flex gap-0" role="menu" aria-label={drawer.title}>
      <div className="bg-white rounded-xl p-5 pr-0 min-w-[320px] shadow-[0_12px_30px_rgba(10,37,78,0.06)] [&.has-connector]:rounded-tr-none [&.has-connector]:rounded-br-none [&.has-connector]:overflow-visible after:content-[''] after:absolute after:top-0 after:right-[-32px] after:w-[64px] after:h-full after:bg-[#c7f8ff] after:rounded-[0_18px_18px_0] after:z-[1] [&.has-connector]:after:block">
        {leftItems.map((item, i) => (
          <button
            key={item.label + i}
            className={`block w-full text-left bg-transparent border-none p-[10px_12px] mb-2 text-[#1b365e] font-semibold cursor-pointer rounded-lg relative focus:outline-none focus:shadow-none ${i === activeIndex ? 'bg-[#c7f8ff] text-[#1b365e] font-medium rounded-[32px_0_0_32px] shadow-none pr-[56px] mr-[-32px]' : ''}`}
            onClick={() => handleLeftClick(i)}
            onMouseEnter={() => handleLeftOpen(i)}
            onFocus={() => handleLeftOpen(i)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      {showRight && (
        <div className="bg-[#c7f8ff] rounded-xl p-[14px_16px] min-w-[260px] flex items-start relative z-[2]">
          <div className="w-full">
            {rightItems.length === 0 && (
              <div className="text-[#1b365e]">Aucun sous-élément</div>
            )}
            {rightItems.map((r, idx) => (
              <a
                key={r.label + idx}
                href={r.href}
                className={`block p-[10px_12px] mb-2 text-[#1b365e] font-medium rounded-lg transition-colors duration-200 hover:bg-[#40bfde] hover:text-white ${hoveredRight === idx ? 'bg-[#40bfde] text-white' : ''}`}
                onMouseEnter={() => setHoveredRight(idx)}
                onMouseLeave={() => setHoveredRight(null)}
              >
                {r.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}