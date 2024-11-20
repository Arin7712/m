"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { navItems } from "@/constants";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import ArrowOutward from '@mui/icons-material/ArrowOutward';


import MenuIcon from '@mui/icons-material/Menu';
import gsap from 'gsap';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Link from "next/link";
import MagicButton from "./MagicButton";

const Navbar = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  const scrollToSection = (id: string) => {
    gsap.to(window, {
      duration: 1, // Duration of the scroll in seconds
      scrollTo: { y: `#${id}`, offsetY: 50 }, // Adjust offsetY for fixed navbars
      ease: 'power2.inOut', // Easing function
    });
  };

  return (
    <div className="text-[#84c1c1] bg-[rgba(15,18,43,0.8)] backdrop-blur-md px-[1rem] z-50 sticky top-0">
      <div className="flex items-center justify-between p-2">
        <div>
          <Image src="/moneylogo.png" alt="logo" width={100} height={100} />
        </div>

        <div className="md:block hidden">
          <ul className="flex gap-6 items-center">
            {navItems.map((item) => (
              <li key={item.id} className="text-lg">
                <button onClick={() => scrollToSection(item.link)}>{item.name}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="inline-block">
        <MagicButton position="right" title="SIGN IN" icon={(<ArrowOutward style={{ color: "white", fontSize: "26px" }} />)}></MagicButton>
        </div>

            <div className="md:hidden block">
              <DropdownMenu>
              <DropdownMenuTrigger>
              <MenuIcon style={{ fontSize: 40, color: 'white', cursor: 'pointer' }} />
              </DropdownMenuTrigger>
              <DropdownMenuContent sideOffset={8} className="border-none  w-screen bg-blue-3 flex flex-col items-center rounded-none">
              {navItems.map((item) => (
              <DropdownMenuItem key={item.id} className="cursor-pointer text-lg text-blue-1">
                <button onClick={() => scrollToSection(item.link)}>{item.name}</button>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator/>
            <DropdownMenuItem>
            <MagicButton position="right" title="SIGN IN" icon={(<ArrowOutward style={{ color: "white", fontSize: "36px" }} />)}></MagicButton>
            </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </div>

      </div>
    </div>
  );
};

export default Navbar;
