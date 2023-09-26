import React from 'react'
import { motion } from "framer-motion"
import Boxes from './boxes.js';
import indivisual from "../../Assets/indivisual.avif";
import business from "../../Assets/business.avif"

const MemberShip = () => {

  return (
    <motion.div className='py-10 bg-[#f5f6f7]'
    id="MemberShips"
    >
      <h1 className='uppercase font-bold font-Cinzel text-[36px] xs:text-[20px] sm:text-[24px] text-center text-black '>Premium Memberships</h1>
      <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-8 max-w-[90%] mx-auto mt-10'>
      <Boxes title="Individual Membership" description="Each Hedone Access member is paired with a dedicated lifestyle manager, providing a personal touch to every of your need & to cater your preferences and fulfill your requests seamlessly across all aspects of life." image={business}/>
      <Boxes title="Business Membership" description="Expanding beyond individuals, Hedone Access, including Corporate Memberships and Hedone Access Experiences, leverages our insights and expertise to enhance brand and business support for Our clients." image={indivisual}/>
    </div>
    </motion.div>
  )
}

export default MemberShip