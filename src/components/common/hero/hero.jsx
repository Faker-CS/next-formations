'use client';

import { useState } from "react";
import Image from "next/image";
import Navbar from "../../layout/navbar";
import { H1, P } from "../typography";
import { H6 } from "../typography";
import Button from "../button";
import Modal from "../modal";
import ModalForm from "../modal/modal-form";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative w-full min-h-[560px] overflow-hidden text-white font-lato md:min-h-[640px]">
      <div className="relative flex flex-col w-full min-h-[640px] p-[32px_64px_140px] bg-[#1b365e] md:p-[32px_64px_140px]">
        <Image 
          className="absolute top-0 left-0 w-full h-full z-0 object-cover" 
          src="/assets/images/Hero-bg-1024.png" 
          alt="Hero background" 
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 z-10 pointer-events-none bg-[rgba(27,54,94,0.3)]" />

        {/* Navbar */}
        <Navbar />

        <div className="relative z-20 mt-[72px] flex flex-col gap-4 md:gap-6 lg:gap-8">
          <H1 >
            Réussir, c&apos;est notre métier. Le vôtre ?
          </H1>
          <H6 className="w-[358px] h-[90px] text-[20px] leading-[30px] tracking-[0.02em] text-start pl-[5px] font-medium relative top-[125px] md:w-auto md:h-auto md:text-[18px] md:leading-[26px] md:pl-0 md:top-0 md:font-normal">
            Formez-vous, osez, réussissez ! Nous avons ce qu&apos;il vous faut pour
            dévoiler votre vrai potentiel.
          </H6>
          <P className="text-[14px] leading-[20px] tracking-[0.02em] w-[358px] h-[119px] text-start pl-[4px] pt-[10px] relative top-[128px] text-[#f5f7fb] md:text-[16px] md:leading-[26px] md:w-auto md:h-auto md:pl-0 md:pt-0 md:top-0">
            Développez vos projets grâce à nos solutions de formation et
            d&apos;accompagnement sur mesure. Nos formations dédiées 100% aux
            entrepreneurs vous accompagnent à chaque étape. OPCO, OPCA, CPF...
            Optimisez le financement de votre formation.
          </P>

          <div className="absolute bottom-[110px] left-[20px] flex items-start w-[90%] gap-[14px] md:bottom-[80px] md:left-[40px] md:gap-[20px] md:w-auto">
            <Button variant="primary" className="flex flex-row justify-center items-center px-[16px] py-[16px] gap-[10px] w-[168px] h-[52px]  md:w-[198px] md:h-[52px] md:text-[14px] md:leading-[18px]">
              Choisir votre formation
            </Button>
            <Button variant="secondary" className="flex flex-row justify-center items-center px-[16px] py-[16px] gap-[10px] w-[168px] h-[52px]  duration-200 md:w-[198px] md:h-[52px] md:text-[14px] md:leading-[18px]" onClick={() => setShowModal(true)} style={{ zIndex: 3 }}>
              Se laisser guider
            </Button>
          </div>

          <div className="mt-[10px] bottom-[30px] left-1/2 -translate-x-1/2 w-[90%] h-[63.89px] mb-[1px] md:w-auto md:h-auto md:bottom-auto md:left-auto md:translate-x-0">
            <Image
              src="/assets/badges/evalutation.png"
              alt="Évaluation moyenne de nos formations"
              width={300}
              height={64}
              className="max-w-full"
            />
          </div>
        </div>

        {/* Modal */}
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          <ModalForm />
        </Modal>
      </div>
    </section>
  );
}