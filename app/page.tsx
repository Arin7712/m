"use client"

import Chatbot from "@/components/Chatbot";
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
import Script from "next/script";

export default function Home() {


  return (
    <>
          <Chatbot/>

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
    </>
  );
}
