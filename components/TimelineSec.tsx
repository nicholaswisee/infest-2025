import FAQSection from "./FAQSection";
import Timeline from "./Timeline";

const TimelineSec = () => {
  return (
    <section>
      <div className="relative h-fit w-full isolate overflow-hidden">
        <div className="absolute inset-0 z-[-10] h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(59,0,125,0)_40%,#050505_100%)]"></div>
        <div className="absolute inset-0 z-[-30] h-full w-full bg-gradient-to-b from-[#5002BD] to-[#5E0584]"></div>
        <div className="p-10 md:p-16 lg:p-20 lg:px-32">
          <h1 className="text-right bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text font-bold text-3xl md:text-5xl lg:text-6xl mt-20">
            Timeline
          </h1>
          <Timeline />
          <FAQSection />
        </div>
      </div>
    </section>
  );
};

export default TimelineSec;
