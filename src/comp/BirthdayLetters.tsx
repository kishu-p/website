"use client";

import { motion } from "framer-motion";

interface BalloonProps {
  letter: string;
  colorClass: string;
  animationClass: string;
  shadowClass: string;
}

const Balloon = ({
  letter,
  colorClass,
  animationClass,
  shadowClass,
}: BalloonProps) => {
  return (
    <div
      className={`relative w-19 h-25 m-2.5 rounded-[80%] ${colorClass} ${shadowClass} ${animationClass}`}
    >
      {/* Letter inside balloon */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-[#4f6d7a] font-comic">
        {letter}
      </div>
      {/* Balloon string */}
      <div
        className={`absolute -bottom-4 left-8 text-base font-bold transform rotate-180 ${colorClass.replace(
          "bg-",
          "text-"
        )}`}
      >
        ✓
      </div>
    </div>
  );
};

export default function BalloonLetters() {
  const happyLetters = ["H", "A", "P", "P", "Y"];
  const birthdayLetters = ["B", "I", "R", "T", "H", "D", "A", "Y"];

  const balloonConfigs = [
    {
      colorClass: "bg-[#eaeaeae6]",
      shadowClass: "shadow-inner-gray",
      animationClass: "animate-balloon1",
    },
    {
      colorClass: "bg-[#e8dab2e6]",
      shadowClass: "shadow-inner-yellow",
      animationClass: "animate-balloon2",
    },
    {
      colorClass: "bg-[#dd6e42e3]",
      shadowClass: "shadow-inner-red",
      animationClass: "animate-balloon3",
    },
    {
      colorClass: "bg-[#4f6d7ad6]",
      shadowClass: "shadow-inner-blue",
      animationClass: "animate-balloon4",
    },
    {
      colorClass: "bg-[#eaeaeae6]",
      shadowClass: "shadow-inner-gray",
      animationClass: "animate-balloon5",
    },
  ];

  const birthdayBalloonConfigs = [
    {
      colorClass: "bg-[#dd6e42e3]",
      shadowClass: "shadow-inner-red",
      animationClass: "animate-balloon6",
    },
    {
      colorClass: "bg-[#eaeaeae6]",
      shadowClass: "shadow-inner-gray",
      animationClass: "animate-balloon3",
    }, // Changed from balloon2 to balloon3
    {
      colorClass: "bg-[#4f6d7ad6]",
      shadowClass: "shadow-inner-blue",
      animationClass: "animate-balloon1",
    },
    {
      colorClass: "bg-[#e8dab2e6]",
      shadowClass: "shadow-inner-yellow",
      animationClass: "animate-balloon6",
    },
    {
      colorClass: "bg-[#eaeaeae6]",
      shadowClass: "shadow-inner-gray",
      animationClass: "animate-balloon4",
    },
    {
      colorClass: "bg-[#dd6e42e3]",
      shadowClass: "shadow-inner-red",
      animationClass: "animate-balloon5",
    },
    {
      colorClass: "bg-[#e8dab2e6]",
      shadowClass: "shadow-inner-yellow",
      animationClass: "animate-balloon1",
    },
    {
      colorClass: "bg-[#4f6d7ad6]",
      shadowClass: "shadow-inner-blue",
      animationClass: "animate-balloon6",
    },
  ];

  return (
    <div className="bg-white min-h-screen p-12 min-w-[600px] flex flex-col items-center justify-center">
      {/* HAPPY */}
      <motion.div
        className="flex flex-row justify-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {happyLetters.map((letter, index) => (
          <Balloon
            key={`happy-${index}`}
            letter={letter}
            colorClass={balloonConfigs[index].colorClass}
            animationClass={balloonConfigs[index].animationClass}
            shadowClass={balloonConfigs[index].shadowClass}
          />
        ))}
      </motion.div>

      {/* BIRTHDAY */}
      <motion.div
        className="flex flex-row justify-center mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {birthdayLetters.map((letter, index) => (
          <Balloon
            key={`birthday-${index}`}
            letter={letter}
            colorClass={birthdayBalloonConfigs[index].colorClass}
            animationClass={birthdayBalloonConfigs[index].animationClass}
            shadowClass={birthdayBalloonConfigs[index].shadowClass}
          />
        ))}
      </motion.div>

      {/* Name */}
      <motion.div
        className="flex justify-center pt-12 text-8xl text-[#4f6d7a] italic"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Sweetheart
      </motion.div>
    </div>
  );
}
