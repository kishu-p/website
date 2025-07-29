"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Gift } from "lucide-react";
import Link from "next/link";
import Cardcomp from "./card";

const SecondPage = () => {
  return (
    <div>
      {/* Top-left buttons */}
      <div className="fixed top-4 left-4 z-50">
        <Link href={"/"}>
          <Button className="rounded-sm shadow-lg backdrop-blur-sm font-sans">
            {" "}
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
      </div>
      <Cardcomp />
      <div className="relative min-h-screen p-8 sm:p-20 grid place-items-center">
        {/* Centered content */}
        <main className="flex flex-col items-center gap-8">
          <motion.div
            animate={{
              rotate: [0, 5],
              scale: [1, 1.05],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              type: "tween",
            }}
          >
            <Gift className="w-24 h-24 mx-auto text-yellow-500 mb-4" />
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl text-center font-sacramento font-normal text-white text-shadow-glow select-none"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            🎉 Happy Birthday! 🎂
          </motion.h1>

          <motion.p
            className="text-3xl text-center font-pacifico font-normal text-shadow-soft text-white/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Wishing you a day filled with happiness! 🌟
          </motion.p>
          <motion.p
            className="text-xl text-center text-white/60 max-w-md mx-auto font-sans font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            May your special day be surrounded by love, laughter, and all the
            things that make you smile. Here&apos;s to another year of wonderful
            adventures and beautiful memories! 💕
          </motion.p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href={"/memories"}>
              <Button
                variant={"outline"}
                className="flex items-center cursor-pointer"
              >
                <div className="absolute mr-44 mb-8 text-3xl -rotate-45 select-none">
                  🎀
                </div>
                Click to unlock memories
              </Button>
            </Link>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default SecondPage;
