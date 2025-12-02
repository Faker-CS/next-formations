'use client';

import React from "react";

export function HH({ children, className = "", ...props }) {
  return (
    <h1 className={`font-red-hat-display tracking-[0.02em] m-0 italic font-normal text-[80px] leading-[84px] ${className}`} {...props}>
      {children}
    </h1>
  );
}

export function H1({ children, className = "", ...props }) {
  return (
    <h1 className={`font-red-hat-display tracking-[0.02em] m-0 font-normal text-[60px] leading-[79px] not-italic text-white max-[800px]:text-[30px] max-[800px]:leading-[37px] ${className}`} {...props}>
      {children}
    </h1>
  );
}

export function H2({ children, className = "", ...props }) {
  return (
    <h2 className={`font-red-hat-display tracking-[0.02em] m-0 font-light text-[60px] leading-[76px] max-[800px]:text-[22px] max-[800px]:leading-normal ${className}`} {...props}>
      {children}
    </h2>
  );
}

export function H3({ children, className = "", ...props }) {
  return (
    <h3 className={`font-red-hat-display tracking-[0.02em] m-0 font-semibold text-[58px] leading-normal max-[800px]:text-[28px] max-[800px]:leading-normal ${className}`} {...props}>
      {children}
    </h3>
  );
}

export function GT({ children, className = "", ...props }) {
  return (
    <h3 className={`font-red-hat-display tracking-[0.02em] m-0 font-semibold text-[58px] leading-normal ${className}`} {...props}>
      {children}
    </h3>
  );
}

export function H4({ children, className = "", ...props }) {
  return (
    <h4 className={`font-red-hat-display tracking-[0.02em] m-0 font-light text-[40px] leading-[100px] ${className}`} {...props}>
      {children}
    </h4>
  );
}

export function H5({ children, className = "", ...props }) {
  return (
    <h5 className={`font-red-hat-display tracking-[0.02em] m-0 font-light text-[30px] leading-normal ${className}`} {...props}>
      {children}
    </h5>
  );
}

export function H6({ children, className = "", ...props }) {
  return (
    <h6 className={`font-lato tracking-[0.02em] m-0 font-normal font-medium text-[20px] leading-[30px] text-white ${className}`} {...props}>
      {children}
    </h6>
  );
}

export function MH3({ children, className = "", ...props }) {
  return (
    <h3 className={`font-red-hat-display tracking-[0.02em] m-0 font-semibold text-[28px] leading-normal ${className}`} {...props}>
      {children}
    </h3>
  );
}

export function MH1({ children, className = "", ...props }) {
  return (
    <h1 className={`font-red-hat-display tracking-[0.02em] m-0 font-normal text-[30px] leading-[37px] ${className}`} {...props}>
      {children}
    </h1>
  );
}

export function MH7({ children, className = "", ...props }) {
  return (
    <h6 className={`font-red-hat-display tracking-[0.02em] m-0 font-normal text-[20px] leading-normal ${className}`} {...props}>
      {children}
    </h6>
  );
}

export function P({ children, className = "", ...props }) {
  return (
    <p className={`font-red-hat-display tracking-[0.02em] m-0 font-normal text-[16px] leading-[26px] text-white ${className}`} {...props}>
      {children}
    </p>
  );
}

export function P2({ children, className = "", ...props }) {
  return (
    <p className={`font-lato tracking-[0.02em] m-0 font-normal text-[15px] leading-[26px] ${className}`} {...props}>
      {children}
    </p>
  );
}

export function P3({ children, className = "", ...props }) {
  return (
    <p className={`font-lato tracking-[0.02em] m-0 font-bold text-[14px] leading-auto ${className}`} {...props}>
      {children}
    </p>
  );
}

export function BtnCTA({ children, className = "", ...props }) {
  return (
    <span className={`font-lato tracking-[0.02em] m-0 font-black text-[16px] leading-[24px] ${className}`} {...props}>
      {children}
    </span>
  );
}

export function BtnMenu({ children, className = "", ...props }) {
  return (
    <span className={`font-lato tracking-[0.02em] m-0 font-normal text-[12px] leading-[14px] ${className}`} {...props}>
      {children}
    </span>
  );
}

export function MBtnMenu({ children, className = "", ...props }) {
  return (
    <span className={`font-lato tracking-[0.02em] m-0 font-normal text-[8px] leading-normal ${className}`} {...props}>
      {children}
    </span>
  );
}

export function B8({ children, className = "", ...props }) {
  return (
    <span className={`font-red-hat-display tracking-[0.02em] m-0 font-normal text-[8px] leading-normal ${className}`} {...props}>
      {children}
    </span>
  );
}

const typography = {
  HH,
  H1,
  H2,
  H3,
  GT,
  H4,
  H5,
  H6,
  MH3,
  MH1,
  MH7,
  P,
  P2,
  P3,
  BtnCTA,
  BtnMenu,
  MBtnMenu,
  B8,
};

export default typography;