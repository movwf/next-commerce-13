import React from "react";

import Image from "next/image";

function Banner() {
  return (
    <div className="w-full">
      <Image
        src="/banner.webp"
        alt="Banner"
        height="300"
        width={"600"}
        className="w-full my-4"
      />
    </div>
  );
}

export default Banner;
