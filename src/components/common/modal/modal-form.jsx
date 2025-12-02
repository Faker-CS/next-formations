'use client';

import React, { useState } from "react";
import Button from "../button";

export default function ModalForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+33",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.countryCode.trim() !== "" &&
      formData.phone.trim() !== ""
    );
  };

  return (
    <div className="w-full max-w-[100%] p-[12px] min-h-auto flex flex-col items-center justify-center z-[100002] md:w-[550px] md:h-[510px] md:max-w-[550px] md:p-[18px] md:min-h-[480px] lg:w-[550px] lg:h-[510px] lg:max-w-[550px] lg:p-[18px] lg:min-h-[480px]">
      <h2 className="w-full font-['Red_Hat_Display','Lato',sans-serif] font-light text-[20px] leading-[28px] flex items-center text-center tracking-[0.03em] text-[#1B365E] mb-[14px] min-h-[56px] justify-center md:w-[600px] md:h-[80px] md:text-[30px] md:leading-[40px] md:mb-[24px] lg:w-[600px] lg:h-[80px] lg:text-[30px] lg:leading-[40px] lg:mb-[24px]">
        Vous ne savez pas encore quelle formation est la meilleure option pour vous ?
      </h2>
      <p className="font-['Lato'] font-medium text-[15px] leading-[22px] text-center tracking-[0.02em] text-[#1B365E] m-0 mb-[8px] w-full md:text-[20px] md:leading-[30px] md:mb-[16px] lg:text-[20px] lg:leading-[30px] lg:mb-[16px]">
        Nous sommes là pour bien vous orienter
      </p>
      <form className="flex flex-col gap-[16px] w-full max-w-full items-stretch justify-center m-auto md:gap-[18px] md:max-w-[412.25px] md:h-[412px] lg:gap-[18px] lg:max-w-[412.25px] lg:h-[412px]" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Prénom"
          className="w-full box-border p-[10px_12px] font-['Lato'] font-normal text-[14px] leading-[20px] tracking-[0.02em] text-[#1B365E] bg-white border border-[#E0E0E0] rounded-lg outline-none transition-border-color duration-300 ease-in-out placeholder:text-[#9E9E9E] focus:border-[#40BFDE] md:p-[14px_16px] md:text-[14px] lg:p-[14px_16px] lg:text-[14px]"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Nom"
          className="w-full box-border p-[10px_12px] font-['Lato'] font-normal text-[14px] leading-[20px] tracking-[0.02em] text-[#1B365E] bg-white border border-[#E0E0E0] rounded-lg outline-none transition-border-color duration-300 ease-in-out placeholder:text-[#9E9E9E] focus:border-[#40BFDE] md:p-[14px_16px] md:text-[14px] lg:p-[14px_16px] lg:text-[14px]"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full box-border p-[10px_12px] font-['Lato'] font-normal text-[14px] leading-[20px] tracking-[0.02em] text-[#1B365E] bg-white border border-[#E0E0E0] rounded-lg outline-none transition-border-color duration-300 ease-in-out placeholder:text-[#9E9E9E] focus:border-[#40BFDE] md:p-[14px_16px] md:text-[14px] lg:p-[14px_16px] lg:text-[14px]"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="w-full">
          <div className="flex gap-[8px] w-full md:gap-[12px] lg:gap-[12px]">
            <input
              type="text"
              name="countryCode"
              placeholder="+33"
              className="flex-[0_0_60px] min-w-[60px] p-[10px_12px] font-['Lato'] font-normal text-[14px] leading-[20px] tracking-[0.02em] text-[#1B365E] bg-white border border-[#E0E0E0] rounded-lg outline-none transition-border-color duration-300 ease-in-out placeholder:text-[#9E9E9E] focus:border-[#40BFDE] md:flex-[0_0_80px] md:min-w-[80px] md:p-[14px_16px] md:text-[14px] lg:flex-[0_0_80px] lg:min-w-[80px] lg:p-[14px_16px] lg:text-[14px]"
              value={formData.countryCode}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Portable"
              className="flex-1 w-[calc(100%-68px)] p-[10px_12px] font-['Lato'] font-normal text-[14px] leading-[20px] tracking-[0.02em] text-[#1B365E] bg-white border border-[#E0E0E0] rounded-lg outline-none transition-border-color duration-300 ease-in-out placeholder:text-[#9E9E9E] focus:border-[#40BFDE] md:w-[calc(100%-92px)] md:p-[14px_16px] md:text-[14px] lg:w-[calc(100%-92px)] lg:p-[14px_16px] lg:text-[14px]"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <p className="font-['Lato'] font-normal text-[11px] leading-[16px] tracking-[0.02em] text-[#1B365E] m-0 text-left w-full md:text-[12px] md:leading-[18px] lg:text-[12px] lg:leading-[18px]">
          *Tous les champs sont obligatoires
        </p>
        <Button
          type="submit"
          variant="secondary"
          className={`hero__btn-secondary w-full p-[12px_20px] mt-[8px] ${!isFormValid() ? 'opacity-50 cursor-not-allowed border-2 border-[#efefef] bg-[#CCCCCC] border-[#CCCCCC] text-[#757575]' : ''} md:p-[14px_24px] lg:p-[14px_24px]`}
          disabled={!isFormValid()}
        >
          Créer mon dossier de candidature
        </Button>
      </form>
    </div>
  );
}