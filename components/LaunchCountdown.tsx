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
      </div>

      <div
        className="rounded-3xl p-12 shadow-[0px_24.67px_74px_0px_rgba(151,71,255,0.32)]
                   bg-[#4E0C51]"
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
