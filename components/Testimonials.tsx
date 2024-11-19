import { UserTestimonials } from '@/constants'
import React from 'react'
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
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section id="reviews">
    <div className="py-2 md:px-0 px-[2rem] flex flex-col items-center justify-center gap-12">
    <div className="text-center items-center flex flex-col gap-4">
        <div className="text-6xl text-white">
        What Our Members Say
        </div>
        <div className="text-blue-4 text-md w-80 text-center">
        Dive into the success stories of our valued Members and discover how Forexindia has transformed their Life.
        </div>
    </div>


    <div className='grid  grid-cols-1 md:grid-cols-3 gap-12'>
        {UserTestimonials.map((i) => (
                      <Card key={i.id} className="bg-gradient-to-b from-[#24293e] to-[#090e29] p-2 w-full md:w-96">
                      <CardHeader>
                        <CardTitle className="text-white text-3xl flex gap-2 items-center">
                          <div className="inline-block bg-gradient-to-b from-[#3d4667] to-[#14162d] rounded-full p-1 items-center border border-slate-500">
                          </div>
                          {i.name}
                        </CardTitle>
                        <CardDescription className="text-lg text-blue-4">
                        {i.profession}
                        </CardDescription>
                        <hr className="mt-4 mb-4"/>
                      </CardHeader>
                      <CardContent>
                        <div className='text-blue-4 text-md'>{i.quote}
                            </div>        
                      </CardContent>
                    </Card>
        ))}
    </div>
    </div>
    </section>
  )
}

export default Testimonials
