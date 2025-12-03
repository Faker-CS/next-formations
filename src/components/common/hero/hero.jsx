"use client";

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
    <section className="hero relative w-full min-h-[560px] overflow-hidden text-white font-lato max-w-[full] mx-auto">
      <div className="hero__background relative flex flex-col w-full min-h-[610px] p-[32px_64px_140px] bg-[#1b365e] md:p-[32px_64px_140px]">
        <Image
          className="hero__bg-img absolute top-0 left-0 w-full h-full z-0 object-cover"
          src="/assets/images/Hero-bg-1024.png"
          alt="Hero background"
          fill
          sizes="100vw"
        />
        {/* <div className="absolute inset-0 z-10 pointer-events-none bg-[rgba(27,54,94,0.3)]" /> */}

        {/* Navbar */}
        <Navbar />

        <div className="hero__content relative z-20 mt-[72px] flex flex-col gap-4 md:gap-6 lg:gap-8">
          <H1 className="max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
            Réussir, c&apos;est notre métier. Le vôtre ?
          </H1>
          <H6 className="hero__subtitle max-w-[358px] md:max-w-[600px] lg:max-w-[700px]">
            Formez-vous, osez, réussissez ! Nous avons ce qu&apos;il vous faut
            pour dévoiler votre vrai potentiel.
          </H6>
          <P className="hero__description max-w-[358px] md:max-w-[600px] lg:max-w-[700px]">
            Développez vos projets grâce à nos solutions de formation et
            d&apos;accompagnement sur mesure. Nos formations dédiées 100% aux
            entrepreneurs vous accompagnent à chaque étape. OPCO, OPCA, CPF...
            Optimisez le financement de votre formation.
          </P>

          <div className="hero__buttons absolute bottom-[160px] left-[10px] flex items-start gap-[20px] md:bottom-[-100px] md:left-[1px]">
            <Button
              variant="secondary"
              className="flex flex-row justify-center items-center px-[18px] py-[16px] gap-[10px] w-[200px] h-[60px] duration-200 md:w-[230px] md:h-[64px]"
              onClick={() => setShowModal(true)}
              style={{ zIndex: 3 }}
            >
              Se laisser guider
            </Button>
            <Button
              variant="primary"
              className="flex flex-row justify-center items-center px-[22px] py-[18px] gap-[10px] w-[220px] h-[60px] md:w-[260px] md:h-[64px]"
            >
              Choisir votre formation
            </Button>
          </div>

          <div className="hero__evaluation absolute right-[10px] bottom-[90px] z-30 w-[380px] h-auto md:right-[-75px] md:bottom-[-90px]">
            <Image
              src="/assets/badges/evalutation.png"
              alt="Évaluation moyenne de nos formations"
              width={307}
              height={74}
              className="max-w-full h-auto"
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
