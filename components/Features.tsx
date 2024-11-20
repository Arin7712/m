import React from "react";
import EditNote from "@mui/icons-material/EditNote";
import EventNote from "@mui/icons-material/EventNote";
import CheckBox from "@mui/icons-material/CheckBox";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

const Features = () => {
  return (
    
    <section id="features">
    <div className="py-2 md:px-0 px-[2rem] flex flex-col items-center justify-center">
    <motion.div
    initial={{ opacity: 0, y: 50 }} // Starting state
      whileInView={{ opacity: 1, y: 0 }} // Target state when visible
      viewport={{ once: true, amount: 0.3 }} // Trigger only once when 30% of the component is visible
      transition={{ duration: 0.8, ease: "anticipate" }}>
        <div className="text-center items-center flex flex-col gap-4">
            <div className="text-6xl text-white">
            Life Changing Decision
            </div>
            <div className="text-blue-4 text-md w-80 text-center">
            The only Forex Learning community in India that teaches the secrets & reality of the markets for extraordinary dreamers in the era of fake Gurus!
            </div>
        </div>
        </motion.div>


      <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row px-4 md:px-[7rem] py-[8rem] gap-4">
      <motion.div
    initial={{ opacity: 0, y: 50 }} // Starting state
      whileInView={{ opacity: 1, y: 0 }} // Target state when visible
      viewport={{ once: true, amount: 0.3 }} // Trigger only once when 30% of the component is visible
      transition={{ duration: 0.8, ease: "anticipate", delay: 0.5 }}>
        <div>
          <Card className="bg-gradient-to-b from-[#24293e] to-[#090e29] p-2">
            <CardHeader>
              <CardTitle className="text-white text-3xl flex gap-2 items-center">
                <div className="inline-block bg-gradient-to-b from-[#3d4667] to-[#14162d] rounded-full p-1 items-center border border-teal-400">
                  <EditNote style={{ color: "purple", fontSize: "36px" }} />
                </div>
                Master risk Management
              </CardTitle>
              <CardDescription className="text-lg text-blue-4">
                Completely rely on us for your mindset to change to a well
                trained brutal wolf that can manage the risk to reward easily
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Image
                  src="/feature1.webp"
                  alt="logo"
                  width={420}
                  height={420}
                />
              </div>
            </CardContent>
          </Card>
        </div>
        </motion.div>


        <motion.div
    initial={{ opacity: 0, y: 50 }} // Starting state
      whileInView={{ opacity: 1, y: 0 }} // Target state when visible
      viewport={{ once: true, amount: 0.3 }} // Trigger only once when 30% of the component is visible
      transition={{ duration: 0.8, ease: "anticipate", delay: 0.6 }}>
        <div>
          <Card className="bg-gradient-to-b from-[#24293e] to-[#090e29] p-2">
            <CardContent>
              <div>
                <Image
                  src="/feature2.webp"
                  alt="logo"
                  width={420}
                  height={420}
                />
              </div>
            </CardContent>
            <CardHeader>
              <CardTitle className="text-white text-3xl flex gap-2 items-center">
                <div className="inline-block bg-gradient-to-b from-[#3d4667] to-[#14162d] rounded-full p-1 items-center border  border-teal-500">
                  <EventNote style={{ color: "purple", fontSize: "36px" }} />
                </div>
                Secret Strategies
              </CardTitle>
              <CardDescription className="text-lg text-blue-4">
              Start your trading journey with the best in class strategies that are being tested 24/7
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        </motion.div>



        <motion.div
    initial={{ opacity: 0, y: 50 }} // Starting state
      whileInView={{ opacity: 1, y: 0 }} // Target state when visible
      viewport={{ once: true, amount: 0.3 }} // Trigger only once when 30% of the component is visible
      transition={{ duration: 0.8, ease: "anticipate", delay: 0.8 }}>
        <div>
          <Card className="bg-gradient-to-b from-[#24293e] to-[#090e29] p-2">
            <CardHeader>
              <CardTitle className="text-white text-3xl flex gap-2 items-center">
                <div className="inline-block bg-gradient-to-b from-[#3d4667] to-[#14162d] rounded-full p-1 items-center border border-teal-500">
                  <CheckBox style={{ color: "purple", fontSize: "36px" }} />
                </div>
                Money is Freedom
              </CardTitle>
              <CardDescription className="text-lg text-blue-4">
              Start making money like never before, students and job workers can now buy all they want !
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Image
                  src="/feature3.png"
                  alt="logo"
                  width={420}
                  height={420}
                />
              </div>
            </CardContent>
          </Card>
        </div>
</motion.div>


      </div>
<motion.div
    initial={{ opacity: 0, y: 50 }} // Starting state
      whileInView={{ opacity: 1, y: 0 }} // Target state when visible
      viewport={{ once: true, amount: 0.3 }} // Trigger only once when 30% of the component is visible
      transition={{ duration: 0.8, ease: "anticipate", delay: 1 }}>
        <div className="text-center items-center flex flex-col gap-4">
            <div className="text-6xl text-white">
            We Transform the way you think
            </div>
            <div className="text-blue-4 text-md w-80 text-center">
            Helping you stay focused and confident in the world full of scams, You have to start making serious moves if you want to escape the matrix...            </div>
        </div>
        </motion.div>
    </div>
    </section>
  );
};

export default Features;
