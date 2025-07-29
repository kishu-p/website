import { Gift, Heart, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Cardcomp() {
  return (
    <div className="flex items-center justify-center min-h-screen p-1">
      <Card className="w-full max-w-md bg-gradient-to-br from-white to-pink-50 border-2 border-pink-200 shadow-xl relative">
        <CardContent className="p-8 text-center space-y-6">
          {/* Bow emoji in top left corner */}
          <div className="absolute -top-11 -left-12 text-8xl select-none">🎀</div>

          {/* Header with icons */}
          <div className="flex justify-center items-center gap-2 text-pink-500">
            <Sparkles className="h-6 w-6 animate-pulse" />
            <Gift className="h-8 w-8" />
            <Sparkles className="h-6 w-6 animate-pulse" />
          </div>


          {/* Main title */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-pink-600 tracking-wide">Happy Birthday!</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          {/* Birthday message */}
          <div className="space-y-4 text-gray-700">
            <p className="text-lg font-medium">Wishing you a day filled with happiness and a year filled with joy!</p>
            <p className="text-base leading-relaxed">
              May all your dreams come true and may you be surrounded by love, laughter, and wonderful memories on your
              special day.
            </p>
          </div>

          {/* Decorative hearts */}
          <div className="flex justify-center gap-2 text-pink-400">
            <Heart className="h-4 w-4 fill-current" />
            <Heart className="h-5 w-5 fill-current" />
            <Heart className="h-4 w-4 fill-current" />
          </div>

          {/* Bottom message */}
          <div className="pt-4 border-t border-pink-200">
            <p className="text-sm text-gray-600 italic">Hope your birthday is as wonderful as you are!</p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-6 right-6 text-purple-300 opacity-50">
            <Sparkles className="h-3 w-3" />
          </div>
          <div className="absolute bottom-4 left-6 text-pink-300 opacity-50">
            <Sparkles className="h-3 w-3" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
