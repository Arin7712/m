import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteCards'
import { testimonials } from '@/constants'
import { motion } from "framer-motion";


const Context = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }} // Starting state
      whileInView={{ opacity: 1, y: 0 }} // Target state when visible
      viewport={{ once: true, amount: 0.3 }} // Trigger only once when 30% of the component is visible
      transition={{ duration: 0.8, ease: "anticipate" }}>
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
    </motion.div>
  )
}

export default Context
