import EventCarousel from "@/components/Carousel";
import { eventCards } from "@/data/event";
import Image from "next/image";
import Bubble from "@/public/pink-bubble.svg";
import Ornamen from "@/public/ornament5.svg";

const page = () => {
  return (
    <div className="relative min-h-screen h-full w-full isolate overflow-hidden">
      <div className="absolute inset-0 z-[-30] h-full w-full bg-gradient-to-b from-[#360677] to-[#4E02B7]"></div>
      <div className="absolute inset-0 z-[-10] h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(59,0,125,0)_40%,#050505_100%)]"></div>
      <Image
        src={Bubble}
        alt="Icon"
        className="opacity-60 absolute -z-10 w-1/2 lg:w-1/3 max-w-md h-auto top-[30%] right-0 -translate-y-1/2 translate-x-[30%]"
        // data-aos="fade-left"
        data-aos="fade-down-left"
      />
      <Image
        src={Bubble}
        alt="Icon"
        className="opacity-60 absolute -z-10 w-1/2 lg:w-1/3 max-w-md h-auto top-[10%] left-0 -translate-y-1/2 -translate-x-[60%]"
        // data-aos="fade-left"
        data-aos="fade-down-right"
      />
      <Image
        src={Ornamen}
        alt="Icon"
        className="opacity-80 md:opacity-50 absolute -z-10 h-auto top-[68%] md:top-3/5 left-1/2 -translate-y-1/2 -translate-x-1/2 w-screen max-w-none"
        // data-aos="fade-left"
      />
      <div className="p-10 md:p-16 lg:p-20 lg:px-32">
        <h1
          className="mt-20 text-center bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text font-bold text-4xl md:text-5xl lg:text-6xl"
          data-aos="fade-up"
        >
          Pre Event
        </h1>
        <div className="mt-5 md:mt-10 mx-auto flex flex-col md:flex-row md:items-center gap-4 md:w-[90%] lg:w-[70%]">
          <p
            className="w-full md:w-2/3 text-xs md:text-sm lg:text-base flex items-center text-white/90 leading-relaxed text-shadow-lg/20 p-6 relative bg-gradient-to-bl from-[#C18EFC] to-[#782DCD] rounded-2xl border border-white/20"
            data-aos="fade-right"
          >
            <span>
              {" "}
              Sebagai rangkaian pre-event dari INFEST 2025, workshop bertajuk 
              <span className="font-[800] text-[#FFEED2]"> "Mastering the Written Pitch Deck: From Concept to Clarity" </span>
              hadir untuk membawa para peserta melampaui pemahaman dasar dalam menyusun pitch deck. 
              Dalam sesi ini, peserta akan dibekali dengan teknik merancang pitch deck tertulis 
              yang tidak hanya terstruktur dan persuasif, tetapi juga selaras dengan standar 
              penilaian profesional dan juri kompetisi. Melalui pendekatan studi kasus dan 
              forum interaktif bersama para ahli, peserta akan berlatih menyusun narasi bisnis
               yang kuat sekaligus mendapatkan wawasan dan umpan balik mendalam yang akan mengasah 
               keterampilan mereka menuju kesiapan kompetisi yang optimal.
            </span>
          </p>
          <div
            className="w-full md:w-1/3 flex flex-row md:flex-col gap-4"
            data-aos="fade-left"
          >
            <div className="flex-1 md:flex-none w-full text-xs md:text-sm lg:text-base text-black leading-relaxed text-shadow-lg/10 text-center p-4 md:p-6 relative bg-gradient-to-bl from-[#E7E0EE] to-[#9A8FA5] rounded-2xl border border-white/20">
              <p className="font-extrabold sm:text-lg md:text-xl lg:text-2xl">
                Pre Event 1
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                10 Agustus 2025
              </p>
            </div>
            <div className="text-center flex-1 md:flex-none w-full text-xs md:text-sm lg:text-base text-black leading-relaxed text-shadow-lg/10 p-4 md:p-6 relative bg-gradient-to-bl from-[#E7E0EE] to-[#9A8FA5] rounded-2xl border border-white/20">
              <p className="font-extrabold sm:text-lg md:text-xl lg:text-2xl">
                Pre Event 1
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                10 Agustus 2025
              </p>
            </div>
          </div>
        </div>

        <h1
          className="mt-24 text-center bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text font-bold text-4xl md:text-5xl lg:text-6xl"
          data-aos="fade-down"
        >
          Main Event
        </h1>
        <p
          className="font-medium italic text-center text-white text-sm sm:text-base md:text-lg mt-2"
          data-aos="fade-down"
        >
          Coming Soon
        </p>

        {/* <div className="mt-5 md:mt-10 mx-auto flex flex-col md:flex-row md:items-center gap-4 md:w-[90%] lg:w-[70%]">
          <p
            className="w-full md:w-2/3 text-xs md:text-sm lg:text-base flex items-center text-white/90 leading-relaxed text-shadow-lg/20 p-6 relative bg-gradient-to-bl from-[#C18EFC] to-[#782DCD] rounded-2xl border border-white/20"
            data-aos="fade-left"
          >
            <span>
              {" "}
              INFEST 2025, dengan tema{" "}
              <span className="font-[800] text-[#FFEED2]">
                "Navigating the Future: Smart Investment in the Times of
                Changes,"{" "}
              </span>
              berfokus pada strategi investasi cerdas untuk menghadapi masa-masa
              penuh perubahan. Acara ini akan membekali peserta dengan pola
              pikir yang proaktif dan tangguh, serta membahas pemanfaatan
              teknologi seperti AI dalam mengambil keputusan investasi di tengah
              dinamika pasar dan krisis ekonomi.
            </span>
          </p>
          <div
            className="w-full md:w-1/3 flex flex-row md:flex-col gap-4"
            data-aos="fade-right"
          >
            <div className="flex-1 md:flex-none w-full text-xs md:text-sm lg:text-base leading-relaxed text-center p-4 md:p-6 relative bg-gradient-to-bl from-[#996ACD] to-[#491C7C] rounded-2xl border border-white/20">
              <p className="font-extrabold text-lg md:text-xl lg:text-2xl bg-gradient-to-br from-white via-[#FFEED2] to-[#FFEED2] text-transparent bg-clip-text">
                10 Agustus 2025
              </p>
              <p className="font-extrabold text-lg md:text-xl lg:text-2xl bg-gradient-to-br from-white via-[#FFEED2] to-[#FFEED2] text-transparent bg-clip-text">
                CC Timur ITB
              </p>
            </div>
          </div>
        </div> */}

        <h1
          className="pb-10 text-center text-white font-bold text-3xl md:text-5xl lg:text-6xl mt-32"
          data-aos="zoom-in"
        >
          Last Year's{" "}
          <span className="bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text">
            Highlights
          </span>
        </h1>
        <EventCarousel cards={eventCards} />
      </div>
    </div>
  );
};

export default page;
