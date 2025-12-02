'use client';

import Image from "next/image";
import React from "react";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  // Prevent body scroll when modal is open
  // React.useEffect(() => {
  //   if (open) {
  //     document.body.style.overflow = 'hidden';
  //   }
  //   return () => {
  //     document.body.style.overflow = 'unset';
  //   };
  // }, [open]);

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-[rgba(27,54,94,0.08)] backdrop-blur-md flex items-center justify-center z-[100002]"
      role="dialog"
      aria-modal="true"
      onClick={handleOverlayClick}
    >
      <div className="bg-[#f7f9ff] border-2 border-[#c7f8ff] rounded-xl shadow-[0_8px_32px_rgba(27,54,94,0.12)] p-[20px_12px_16px_12px] w-[98vw] h-auto max-w-[98vw] max-h-[96vh] relative flex flex-col items-center md:p-[32px_24px_24px_24px] md:w-[680px] md:h-[622px] md:max-w-[98vw] md:max-h-[98vh] lg:p-[32px_24px_24px_24px]">
        <button
          className="absolute top-[10px] right-[10px] bg-transparent border-none cursor-pointer p-[4px] flex items-center justify-center rounded-md transition-all duration-200 ease-in-out z-10 w-[32px] h-[32px] hover:scale-110 active:scale-95 focus:outline-2 focus:outline-[#40BFDE] focus:outline-offset-2 md:top-[16px] md:right-[16px] md:w-[40px] md:h-[40px] md:p-[8px]"
          aria-label="Fermer"
          onClick={onClose}
          type="button"
        >
          <Image
            src="/assets/icons/icon_close.svg"
            width={16}
            height={16}
            alt=""
            draggable="false"
            className="w-[20px] h-[20px] object-contain block pointer-events-none md:w-[24px] md:h-[24px]"
          />
        </button>
        <div className="w-full mt-[8px] overflow-y-auto flex-1 md:mt-[16px]">
          {children}
        </div>
      </div>
    </div>
  );
}