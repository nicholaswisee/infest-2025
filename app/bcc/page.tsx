import { ArrowRight } from "lucide-react";
import TimelineVer from "@/components/TimelineVer";
import Countdown from "@/components/Countdown";
import { FAQItemData } from "@/types";
import FAQSection from "@/components/FAQSection";
import Ornamen from "@/public/ornament1.svg";
import Image from "next/image";
import LongOrnamen from "@/public/ornament4.svg";
import CountdownSection from "@/components/LaunchCountdown";

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
const page = () => {
  return (
    <main className="relative h-full min-h-screen w-full isolate overflow-hidden">
      <div className="absolute inset-0 z-[-30] h-full w-full bg-gradient-to-b from-[#3E047F] to-[#AD198C]"></div>
      <div className="absolute inset-0 z-[-10] h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(59,0,125,0)_40%,#050505_100%)]"></div>
      <Image
        src={Ornamen}
        alt="Icon"
        className="opacity-60 absolute -z-10 w-1/2 lg:w-1/3 max-w-md h-auto top-[30%] right-0 -translate-y-1/2 translate-x-[30%]  scale-x-[-1]"
        data-aos="fade-right"
      />
      <Image
        src={Ornamen}
        alt="Icon"
        className="opacity-60 absolute -z-10 w-1/2 lg:w-1/3 max-w-md h-auto top-[10%] left-0 -translate-y-1/2 -translate-x-[30%]"
        data-aos="fade-right"
      />
      <Image
        src={LongOrnamen}
        alt="Icon"
        className="opacity-40 absolute -z-10 h-auto top-3/5 left-1/2 -translate-y-1/2 -translate-x-1/2 w-screen max-w-none"
        // data-aos="fade-left"
      />
      <div className="p-10 md:p-16 lg:p-20 lg:px-32 flex flex-col items-center">
        <h1
          className="text-center  pb-4 bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text font-bold text-3xl md:text-5xl lg:text-6xl mt-20"
          data-aos="zoom-in-up"
        >
          Business Case Competition
        </h1>
        <p
          className="text-xs md:text-sm lg:text-base text-white text-center text-shadow-lg/20"
          data-aos="zoom-in-up"
        >
          Business Case Competition merupakan kompetisi yang menguji kemampuan <span className="font-[800] text-[#FFEED2]">
             problem solving dan analytical thinking dalam konteks bisnis.
          </span>{" "}
          Business Case Competition akan terbagi menjadi 3 babak, yakni babak
          kualifikasi (qualification round), babak penyisihan (preliminary
          stage) dan babak final (final round).
        </p>

        <a
          className="mt-10 md:mt-16 mx-auto w-fit text-sm md:text-base bg-gradient-to-r from-zinc-300 to-violet-300 rounded-full shadow-[0px_4px_22.100000381469727px_0px_rgba(255,255,255,0.50)] text-[#2F016D] font-[600] px-6 py-2 sm:py-3 flex items-center gap-3"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom" href="/daftar" 
        >
          Daftar Sekarang
          <ArrowRight className="text-[#2F016D] w-4 md:w-5" />
        </a>

        <p
          className="text-center pb-4 bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text font-bold text-3xl md:text-4xl lg:text-5xl mt-20 md:mt-28"
          data-aos="zoom-out"
        >
          Deskripsi
        </p>
        <p
          className="w-full mx-auto lg:w-[80%] xl:w-[60%] text-xs md:text-sm lg:text-base flex items-center text-white/90 leading-relaxed text-shadow-lg/20 p-6 relative bg-gradient-to-bl from-[#C18EFC] to-[#782DCD] rounded-2xl border border-white/20"
          data-aos="zoom-out"
        >
          Para peserta akan diberikan kasus beserta data-data yang menunjang,
          kemudian peserta harus memberikan solusi berupa strategi ataupun aksi
          untuk mengatasi permasalahan tersebut. Setelah kasus diberikan, para
          peserta diberikan waktu untuk melakukan analisis masalah dan
          memberikan solusi. Rangkuman hasil analisis peserta disajikan dalam
          bentuk slide deck dan executive summary, yang akan dinilai oleh para
          juri. Selanjutnya, 5 tim dengan poin tertinggi akan lanjut ke babak
          final akan memberikan presentasi secara offline kepada para juri.
        </p>

        <div className="text-white mt-24" data-aos="zoom-out">
          <p className="text-center pb-4 bg-gradient-to-b from-white via-[#FFEED2] to-white text-transparent bg-clip-text font-bold text-3xl md:text-4xl lg:text-5xl">
            {" "}
            Prize Pool{" "}
          </p>
          <div className="mt-3 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center">
            <p className="md:text-lg lg:text-xl font-bold px-5 md:px-9 py-2 md:py-3 bg-gradient-to-b from-amber-400/70 to-yellow-400/70 rounded-full shadow-[inset_0px_10px_18.799999237060547px_0px_rgba(166,143,194,1.00)]">
              {" "}
              Juara 1
            </p>
            <p className="sm:text-lg md:text-xl lg:text-2xl font-bold text-shadow-lg">
              {" "}
              Rp6.000.000,00 + e-certificate
            </p>
          </div>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center">
            <p className="md:text-lg lg:text-xl font-bold px-5 md:px-9 py-2 md:py-3 bg-gradient-to-b from-zinc-400/70 to-gray-200/70 rounded-full shadow-[inset_0px_10px_18.799999237060547px_0px_rgba(166,143,194,1.00)]">
              {" "}
              Juara 2
            </p>
            <p className="sm:text-lg md:text-xl lg:text-2xl font-bold text-shadow-lg">
              {" "}
              Rp4.000.000,00 + e-certificate
            </p>
          </div>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center">
            <p className="md:text-lg lg:text-xl font-bold px-5 md:px-9 py-2 md:py-3 bg-gradient-to-b from-[#C0A67B]/70 to-[#FFEED2]/70 rounded-full shadow-[inset_0px_10px_18.799999237060547px_0px_rgba(166,143,194,1.00)]">
              {" "}
              Juara 3
            </p>
            <p className="sm:*:text-lg md:text-xl lg:text-2xl font-bold text-shadow-lg">
              {" "}
              Rp3.000.000,00 + e-certificate
            </p>
          </div>
        </div>
        <p
          className="mb-10 text-center pb-4 bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text font-bold text-3xl md:text-4xl lg:text-5xl mt-24"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          Timeline
        </p>

        <TimelineVer />

        <p
          className="mb-5 md:mb-10 text-center pb-4 bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text font-bold text-3xl md:text-4xl lg:text-5xl mt-28"
          data-aos="zoom-in-up"
        >
          Countdown
        </p>
        <div data-aos="fade-up">
          <CountdownSection />
        </div>
        <FAQSection faqData={faqData} />
      </div>
    </main>
  );
};

export default page;
