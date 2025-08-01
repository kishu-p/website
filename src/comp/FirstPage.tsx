"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
            I have a surprise for my favorite person!🌸
          </motion.h1>{" "}
          🎊
        </div>
        <motion.p
          className="text-xl text-center text-white/50 max-w-md mx-auto font-sans font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          To aaiye aur sath me celebrate krte hai{" "}
        </motion.p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href={"/happy"}>
            <div className="relative inline-block">
              {/* 🎀 Bow emoji positioned at top-left of the button */}
              <div className="absolute -top-3 -left-3 text-2xl -rotate-45 select-none z-10">
                🎀
              </div>

              {/* Button */}
              <Button variant="outline" className="relative z-0 cursor-pointer">
                Reveal Surprise
              </Button>
            </div>
          </Link>
        </motion.div>
        <Image
          src="/gifs/bubu-love.gif"
          alt="Bubu Dudu Love"
          width={180}
          height={180}
          className="rounded-xl shadow-lg"
        />
      </main>
    </div>
  );
};

export default FirstPage;
