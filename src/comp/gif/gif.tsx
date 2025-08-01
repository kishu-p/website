"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface RotatingGifProps {
  gifList: string[];
  interval?: number; // Optional: default 3 sec
}

export default function RotatingGif({
  gifList,
  interval = 3000,
}: RotatingGifProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % gifList.length);
    }, interval);

    return () => clearInterval(id);
  }, [gifList, interval]);

  return (
    <div className="flex justify-center">
      <Image
        src={gifList[index]}
        alt={`Rotating GIF ${index + 1}`}
        width={200}
        height={200}
        className=" transition duration-500"
      />
    </div>
  );
}

// This is how We'll import it

{
  /* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
  <RotatingGif
    gifList={["/gifs/love1.gif", "/gifs/love2.gif"]}
    interval={3000}
  />
  <RotatingGif
    gifList={["/gifs/dance1.gif", "/gifs/dance2.gif"]}
    interval={4000}
  />
  <RotatingGif
    gifList={["/gifs/sleep1.gif", "/gifs/sleep2.gif"]}
    interval={5000}
  />
</div>; */
}
