'use client';

import { FAQItemData, FAQuestionProps } from "@/types/index" 
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqData: FAQItemData[] = [
  {
    value: "faq-1",
    question: "Bang Farrel kapan punya pacar?",
    answer: "Kompetisi ini terbuka untuk semua individu berusia 18 tahun ke atas. Tidak ada batasan latar belakang pendidikan atau profesi. Silakan lihat bagian 'Syarat dan Ketentuan' untuk detail lebih lanjut."
  },
  {
    value: "faq-2",
    question: "Bang Farrel punya pacar gak?",
    answer: "Bang Farrel sigma"
  },
  {
    value: "faq-3",
    question: "Wise Rizz banget ya?",
    answer: `Farrel "Frallex" Athalla Putra and Nicholas "Kolak" Wise Saragih   `
  },
  {
    value: "faq-4",
    question: "Apakah ada biaya pendaftaran?",
    answer: "Tidak, pendaftaran untuk kompetisi ini sepenuhnya gratis. Kami ingin memastikan semua orang memiliki kesempatan yang sama untuk berpartisipasi."
  },
  {
    value: "faq-5",
    question: "Mana redupnya, kapan redupnya",
    answer: "Eskeetit skrt skrrrttt Surabaya L City bruh Stanley Hao more like Stanley Who yo whaaaatttt Surabaya L City Lorem ipsum dolor sit amet Big Mo you are so goatet"
  },
];

const FAQuestion: React.FC<FAQuestionProps> = ({ question, answer, isOpen, onClick, index }) => {
  const triggerId = `faq-trigger-${index}`;
  const contentId = `faq-content-${index}`;

  return (
    <div className="mb-4 rounded-3xl overflow-hidden shadow-lg">
      <button
        className="flex items-center justify-between w-full p-4 text-white font-semibold text-lg [background-image:linear-gradient(180deg,#936FBF_0%,#603394_100%)] transition-colors duration-200 focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen} 
        aria-controls={contentId}
        id={triggerId}
      >
        {question}
        <ChevronDown
          className={`h-6 w-6 text-white transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        id={contentId} // Accessibility attribute: unique ID for the content
        role="region" // Accessibility attribute: defines a perceivable section of content
        aria-labelledby={triggerId} // Accessibility attribute: links back to the trigger
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100 p-4' : 'max-h-0 opacity-0'}
          text-white [background-image:linear-gradient(180deg,#936FBF_0%,#603394_100%)]
        `}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 min-h-fit flex flex-col justify-center items-center">
      <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl mt-20 text-center mb-12">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text">
          Questions
        </span>
      </h1>
      <div className="max-w-3xl mx-auto w-full">
        {faqData.map((item, index) => (
          <FAQuestion
            key={item.value}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
            index={index} 
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;