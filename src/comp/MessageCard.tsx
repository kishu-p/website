import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";
import { cardData } from "./data";
import Image from "next/image";

const MessageCard = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 items-start my-20">
      {cardData.map((card) => (
        <Card
          key={card.id}
          className="w-full max-w-md mx-auto bg-gradient-to-br from-white to-pink-50 border-2 border-pink-200 shadow-xl relative overflow-hidden self-start"
        >
          <div className="absolute -top-3 -left-2 text-6xl select-none">🎀</div>
          <CardContent className="p-8 text-center relative">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-30 select-none">
              <Image
                src={card.imageUrl}
                alt="Background"
                fill
                className="object-contain"
              />
            </div>

            {/* Sparkles */}
            <div className="absolute top-4 right-4 w-3 h-3 text-purple-300 opacity-50">
              <Sparkles className="w-full h-full" />
            </div>
            <div className="absolute bottom-12 left-4 w-3 h-3 text-pink-300 opacity-50">
              <Sparkles className="w-full h-full" />
            </div>

            {/* Main Content */}
            <div className="relative z-10">
              {/* Title */}
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-pink-600 mb-2">
                  {card.title}
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
              </div>

              {/* Message */}
              <div className="mb-6">
                <p className="text-base font-medium italic text-gray-700 leading-relaxed">
                  {card.message}
                </p>
              </div>

              {/* Hearts */}
              <div className="flex justify-center gap-2 text-pink-400 mb-6">
                <Heart className="w-4 h-4 fill-current" />
                <Heart className="w-5 h-5 fill-current" />
                <Heart className="w-4 h-4 fill-current" />
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-pink-200">
                <p className="text-sm italic text-gray-600">{card.footer}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MessageCard;
