import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from './ui/button'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Questions = () => {
  return (
    <section id="questions">
    <div className="py-[6rem] md:px-[7rem] px-[2rem] flex flex-col items-center justify-center gap-12">
    <div className="text-center items-center flex flex-col gap-4">
        <div className="text-6xl text-white">
        Frequently asked Questions
        </div>
        <div className="text-blue-4 text-md w-80 text-center">
        Everything you need to know
        </div>
    </div>

    <div className='w-full md:w-[44rem]'>
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className='text-white text-3xl'>Terms and Conditions</AccordionTrigger>
    <AccordionContent className='text-md text-blue-4'>
    Introduction -
Welcome to ForexIndia, an online platform dedicated to providing educational resources on Forex trading. By accessing and using our website and services, you agree to comply with and be bound by the following Terms and Conditions. Please read these terms carefully before using our services. If you do not agree with any part of these terms, you must not use our services.
‍
Services Offered -
ForexIndia offers educational resources and access to a paid community where students can learn about Forex trading. These resources are provided to help individuals gain knowledge and skills in Forex trading.
‍
Pricing -
The price for accessing our educational resources and the paid community is Fluctuated according to the demand. This fee is a monthly charged fee for the specified services.
‍
Financial Disclaimer -
No Investment Advice: The educational resources provided on our platform is for informational and educational purposes only.
‍
No Liability for Losses -
Any financial loss, investment loss, or profit resulting from the
User Responsibilities

Refund Policy -
We offer a 24 hour refund policy only if the user is unable to access the lectures provided, If the user has gained access to the lectures even once, the Refund won't be initiated in any case.
‍
Compliance with Laws -
Users are responsible for ensuring that their use of our services complies with all applicable laws and regulations.
‍
No Liability for External Investments -
Mr. Archit Kedia and [ForexIndia] will not be held liable for any investments, payments, or financial transactions made by the user on any other application, website, or platform outside of this site or Archit Kedia’s official Instagram handle that is -  (@axrchit) the user assumes full responsibility for any such actions and the resulting consequences.
‍
Accurate Information -
Users must provide accurate and complete information when registering for our services. Any misinformation may result in termination of access to our services.
‍
Intellectual Property -
All content, materials, and resources provided on our platform are the intellectual property of [ForexIndia] or its licensors. Users are granted a limited, non-exclusive, non-transferable license to access and use the content for personal educational purposes only. Unauthorized use, reproduction, or distribution of the content is prohibited.
‍
Termination -
We reserve the right to terminate or suspend access to our services at our discretion, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users of our services, us, or third parties, or for any other reason.
‍
Changes to Terms and Conditions -
We may update these Terms and Conditions from time to time. Any changes will be posted on this page, and the revised terms will take effect immediately upon posting. It is your responsibility to review these terms periodically.
‍
Governing Law -
These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in India.
‍
Contact Us -
If you have any questions or concerns about these Terms and Conditions, please.
contact us at -
‍
ForexIndia
akassociatesbsp@gmail.com

By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
  <AccordionTrigger className='text-white text-3xl'>Refund Policy</AccordionTrigger>
    <AccordionContent className='text-md text-blue-4'>
    Refund Policy -
    We offer a 24 hour refund policy only if the user is unable to access the lectures provided, If the user has gained access to the lectures even once, the Refund won't be initiated in any case.
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
  <AccordionTrigger className='text-white text-3xl'>Privacy Policy</AccordionTrigger>
    <AccordionContent className='text-md text-blue-4'>
    Privacy Policy for [MONEYRAINSFOREVER] Effective Date: July 9 2024 moneyrainsforever.com ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [www.moneyrainsforever.com], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
    </AccordionContent>
  </AccordionItem>
</Accordion>

    </div>

    <div>
    <Card className="bg-gradient-to-b mt-10 from-[#24293e] to-[#050a25] p-2 w-full md:w-[44rem] flex flex-col items-start border-none">
            <CardHeader>
            <CardTitle className='items-start flex text-start font-light'>

                <div className='text-blue-4 text-xl'>Can't find the answers you're looking for ? Please chat with our team.</div>
            </CardTitle>
              <CardDescription className="text-5xl text-white mb-10">
              
DM to @axrchit on Instagram

              </CardDescription>
            </CardHeader>
            <CardFooter>

            </CardFooter>
          </Card>
    </div>
      
    </div>
    </section> 
  )
}

export default Questions
