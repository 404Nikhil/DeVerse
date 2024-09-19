"use client"; 

import React, { useEffect, useState } from "react";

const Register: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<string>("00:00:00:00");

  useEffect(() => {
    const targetDate = new Date("2024-09-23T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft("00:00:00:00");
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft(
          `${days.toString().padStart(2, "0")}:${hours
            .toString()
            .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`
        );
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h4 className="text-md max-w-2xl text-pretty text-center text-text-tertiary dark:text-dark-text-tertiary md:text-lg">
        Registration ends in
      </h4>
      <h1 className="text-3xl tracking-wide">{timeLeft}</h1>
    </div>
  );
};

export default Register;
