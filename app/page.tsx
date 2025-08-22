import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import { LoginSuccessHandler } from "@/components/LoginSuccessHandler";
import MainInfo from "@/components/MainInfo";
import TimelineSec from "@/components/TimelineSec";
import { Suspense } from "react";


const page = () => {
  return (
    <>
    <Suspense fallback={<Loader />}>
      <LoginSuccessHandler />
    </Suspense>
    <main className="h-full w-full flex flex-col justify-center">
      <Hero />
      <MainInfo />
      <TimelineSec />
    </main>
    </>
  );
};

export default page;
