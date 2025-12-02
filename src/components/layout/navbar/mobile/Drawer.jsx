'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import SubDrawer from "./SubDrawer";

export default function Drawer({
  open,
  links,
  actions,
  subDrawers,
  activeSubDrawer,
  onClose,
  onOpenSubDrawer,
  onCloseSubDrawer,
}) {
  return (
    <div
      className={`navbar__drawer fixed top-full left-0 right-0 h-screen bg-[#ffffff] z-[50] transform translate-y-0 transition-all duration-300 ease-in-out opacity-0 ${open ? 'navbar__drawer--open top-0 opacity-1' : ''} flex flex-col`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      <div className="navbar__drawer-header flex flex-col items-center gap-[10px] p-[32px_24px_18px] border-b border-[#eef6fb]">
        <Image className="navbar__drawer-logo w-[300px] h-[20px] object-fit-contain" src="/assets/images/Logo-SF-H_blue.svg" alt="Spot Formations" width={300} height={20} />
        <div className="navbar__drawer-meta relative w-full flex items-center justify-center">
          <h2 className="navbar__drawer-title m-0 text-[#1b365e] font-bold text-[18px]">Menu</h2>
          <button className="navbar__drawer-close absolute right-0 bg-transparent border-none text-[22px] text-[#1b365e] cursor-pointer" onClick={onClose}>
            ×
          </button>
        </div>
      </div>

      <div className="navbar__drawer-content flex-1 p-[20px] overflow-y-auto flex flex-col">
        <ul className="navbar__drawer-list list-none m-0 p-0 flex flex-col gap-[12px]">
          {links.map(({ href, label, variant, subDrawerId }) => {
            const isSubDrawer = Boolean(subDrawerId);
            const Component = isSubDrawer ? "button" : Link;
            const componentProps = isSubDrawer
              ? {
                  type: "button",
                  onClick: () => onOpenSubDrawer(subDrawerId),
                }
              : { href };

            return (
              <li key={label}>
                <Component
                  {...componentProps}
                  className={`drawer-link flex items-center justify-between p-[14px_20px] rounded-[68px] border border-[#e6edf7] bg-[#ffffff] text-[#1b365e] font-bold text-[15px] box-shadow-[0_12px_24px_rgba(17,57,98,0.08)] transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_14px_28px_rgba(17,57,98,0.12)] no-underline ${isSubDrawer ? 'drawer-link--action cursor-pointer text-align-left w-full' : ''} ${variant === 'secondary' ? 'drawer-link--soft bg-[#efefef] border-[#d3d4da]' : ''}`}
                >
                  <span>{label}</span>
                  <span className="drawer-link__arrow flex items-center justify-center w-4 h-4" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 8 14" fill="none">
                      <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Component>
              </li>
            );
          })}
        </ul>

        <div className="navbar__drawer-sections flex flex-col gap-[16px] mt-[10px]">
          {actions.map(({ key, label, variant }) => (
            <button key={key} type="button" className={`drawer-section flex items-center justify-between gap-[12px] p-[14px_18px] rounded-[58px] border border-[#f2f2f2] bg-[#ffffff] font-bold text-[15px] text-[#1b365e] box-shadow-[0_12px_22px_rgba(15,38,107,0.06)] cursor-pointer text-align-left transition-all duration-200 hover:translate-y-[-1px] hover:shadow-[0_16px_28px_rgba(15,38,107,0.12)] ${variant === 'account' ? 'drawer-section--account border-[#ffab5b] text-[#fc7f16]' : ''} ${variant === 'bookmark' ? 'drawer-section--bookmark border-[#ffab5b] text-[#fc7f16]' : ''}`} onClick={() => {/* handle action */}}>
              <div className="drawer-section__icon w-[25px] h-[25px] rounded-[16px] flex items-center justify-center mr-[14px]">
                {variant === "account" ? (
                  <Image src="/assets/icons/icon-monCompte.svg" alt="icon-monCompte" width={25} height={25} />
                ) : (
                  <Image src="/assets/icons/icon-bookmark.svg" alt="Bookmark" width={25} height={25} />
                )}
              </div>
              <span className="drawer-section__label flex-1">{label}</span>
              <span className="drawer-section__arrow ml-[12px]" aria-hidden="true">
                ›
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="navbar__drawer-footer p-[24px_22px_28px] bg-[#1b365e] text-[#ffffff] flex flex-col gap-[16px]">
        <div className="drawer-footer-row flex items-center justify-between gap-[12px] flex-wrap">
          <span className="drawer-footer-text text-[13px] text-[#d9d9d9] tracking-[0.02em]">Vous avez une question ? (de 8h à 18h) :</span>
          <span className="drawer-phone inline-flex items-center gap-[6px] font-bold text-[14px]">
            <Image src="/assets/icons/icon-phone.svg" alt="" width={20} height={20} />
            + 33 6 00 00 00 00
          </span>
        </div>

        <div className="drawer-footer-divider w-full h-[1px] bg-[rgba(255,255,255,0.35)]"></div>

        <button type="button" className="drawer-lang bg-transparent border-none text-[#c7f8ff] flex items-center gap-[12px] font-semibold text-[14px] cursor-pointer">
          <span className="drawer-lang__icon w-[26px] h-[26px] inline-flex items-center justify-center rounded-full">
            🌐
          </span>
          <span>Français (FR)</span>
        </button>
      </div>

      <SubDrawer
        config={subDrawers[activeSubDrawer]}
        isOpen={Boolean(activeSubDrawer)}
        onBack={onCloseSubDrawer}
        onClose={onClose}
      />
    </div>
  );
}