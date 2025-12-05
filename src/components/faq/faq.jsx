import React, { useState } from "react";
import Button from "../common/button";
import IllustrationFAQ from "../../assets/icons/Illustration_FAQ.svg";
import Image from "next/image";

const faqData = [
  {
    id: 1,
    question: "Quels types de formation proposez-vous ?",
    answer:
      "Nous proposons une large gamme de formations dans différents domaines...",
  },
  {
    id: 2,
    question: "À qui s'adresse la formation digitale ?",
    answer: "Nos formations s'adressent à tous...",
  },
  {
    id: 3,
    question:
      "Comment choisir la formation digitale adaptée à mon projet professionnel ?",
    answer: "Nous vous accompagnons dans le choix de votre formation...",
  },
  {
    id: 4,
    question: "Quels avantages offre la formation digitale ?",
    answer: "La formation digitale offre flexibilité, accessibilité...",
  },
  {
    id: 5,
    question: "Comment sont dispensées les formations ?",
    answer: "Nos formations sont dispensées en ligne et en présentiel...",
  },
  {
    id: 6,
    question: "Est-ce que je recevrai un certificat à la fin de la formation ?",
    answer: "Oui, vous recevrez un certificat de réussite...",
  },
  {
    id: 7,
    question: "Comment la formation peut-elle être financée ?",
    answer: "Plusieurs options de financement sont disponibles...",
  },
  {
    id: 8,
    question: "Qui sont les formateurs ?",
    answer: "Nos formateurs sont des experts reconnus dans leur domaine...",
  },
  {
    id: 9,
    question: "Quels sont les débouchés après la formation ?",
    answer:
      "Les débouchés sont variés et dépendent de la spécialisation choisie : chef de projet digital, développeur web, community manager, spécialiste SEO et d'autres. La transformation digitale des entreprises crée un besoin constant de profils qualifiés, améliorant ainsi votre employabilité et vos opportunités de carrière.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full bg-white min-h-auto py-10 relative md:min-h-[1026px] md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:px-10">
        <h2 className="font-red-hat-display font-light text-[32px] leading-10 text-center tracking-[0.02em] text-principal-dark-blue m-0 mb-3 md:text-[45px] md:leading-[53px] md:mb-4">
          FAQ
        </h2>
        <p className="font-lato font-semibold text-sm leading-[22px] text-center tracking-[0.02em] text-text-black m-0 mb-8 md:text-lg md:leading-[26px] md:mb-12">
          Nous avons apporté les réponses aux questions les plus posées sur les
          formations :
        </p>

        <div className="static w-full h-auto m-0 order-2 mt-8 bg-white border border-[#F5B942] rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-[0_4px_12px_rgba(0,0,0,0.08)] md:absolute md:top-[210px] md:right-[73px] md:w-[240px] md:h-[265px] md:order-[0] md:mt-0">
          <Image
            width={24}
            height={24}
            src={IllustrationFAQ}
            alt="Questions FAQ"
            className="w-[70px] h-auto mb-3"
          />
          <p className="font-lato font-semibold text-sm leading-5 text-center tracking-[0.02em] text-principal-dark-blue m-0 mb-4">
            Des questions
            <br />
            sur les formations ?
          </p>
          <Button variant="ghost" className="w-full">
            Nous contacter
          </Button>
        </div>

        <div className="w-full h-auto mx-auto flex flex-col gap-[10px] order-1 md:w-[857px] md:max-w-[857px] md:h-[816px] md:gap-4 md:order-[0]">
          {faqData.map((item) => (
            <div
              key={item.id}
              className={`bg-gray-100 rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.includes(item.id) ? "border border-gray-300" : ""
              }`}
            >
              <button
                className="w-full flex justify-between items-center px-5 py-5 bg-transparent border-none cursor-pointer text-left transition-all duration-200 ease-in-out outline-none hover:bg-gray-200 focus:outline-none md:px-6"
                onClick={() => toggleItem(item.id)}
              >
                <span className="font-lato font-semibold text-sm leading-5 tracking-[0.02em] text-text-black flex-1 pr-4 md:text-base md:leading-6 md:pr-5">
                  {item.question}
                </span>
                <span className="w-8 h-8 flex items-center justify-center text-2xl font-black text-text-black flex-shrink-0 transition-transform duration-300 ease-in-out leading-none md:w-10 md:h-10 md:text-[38px]">
                  {openItems.includes(item.id) ? "−" : "+"}
                </span>
              </button>

              {openItems.includes(item.id) && (
                <div className="px-5 pb-5 animate-slideDown md:px-6 md:pb-6">
                  <p className="font-lato font-normal text-[13px] leading-5 tracking-[0.02em] text-text-black m-0 md:text-sm md:leading-[22px]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
