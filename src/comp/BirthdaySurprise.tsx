"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BalloonCanvas from "@/animationComp/BallonAnimation";
import { ArrowLeft } from "lucide-react";
import MessageCard from "./MessageCard";

export default function BirthdaySurprise() {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden bg-gradient-radial from-yellow-400 to-orange-400">
        <BalloonCanvas />
        <div className="fixed top-4 left-4 z-50">
          <Link href={"/happy"}>
            <Button className="rounded-sm shadow-lg backdrop-blur-sm font-sans cursor-pointer">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen grid place-items-center p-8 sm:p-20 pointer-events-auto"
          >
            <main className="flex flex-col items-center gap-8">
              <motion.h1
                className="text-6xl md:text-8xl text-center font-sacramento font-normal text-white text-shadow-glow select-none"
                animate={{ scale: [1, 1.05, 1], rotate: [0, 1, -1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                🎉 Happy Birthday Baby 🎂
              </motion.h1>
              <motion.p
                className="text-3xl text-center font-pacifico text-white/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Wishing you a day filled with happiness! 🌟
              </motion.p>
              <motion.p
                className="text-xl text-center text-white/60 max-w-md font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                May your special day be surrounded by love, laughter, and all
                the things that make you smile. Here&apos;s to another year of
                wonderful adventures and beautiful memories! 💕
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/memories">
                  <Button
                    variant="outline"
                    className="relative flex items-center pointer-events-auto cursor-pointer"
                  >
                    <div className="absolute -left-6 -top-3 text-3xl -rotate-45 select-none">
                      🎀
                    </div>
                    Click to unlock memories
                  </Button>
                </Link>
              </motion.div>
            </main>
          </motion.div>
        </div>
      </div>
      <MessageCard />
    </div>
  );
}
