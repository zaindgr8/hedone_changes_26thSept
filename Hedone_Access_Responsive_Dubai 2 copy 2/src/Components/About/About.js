import React from 'react'
import Quote from "./quote.js"

const About = () => {
  return (
    <div className='bg-[#f5f6f7]  py-10' id="About">
      <div className='w-[80%] mx-auto'>
      <h1 className='uppercase  font-bold font-Cinzel text-[36px] sm:text-[24px] xs:text-[20px] text-center text-black mb-7'>Our Values</h1>
      </div>
      <Quote/>
    </div>
    
  )

}

export default About
