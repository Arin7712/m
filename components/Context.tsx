import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteCards'
import { testimonials } from '@/constants'

const Context = () => {
  return (
    <div className='text-center flex flex-col overflow-hidden items-center justify-center px-[2rem] md:px-[7rem] py-8'>
      <div className=''>
      <div className='text-blue-4 text-lg w-full md:w-80 '>
      Join 7,000+ Members already growing
      You <span className='font-bold'>Don't</span> Need A Lot of Money To Start
      </div>
      </div>

      <div>
        <InfiniteMovingCards items={testimonials} speed='slow'/>
      </div>
    </div>
  )
}

export default Context
