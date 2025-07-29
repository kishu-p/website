"use client";
import ConfettiSideCannons from "@/animationComp/confetti";
import { motion } from "framer-motion";
import Link from "next/link";

import React from "react";

const FirstPage = () => {
  return (
    <div className="font-sans min-h-screen grid place-items-center p-8 sm:p-20 bg-black">
      <main className="flex flex-col items-center gap-8">
        <motion.div
          animate={{
            rotate: [0, 5],
            scale: [1, 1.02],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            type: "tween",
          }}
        >
          <p className="text-8xl select-none">🧸</p>
        </motion.div>{" "}
        <div className="max-w-7xl text-center text-6xl md:text-8xl font-normal text-shadow-romantic select-none">
          <motion.h1
            className="max-w-7xl text-center text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-br to-red-500 via-purple-300 from-black"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            Someone Special Has a Surprise!
          </motion.h1>{" "}
          🎊
        </div>
        <motion.p
          className="text-xl text-center text-white/50 max-w-md mx-auto font-sans font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Click the button below to reveal your surprise!{" "}
        </motion.p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href={"/bddy"}>
            <ConfettiSideCannons className="flex items-center cursor-pointer">
              <div className="absolute mr-30 mb-8 text-3xl -rotate-45 select-none">
                🎀
              </div>
              Reveal Surprise
            </ConfettiSideCannons>
          </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default FirstPage;
