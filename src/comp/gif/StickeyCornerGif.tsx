import Image from "next/image";
import React from "react";

const StickeyCornerGif = () => {
  return (
    <div className="fixed bottom-0 right-0 z-50 pointer-events-none select-none">
      <Image
        src="/gifs/love-fly.gif"
        alt="Bubu Dudu Love"
        width={200}
        height={200}
        className="w-full max-w-sm"
      />
    </div>
  );
};

export default StickeyCornerGif;
