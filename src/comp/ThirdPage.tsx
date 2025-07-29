"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Heart } from "lucide-react";
import Link from "next/link";
import ImageComponent from "./Image";

const ThirdPage = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Top-left buttons */}
      <div className="fixed top-4 left-4 space-x-2 z-50">
      <Link href={"/bddy"}>
          <Button className="rounded-sm shadow-lg backdrop-blur-sm font-sans">
            {" "}
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
     
      </div>
      {/* Decorative Hearts */}
      <motion.div
        className="absolute top-20 right-20 z-10"
        animate={{
          scale: [1, 1.1],
          rotate: [0, 5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
          type: "tween",
        }}
      >
        <Heart className="w-12 h-12 text-pink-500 fill-current" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-16 z-10"
        animate={{
          scale: [1, 1.2],
          rotate: [0, -10],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1,
          type: "tween",
        }}
      >
        <Heart className="w-8 h-8 text-pink-400 fill-current" />
      </motion.div>

      {/* Centered content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 mt-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.2,
          }}
          className="text-center mb-12"
        >
          <motion.h1 className="text-5xl md:text-7xl text-white font-fallback font-bold">
            Mirror of Memories
          </motion.h1>
        </motion.div>
        {/* 
        <motion.h1
          className="text-6xl md:text-8xl font-sacramento font-normal text-whit text-shadow-glow mb-6"
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
          className="text-3xl font-pacifico font-normal text-shadow-soft text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Wishing you a day filled with happiness! 🌟
        </motion.p>
        <motion.p
          className="text-xl text-center text-gray-600 mb-8 max-w-md mx-auto font-sans font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          May your special day be surrounded by love, laughter, and all the
          things that make you smile. Here's to another year of wonderful
          adventures and beautiful memories! 💕
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href={"/memories"}>
            <Button className="flex items-center cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-4 py-1 text-lg rounded-full shadow-lg font-sans font-semibold">
              <HeartIcon className="w-5 h-5 mr-2" />
              Click to unlock memories
            </Button>
          </Link>
        </motion.div>
        <motion.p
          className="text-6xl md:text-8xl font-sacramento font-normal  text-shadow-romantic mb-6"
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
            🌼🌼💐🌻🌻🌻
        </motion.p> */}
        <ImageComponent />
      </main>
    </div>
  );
};

export default ThirdPage;
