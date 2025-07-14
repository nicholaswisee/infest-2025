"use client";

import { useEffect, useState } from "react";
import Countdown from "./Countdown";
import { TARGET_DATE } from "@/data/targetDate";

const CountdownSection = () => {
  const [targetDate, setTargetDate] = useState<Date | null>(null);

  useEffect(() => {
    setTargetDate(TARGET_DATE);
  }, []);


  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[1371px] h-[110px] text-center">
        <div className="absolute inset-0 text-[64px] font-bold leading-[100%] text-white text-shadow-lg">
          Countdown
        </div>

        <div
          className="relative text-[64px] font-bold leading-[100%] text-transparent bg-clip-text
          [background-image:linear-gradient(177.95deg,_#FFFFFF_1.46%,_#C899FF_48.05%,_#FFFFFF_106.39%)]">
          Countdown
        </div>
      </div>

      <div
        className="mt-10 rounded-[26.2px] p-[65.39px] shadow-[0px_24.67px_74px_0px_rgba(151,71,255,0.32)]
                  border-[1.23px] border-solid bg-[#4E0C51]"
        style={{
          borderImage:
            "linear-gradient(177.42deg, rgba(255,255,255,0.3) -148.14%, rgba(255,255,255,0) 159.81%) 1",
          width: "463.57px",
          height: "207.78px",
        }}
      >
        {targetDate ? (
          <Countdown targetDate={targetDate} />
        ) : (
          <p className="text-white text-center">Loading countdown...</p>
        )}
      </div>
    </div>
  );
};

export default CountdownSection;
