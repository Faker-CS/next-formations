// src/components/topformations/tabs/Tabs.jsx
import React from 'react';

export default function Tabs({ tabs = [], activeId, onChange }) {
  return (
    <div className="flex justify-center gap-[116px] mb-[60px] flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`flex flex-row justify-center items-center py-[14px] px-6 gap-2 whitespace-nowrap h-11 bg-white border border-[#e0e0e0] rounded-[24px] cursor-pointer font-lato font-bold text-sm leading-4 tracking-wider text-[#1b365e] transition-all duration-300 ease-in-out hover:bg-[#f9f9f9] hover:border-[#1b365e] ${
            activeId === tab.id ? 'bg-[#1b365e] text-white border-[#1b365e] hover:bg-[#163054]' : ''
          }`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}