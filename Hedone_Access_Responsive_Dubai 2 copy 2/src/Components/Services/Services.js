import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImgSlider from "../Components1/imgslider.js"



const Services = () => {
  return (
   <div className='py-4' id="Services">
    <h1 className='uppercase  font-bold font-Cinzel text-[36px] xs:text-[20px] sm:text-[24px] text-center text-black mb-5'>Our Services, Your Access</h1>
<ImgSlider/>   
    </div>
  );
};

export default Services;
