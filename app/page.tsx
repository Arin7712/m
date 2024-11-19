"use client"

import Context from "@/components/Context";
import DisplayImage from "@/components/DisplayImage";
import Experience from "@/components/Experience";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Questions from "@/components/Questions";
import Testimonials from "@/components/Testimonials";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

export default function Home() {


  return (
    <div>
      <Navbar/>
      <Hero/>
      <Context/>
      <Features/>
      <Pricing/>
      <Experience/>
      <DisplayImage/>
      <Testimonials/>
      <Questions/>
      <Footer/>
    </div>
  );
}
