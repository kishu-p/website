"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bottom-0 left-0 right-0 backdrop-blur-sm border-t border-white">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {/* Love message with hearts - First Row */}
          <div className="flex items-center space-x-2">
            <span className="text-md text-white font-sans font-bold">
              Made with lots of love 💖 for your special day
            </span>
          </div>

          {/* Copyright and Developer Credit - Second Row */}
          <div className="flex items-center space-x-1 text-xs text-white">
            <span>© 2025</span>
            <span>Developed and Designed by</span>
            <motion.span
              className="font-medium text-pink-600 cursor-pointer"
              whileHover={{ scale: 1.05, color: "#ec4899" }}
              whileTap={{ scale: 0.95 }}
            >
              Unknow Person
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
}
