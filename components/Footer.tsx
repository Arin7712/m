import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer
