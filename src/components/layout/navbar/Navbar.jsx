'use client';

import Image from "next/image";
import { useState, useLayoutEffect } from "react";
import { NAVBAR_LINKS, NAVBAR_ACTIONS, SUB_DRAWERS } from "./data";
import DesktopNavbar from "./desktop/DesktopNavbar";
import MobileNavbar from "./mobile/MobileNavbar";
import { useNavbar } from "./hooks";

export default function Navbar() {
  // const [mounted, setMounted] = useState(false);
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  const navbarState = useNavbar();
  const { isMobile } = navbarState;


  return (
    <nav className="navbar absolute w-full h-[58px] left-0 top-[25px] flex flex-row justify-between items-center px-7 gap-[195px] isolate z-[100001] xl:w-full xl:left-[2%] xl:gap-[100px] lg:gap-[40px] md:flex-row md:items-center md:justify-between md:h-auto md:p-[12px_20px] md:gap-0 md:left-0 md:right-0 md:top-[16px] md:bg-transparent md:z-[80] sm:top-[-1px]">
      <Image 
        src="/assets/images/logo-SF-H.png"
        alt="Spot Formations" 
        width={258} 
        height={38}
      />
      {isMobile ? (
        <MobileNavbar
          links={NAVBAR_LINKS}
          actions={NAVBAR_ACTIONS}
          subDrawers={SUB_DRAWERS}
          {...navbarState}
        />
      ) : (
        <DesktopNavbar links={NAVBAR_LINKS} />
      )}
    </nav>
  );
}