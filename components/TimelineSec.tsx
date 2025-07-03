import FAQSection from "./FAQSection";
import Timeline from "./Timeline";
import { FAQItemData } from "@/types";
import Image from "next/image";
import Dot from "@/public/dotted.svg";
import Dot2 from "@/public/dotted2.svg";

const faqData: FAQItemData[] = [
  {
    value: "faq-1",
    question: "Bang Farrel kapan punya pacar?",
    answer:
      "Kompetisi ini terbuka untuk semua individu berusia 18 tahun ke atas. Tidak ada batasan latar belakang pendidikan atau profesi. Silakan lihat bagian 'Syarat dan Ketentuan' untuk detail lebih lanjut.",
  },
  {
    value: "faq-2",
    question: "Bang Farrel punya pacar gak?",
    answer: "Bang Farrel sigma",
  },
  {
    value: "faq-3",
    question: "Wise Rizz banget ya?",
    answer: `Farrel "Frallex" Athalla Putra and Nicholas "Kolak" Wise Saragih   `,
  },
  {
    value: "faq-4",
    question: "Apakah ada biaya pendaftaran?",
    answer:
      "Tidak, pendaftaran untuk kompetisi ini sepenuhnya gratis. Kami ingin memastikan semua orang memiliki kesempatan yang sama untuk berpartisipasi.",
  },
  {
    value: "faq-5",
    question: "Mana redupnya, kapan redupnya",
    answer:
      "Eskeetit skrt skrrrttt Surabaya L City bruh Stanley Hao more like Stanley Who yo whaaaatttt Surabaya L City Lorem ipsum dolor sit amet Big Mo you are so goatet",
  },
];

const TimelineSec = () => {
  return (
    <section>
      <div className="relative h-fit w-full isolate overflow-hidden">
        <div className="absolute inset-0 z-[-10] h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(59,0,125,0)_40%,#050505_100%)]"></div>
        <div className="absolute inset-0 z-[-30] h-full w-full bg-gradient-to-b from-[#5002BD] to-[#5E0584]"></div>
        <Image
          src={Dot}
          alt="Icon"
          className="absolute top-[10%] left-0 w-[300px] h-[300px] md:w-[450px] md:h-[450px] -translate-x-[20%] z-0"
        />
        <Image
          src={Dot}
          alt="Icon"
          className="absolute bottom-[-10%] left-0 w-[700px] h-[700px] md:w-[550px] md:h-[550px] -translate-x-[10%] z-0"
        />
        <Image
          src={Dot2}
          alt="Icon"
          className="absolute top-[30%] right-0 w-[300px] h-[300px] md:w-[450px] md:h-[450px] translate-x-[40%] z-0"
        />
        <div className="p-10 md:p-16 lg:p-20 lg:px-32">
          <h1
            className="text-right bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text font-bold text-3xl md:text-5xl lg:text-6xl mt-20"
            data-aos="fade-up-left"
          >
            Timeline
          </h1>
          <Timeline />
          <FAQSection faqData={faqData} />
        </div>
      </div>
    </section>
  );
};

export default TimelineSec;
