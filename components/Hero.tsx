'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import { Button } from './ui/button'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


const Hero = () => {

  return (
    <div>
      <div className='flex flex-col md:flex-row px-[2rem] md:px-[7rem] py-[5rem] items-center justify-normal md:gap-0 gap-[6rem] md:justify-around'>
        <div className='max-w-[32rem] flex flex-col items-center gap-16'>
            <div className='flex gap-6 flex-col'>
              <div>
                <p className='text-gray-1 inline-block bg-[#0f122b] px-1 rounded-md'>➡️ What will you do with so much money ?</p>
                </div>
                <div className='text-6xl text-white'>Let the money rain forever</div>
                <p className='text-gray-1 text-xl inline-block rounded-md'>India's most trustable Forex Community making $125.4K+</p>
            </div>

            <div className='flex flex-col gap-6'>
                <Image src="/money1.png" alt="logo" width={270} height={440}/>
            <div className='text-lg text-white'>Get now for 83%  off  ₹2̶0̶,0̶0̶0̶  ➟ ₹3499 lifetime! Limited seats remaining</div>
            <div>

            <Button className="flex hover:shadow-md hover:shadow-cyan-400 shadow-sm shadow-cyan-400 bg-gradient-to-b from-[#333c5c] to-[#14162d] text-xl px-4 py-2 text-blue-1 hover:to-blue-950 transition-shadow ease-in-out">
            <AccountBalanceWalletIcon style={{ color: "purple", fontSize: "36px" }} />
            LIFETIME ACCESS
          </Button>
            </div>
            </div>

        </div>

        <div>
        <div className='bg-[#0f122b] p-2 rounded-md shadow-lg shadow-blue-300'>
        <iframe className='w-[380px] h-[213px] md:w-[560px] md:h-[315px]' src="https://www.youtube.com/embed/pB1qKqMUzNA?si=HMu2xseSAECscLae" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        </div>
      </div>
      </div>
  )
}

export default Hero
