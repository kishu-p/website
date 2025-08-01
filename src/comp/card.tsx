"use client";

import { ArrowLeft, Gift, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import ConfettiSideCannons from "@/animationComp/Confetti";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BirthdayCard() {
  const [hasFlipped, setHasFlipped] = useState(false);
  return (
    <div>
      <div className="fixed top-4 left-4 z-50">
        <Link href={"/"}>
          <Button className="rounded-sm shadow-lg backdrop-blur-sm font-sans cursor-pointer">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-center min-h-[90vh] p-4 mb-64 sm:mb-56 md:mb-36 lg:mb-28">
        <div className="relative w-full max-w-md min-h-96 perspective-1000">
          <div
            className={`relative w-full min-h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
              hasFlipped ? "rotate-y-180" : ""
            }`}
            onClick={() => {
              if (!hasFlipped) {
                setHasFlipped(true);
              }
            }}
          >
            {/* Front Side */}
            <Card className="absolute backface-hidden w-full max-w-md bg-gradient-to-br from-white to-pink-50 border-2 border-pink-200 shadow-xl">
              <CardContent className="p-8 text-center space-y-6">
                {/* Main title */}
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold text-pink-600 tracking-wide">
                    Hello Sona Babe
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
                </div>

                {/* Birthday message */}
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg font-medium italic">
                    &quot;Today is a very special day✨because on this day you
                    came to this world crying🥺to make me laugh🥰for the rest of
                    my life💗❤️.. Like this..😍🫂&quot;{" "}
                  </p>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/gifs/panda-happy.gif"
                      alt="Bubu Dudu Love"
                      width={180}
                      height={180}
                      className=""
                    />
                  </div>
                </div>

                {/* Decorative hearts */}
                <div className="flex justify-center gap-2 text-pink-400">
                  <Heart className="h-4 w-4 fill-current" />
                  <Heart className="h-5 w-5 fill-current" />
                  <Heart className="h-4 w-4 fill-current" />
                </div>

                {/* Bottom message */}
                <div className="pt-4 border-t border-pink-200">
                  <p className="text-sm text-gray-600 italic">
                    Hope your birthday is as wonderful as you are!
                  </p>
                </div>

                {/* Decorative elements */}
                {/* <div className="absolute top-6 right-6 text-purple-300 opacity-50">
                <Sparkles className="h-3 w-3" />
              </div>
              <div className="absolute bottom-4 left-6 text-pink-300 opacity-50">
                <Sparkles className="h-3 w-3" />
              </div> */}
              </CardContent>
            </Card>

            {/* Back Side */}
            <Card className="absolute backface-hidden rotate-y-180 w-full max-w-md bg-gradient-to-br from-white to-pink-50 border-2 border-pink-200 shadow-xl cursor-help">
              <CardContent className="p-8 text-center space-y-6">
                {/* Bow emoji in top left corner */}
                <div className="absolute -top-11 -left-12 text-8xl select-none">
                  🎀
                </div>

                {/* Header with icons */}
                <div className="flex justify-center items-center gap-2 text-pink-500">
                  <Sparkles className="h-6 w-6 animate-pulse" />
                  <Gift className="h-8 w-8" />
                  <Sparkles className="h-6 w-6 animate-pulse" />
                </div>

                {/* Main title */}
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold text-pink-600 ">
                    {/* Happy Birthday Cutipie */}
                    Today&apos;s my most fevorite person Birthday
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
                </div>

                {/* Birthday message */}
                <div className="space-y-4 text-gray-700">
                  <ConfettiSideCannons>
                    <div className="flex items-center justify-center">
                      <Link href={"/surprise"}>
                        <Image
                          src="/gifs/dudu-surprise.gif"
                          alt="Bubu Dudu Love"
                          width={180}
                          height={180}
                          className="cursor-pointer"
                        />
                      </Link>
                    </div>
                  </ConfettiSideCannons>
                </div>

                {/* Decorative hearts */}
                <div className="flex justify-center gap-2 text-pink-400">
                  <Heart className="h-4 w-4 fill-current" />
                  <Heart className="h-5 w-5 fill-current" />
                  <Heart className="h-4 w-4 fill-current" />
                </div>

                {/* Bottom message */}
                <div className="pt-4 border-t border-pink-200">
                  <p className="text-sm text-gray-600 italic">
                    &quot;Now, click on the one that steals your heart the most
                    💖✨&quot;
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
