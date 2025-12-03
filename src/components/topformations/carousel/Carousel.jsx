// src/components/topformations/carousel/Carousel.jsx
import React from 'react';

export default function Carousel({ children, className = '', ...rest }) {
  return (
    <div className={`w-full overflow-visible relative px-5 user-select-none touch-pan-y md:px-0 ${className}`} {...rest}>
      {children}
    </div>
  );
}