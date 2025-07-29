"use client";

import type React from "react";

import confetti from "canvas-confetti";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ConfettiSideCannonsProps {
  children?: React.ReactNode;
  className?: string;
}

export function ConfettiSideCannons({
  children = "Trigger Side Cannons",
  className,
}: ConfettiSideCannonsProps) {
  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = [
"#ffd700",
// "#ff6b6b",

"#9370db",

    // "#ff4500",
];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 2, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <div className="relative">
      <Button variant={"outline"} onClick={handleClick} className={cn(className)}>
        {children}
      </Button>
    </div>
  );
}

// Default export for backward compatibility
export default ConfettiSideCannons;
