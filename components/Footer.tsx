import Image from 'next/image'
import React from 'react'

import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }} // Starting state
      whileInView={{ opacity: 1, y: 0 }} // Target state when visible
      viewport={{ once: true, amount: 0.3 }} // Trigger only once when 30% of the component is visible
      transition={{ duration: 0.8, ease: "anticipate" }}>
    <div className='flex flex-col gap-12 px-[2rem] md:px-[7rem] '>
      <div className='flex flex-row items-center justify-between'>
        <div className=''>
            <Image src="/moneylogo.png" alt="logo" width={145} height={145}/>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-2 gap-4'>
            <div>
                <h2 className='text-white tedxt-2xl'>COMPANY</h2>
                <h4 className='text-blue-4 text-lg'>Experience</h4>
                <h4 className='text-blue-4 text-lg'>Pricing</h4>
                <h4 className='text-blue-4 text-lg'>Reviews</h4>
                <h4 className='text-blue-4 text-lg'>FAQ</h4>
            </div>

            <div>
                <h2 className='text-white tedxt-2xl'>SOCIAL MEDIA</h2>
                <h4 className='text-blue-4 text-lg'>Instagram</h4>
                <h4 className='text-blue-4 text-lg'>Youtube</h4>
            </div>
        </div>
      </div>

    <div className='flex flex-col gap-2'>
    <div
      className="w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
      aria-hidden="true"
    />
    </div>

    <div className='text-white text-2xl uppercase'>end to end encrypted with v8 technology</div>
    </div>
    </motion.div>
  )
}

export default Footer
