"use client";

import { useEffect, useState } from "react";
import Countdown from "./Countdown";
import { TARGET_DATE } from "@/data/targetDate";

type CountdownSectionProps = {
  countdownEndDate: Date;
}

const CountdownSection: React.FC<CountdownSectionProps> = ({ countdownEndDate }) => {
  const [targetDate, setTargetDate] = useState<Date | null>(null);

  useEffect(() => {
    setTargetDate(countdownEndDate);
  }, []);


  return (
    <div className="flex flex-col items-center">

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
