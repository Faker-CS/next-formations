'use client';

import React from "react";
import Drawer from "./Drawer";

export default function MobileNavbar({
  links,
  actions,
  subDrawers,
  open,
  toggleDrawer,
  closeDrawer,
  openSubDrawer,
  closeSubDrawer,
  activeSubDrawer,
}) {
  return (
    <>
      <button
        className="navbar__hamburger inline-flex items-center justify-center w-[40px] h-[40px] bg-transparent border-none cursor-pointer p-0 outline-none md:hidden"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={toggleDrawer}
      >
        <div className={`hamburger w-[24px] h-[2px] bg-[#ffffff] relative transition-all duration-200 ease-in-out ${open ? 'is-open bg-transparent' : ''} before:content-[''] before:absolute before:left-0 before:w-[24px] before:h-[2px] before:bg-[#ffffff] before:transition-all before:duration-200 before:ease-in-out before:top-[-7px] after:content-[''] after:absolute after:left-0 after:w-[24px] after:h-[2px] after:bg-[#ffffff] after:transition-all after:duration-200 after:ease-in-out after:bottom-[-7px] ${open ? 'before:rotate-45 before:top-0 before:bg-[#1b365e] after:rotate-[-45deg] after:bottom-0 after:bg-[#1b365e]' : ''}`}>
        </div>
      </button>

      <Drawer
        open={open}
        links={links}
        actions={actions}
        subDrawers={subDrawers}
        activeSubDrawer={activeSubDrawer}
        onClose={closeDrawer}
        onOpenSubDrawer={openSubDrawer}
        onCloseSubDrawer={closeSubDrawer}
      />
    </>
  );
}