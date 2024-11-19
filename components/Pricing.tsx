import React from "react";
import { Button } from "./ui/button";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";

const Pricing = () => {
  return (
    <section id="pricing">
    <div className="py-[4rem]  md:px-[7rem] px-[2rem] flex flex-col  gap-6">

      <div className="flex flex-col items-center gap-6">

      
      <div className="inline-block">
      <Button className="inline-block hover:shadow-md hover:shadow-cyan-400 shadow-sm shadow-cyan-400 bg-gradient-to-b from-[#333c5c] to-[#14162d] text-xl px-4 py-2 text-blue-1 hover:to-blue-950 transition-shadow ease-in-out">
      <a href="https://pages.razorpay.com/forexgods">
        PRICING
        </a>
      </Button>
      </div>

      <div className="text-center items-center flex flex-col gap-4 w-full md:w-1/3">
        <div className="text-5xl text-white">
          Value Worth ₹20K for a price of dinner
        </div>
        <div className="text-blue-4 text-md w-80 text-center">
          Forex India believes in transparency and simplicity. Our pricing plans
          are crafted to provide exceptional value
        </div>
      </div>
      </div>

      <div className="grid grid-cols-1 items-center md:items-start gap-28">
          <Card className="bg-gradient-to-b from-[#24293e] to-[#090e29] p-2 w-full md:w-96">
            <CardHeader>
              <CardTitle className="text-white text-3xl flex gap-2 items-center">
                <div className="inline-block bg-gradient-to-b from-[#3d4667] to-[#14162d] rounded-full p-1 items-center border border-slate-500">
                </div>
                ₹3499/Lifetime
              </CardTitle>
              <CardDescription className="text-lg text-blue-4">
              Life changing decesion is just a few clicks away! Get complete financial freedom
              </CardDescription>
              <hr className="mt-4 mb-4"/>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col items-start gap-4">
                <li className="flex items-center gap-2 text-blue-4"><Image src='/tick.svg' alt='tick' width={24} height={24}/> Hours of step by step Course</li>
                <li className="flex items-center gap-2 text-blue-4"><Image src='/tick.svg' alt='tick' width={24} height={24}/>Complete Blueprint Explained                </li>
                <li className="flex items-center gap-2 text-blue-4"><Image src='/tick.svg' alt='tick' width={24} height={24}/>Secret strategies for Forex that I use                </li>
                <li className="flex items-center gap-2 text-blue-4"><Image src='/tick.svg' alt='tick' width={24} height={24}/>Impeccable Forex & Financial Knowledge                  </li>
              </ul>


                
            </CardContent>
            <CardFooter>
            <Button className="flex hover:shadow-md hover:shadow-cyan-400 shadow-sm shadow-cyan-400 bg-gradient-to-b from-[#333c5c] to-[#14162d] text-xl px-4 py-2 text-blue-1 hover:to-blue-950 transition-shadow ease-in-out">
            <AccountBalanceWalletIcon style={{ color: "purple", fontSize: "36px" }} />
            BUY NOW
          </Button>
            </CardFooter>
          </Card>


          <Card className="bg-gradient-to-b from-[#24293e] to-[#050a25] p-2 w-full md:w-96">
            <CardHeader>
              <CardTitle className="text-white text-3xl flex gap-2 items-center">
                <div className="inline-block bg-gradient-to-b from-[#3d4667] to-[#14162d] rounded-full p-1 items-center border border-slate-500">
                </div>
                ₹1,99,000/Monthly
              </CardTitle>
              <CardDescription className="text-lg text-blue-4">
              Life changing decesion is just a few clicks away! Get complete financial freedom

              </CardDescription>
              <hr className="mt-4 mb-4"/>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col items-start gap-4">
                <li className="flex items-center gap-2 text-blue-4"><Image src='/tick.svg' alt='tick' width={24} height={24}/>Direct contact with Archit Kedia</li>
                <li className="flex items-center gap-2 text-blue-4"><Image src='/tick.svg' alt='tick' width={24} height={24}/>Complete Blueprint Personally Explained</li>
                <li className="flex items-center gap-2 text-blue-4"><Image src='/tick.svg' alt='tick' width={24} height={24}/>Personal error correction and profit scalping</li>
                <li className="flex items-center gap-2 text-blue-4"><Image src='/tick.svg' alt='tick' width={24} height={24}/>Impeccable Forex & Financial Knowledge                  </li>
              </ul>


                
            </CardContent>
            <CardFooter>
            <Button className="flex hover:shadow-md hover:shadow-cyan-400 shadow-sm shadow-cyan-400 bg-gradient-to-b from-[#333c5c] to-[#14162d] text-xl px-4 py-2 text-blue-1 hover:to-blue-950 transition-shadow ease-in-out">
            <AccountBalanceWalletIcon style={{ color: "purple", fontSize: "36px" }} />
            BUY NOW
          </Button>
            </CardFooter>
          </Card>
        </div>
    </div>
    </section>
  );
};

export default Pricing;
