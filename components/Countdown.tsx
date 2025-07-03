"use client";
import React, { useState, useEffect } from "react";

// --- DEFINISI TIPE --- //
interface CountdownProps {
  targetDate: string; // Menerima tanggal dalam format string ISO, contoh: "2025-08-25T00:00:00"
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// --- KOMPONEN HITUNG MUNDUR --- //

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Fungsi untuk menghitung sisa waktu
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    // Set waktu awal saat komponen dimuat
    setTimeLeft(calculateTimeLeft());

    // Perbarui waktu setiap detik
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Bersihkan interval saat komponen di-unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  // Fungsi untuk memformat angka agar selalu dua digit
  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  // Komponen kecil untuk setiap unit waktu
  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      {/* PERBAIKAN: Ukuran font diperkecil untuk layar terkecil */}
      <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-wider">
        {formatNumber(value)}
      </div>
      {/* PERBAIKAN: Ukuran font label diperkecil untuk layar terkecil */}
      <div className="text-[10px] sm:text-sm text-white/70 uppercase tracking-widest mt-1">
        {label}
      </div>
    </div>
  );

  if (!timeLeft) {
    return <div>Loading...</div>; // Tampilan saat waktu sedang dihitung
  }

  return (
    <div className="w-full">
      {/* PERBAIKAN: Mengganti 'gap' dengan 'justify-around' untuk spasi yang fleksibel.
            Padding juga dibuat lebih kecil di layar sempit.
        */}
      <div className="w-[90%] max-w-2xl mx-auto flex items-center justify-around p-4 sm:p-6 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg">
        <TimeBox value={timeLeft.days} label="Days" />
        {/* PERBAIKAN: Ukuran font pemisah diperkecil untuk layar terkecil */}
        <span className="text-3xl sm:text-6xl font-bold text-white/50 pb-6">
          :
        </span>
        <TimeBox value={timeLeft.hours} label="Hours" />
        <span className="text-3xl sm:text-6xl font-bold text-white/50 pb-6">
          :
        </span>
        <TimeBox value={timeLeft.minutes} label="Minutes" />
        <span className="text-3xl sm:text-6xl font-bold text-white/50 pb-6">
          :
        </span>
        <TimeBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};
export default Countdown;
