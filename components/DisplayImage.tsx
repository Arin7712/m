import Image from "next/image";
import React from "react";

const DisplayImage = () => {
  return (
    <div className="w-full px-[2rem] md:px-[7rem] rounded-md py-[4rem]">
      <Image
        src="/img3.png"
        alt="logo"
        layout="responsive"
        width={100} // Percentage-based width
        height={50} // Aspect ratio
        className="object-cover rounded-md" // Ensures the image fills the container
      />
    </div>
  );
};

export default DisplayImage;