'use client';

import { useState } from "react";
import Button from "../button";

export default function Form({ title = "Démarrez votre nouvelle trajectoire :" }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+33",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Sanitize phone input to digits only; allow countryCode to keep +
    const newValue = name === 'phone'
      ? value.replace(/\D/g, '')
      : value;

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.countryCode.trim() !== "" &&
      // require at least 6 digits for phone (adjustable)
      formData.phone.trim().length >= 6
    );
  };

  return (
    <div className="w-full max-w-[480px] h-auto m-0 box-border mx-auto md:h-[420px]">
      <h3 className="font-lato font-semibold text-[16px] leading-[24px] tracking-[0.02em] text-[#1B365E] mb-[20px] text-left md:text-[18px] md:leading-[26px] md:mb-[24px]">
        {title}
      </h3>
      
      <form className="flex flex-col gap-[14px] w-full min-w-0 md:gap-[28px] md:w-[412px]" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Prénom"
          className="w-full p-[12px_14px] font-lato font-normal text-[13px] leading-[20px] tracking-[0.02em] text-[#1B365E] bg-white border border-[#E0E0E0] rounded-[8px] outline-none transition-border-color duration-300 ease-in-out placeholder:text-[#9E9E9E] focus:border-[#40BFDE] md:p-[14px_16px] md:text-[14px]"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        
        <input
          type="text"
          name="lastName"
          placeholder="Nom"
          className="w-full p-[12px_14px] font-lato font-normal text-[13px] leading-[20px] tracking-[0.02em] text-[#1B365E] bg-white border border-[#E0E0E0] rounded-[8px] outline-none transition-border-color duration-300 ease-in-out placeholder:text-[#9E9E9E] focus:border-[#40BFDE] md:p-[14px_16px] md:text-[14px]"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-[12px_14px] font-lato font-normal text-[13px] leading-[20px] tracking-[0.02em] text-[#1B365E] bg-white border border-[#E0E0E0] rounded-[8px] outline-none transition-border-color duration-300 ease-in-out placeholder:text-[#9E9E9E] focus:border-[#40BFDE] md:p-[14px_16px] md:text-[14px]"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <div className="flex gap-[10px] md:gap-[12px]">
          <input
            type="text"
            name="countryCode"
            placeholder="+33"
            className="flex-[0_0_70px] p-[12px_14px] font-lato font-normal text-[13px] leading-[20px] tracking-[0.02em] text-[#1B365E] bg-white border border-[#E0E0E0] rounded-[8px] outline-none transition-border-color duration-300 ease-in-out placeholder:text-[#9E9E9E] focus:border-[#40BFDE] md:flex-[0_0_80px] md:p-[14px_16px] md:text-[14px]"
            value={formData.countryCode}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            inputMode="tel"
            pattern="\d{6,15}"
            maxLength={15}
            name="phone"
            placeholder="Portable"
            className="flex-1 p-[12px_14px] font-lato font-normal text-[13px] leading-[20px] tracking-[0.02em] text-[#1B365E] bg-white border border-[#E0E0E0] rounded-[8px] outline-none transition-border-color duration-300 ease-in-out placeholder:text-[#9E9E9E] focus:border-[#40BFDE] md:p-[14px_16px] md:text-[14px]"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        
        <p className="font-lato font-normal text-[11px] leading-[16px] tracking-[0.02em] text-[#1B365E] text-left md:text-[12px] md:leading-[18px]">
          *Tous les champs sont obligatoires
        </p>
        
        <Button 
          type="submit" 
          variant="secondary"
          className={`hero__btn-secondary w-full p-[12px_20px] mt-[8px] ${!isFormValid() ? 'opacity-50 cursor-not-allowed border-2 border-[#efefef] bg-[#CCCCCC] border-[#CCCCCC] text-[#757575]' : ''} md:p-[14px_24px]`}
          disabled={!isFormValid()}
        >
          Créer mon dossier de candidature
        </Button>
      </form>
    </div>
  );
}