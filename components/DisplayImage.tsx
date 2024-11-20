import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const DisplayImage = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }} // Starting state
      whileInView={{ opacity: 1, y: 0 }} // Target state when visible
      viewport={{ once: true, amount: 0.3 }} // Trigger only once when 30% of the component is visible
      transition={{ duration: 0.8, ease: "anticipate" }}>
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
    </motion.div>
  );
};

export default DisplayImage;