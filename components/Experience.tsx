'use client'

import Image from "next/image";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { secureHeapUsed } from "crypto";


const Experience = () => {

    const scrollAreaRef = useRef(null);

  const handleScroll = (e: any) => {
    const target = e.target;
    const isAtTop = target.scrollTop === 0;
    const isAtBottom =
      target.scrollHeight - target.scrollTop === target.clientHeight;

    if (isAtTop || isAtBottom) {
      target.style.overflowY = "hidden"; // Pass scroll to the parent when limits are reached
    } else {
      target.style.overflowY = "auto"; // Enable scrolling within the scroll area
    }
  };

  return (
    <section id="experience">
    <div className="flex md:flex-row flex-col items-center px-[2rem] md:px-[7rem] py-[4rem] gap-28">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="text-white text-5xl">Redefining Forex Excellence</div>
          <div className="text-blue-4 text-xl">
            You <span className="font-bold">Don't</span> Need A Lot of Money To
            Start
          </div>
        </div>

        <div className="flex flex-wrap w-full md:w-[500px] gap-4">
          <div className="flex items-center gap-2 text-blue-4">
            <Image src="/tick.svg" alt="tick" width={24} height={24} />
            One of a kind community
          </div>
          <div className="flex items-center gap-2 text-blue-4">
            <Image src="/tick.svg" alt="tick" width={24} height={24} />
            Daily motivation
          </div>
          <div className="flex items-center gap-2 text-blue-4">
            <Image src="/tick.svg" alt="tick" width={24} height={24} />
            Daily motivation
          </div>
          <div className="flex items-center gap-2 text-blue-4">
            <Image src="/tick.svg" alt="tick" width={24} height={24} />
            Completely Transparent
          </div>
          <div className="flex items-center gap-2 text-blue-4">
            <Image src="/tick.svg" alt="tick" width={24} height={24} />
            Find a purpose to live
          </div>
          <div className="flex items-center gap-2 text-blue-4">
            <Image src="/tick.svg" alt="tick" width={24} height={24} />
            Students making 10lakh+/month
          </div>
          <div className="flex items-center gap-2 text-blue-4">
            <Image src="/tick.svg" alt="tick" width={24} height={24} />
            24/7 Coaching and Support
          </div>
        </div>

        <hr className="border-blue-4" />

        <div className="flex items-center">
          <div className="inline-block">
          <Button className="flex hover:shadow-md hover:shadow-cyan-400 shadow-sm shadow-cyan-400 bg-gradient-to-b from-[#333c5c] to-[#14162d] text-xl px-4 py-2 text-blue-1 hover:to-blue-950 transition-shadow ease-in-out">
            <AccountBalanceWalletIcon style={{ color: "purple", fontSize: "36px" }} />
            LIFETIME ACCESS
          </Button>
          </div>
        </div>
      </div>


      {/*Scrollable frame*/}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <ScrollArea className="w-full h-auto max-h-[60vh] rounded-md scrollbar-hidden overflow-auto p-4 border border-gray-700">
            <Image
                        src="/img2.webp"
                        alt="img1"
                        layout="responsive"
                        width={700}
                        height={500} // Adjust height to ensure responsiveness
                        className="rounded-md object-cover"
                      />
          <Image
            src="/img1.png"
            alt="img1"
            layout="responsive"
            width={700}
            height={500} // Adjust height to ensure responsiveness
            className="rounded-md object-cover"
          />

        </ScrollArea>
      </div>
    </div>
    </section>
  );
};

export default Experience;
