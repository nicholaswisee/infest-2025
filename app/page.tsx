import Hero from "@/components/Hero";
import MainInfo from "@/components/MainInfo";
import TimelineSec from "@/components/TimelineSec";
const page = () => {
  return (
    <main className="h-full w-full flex flex-col justify-center">
      <Hero />
      <MainInfo />
      <TimelineSec />
    </main>
  );
};

export default page;
