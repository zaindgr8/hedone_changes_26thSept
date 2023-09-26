import React from 'react';
import { motion } from "framer-motion"
import Button from "./button.js"
import { useEffect } from 'react';

const textAnimation = {
  hidden: {
    opacity: 0,
    y: -20, // You can adjust this value to control the starting position
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1, // Adjust the duration as needed
    },
  },
};

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const handlePage = () => {
    
   
    const targetElement = document.getElementById("Contact");
  
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); 
    }
  };


  return (
    <>
    <div id="Home">
    <div
    className={`w-full flex flex-col relative justify-center items-center min-h-[100vh]`} 
    style={{ backgroundImage: `url('/mainbg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{duration:1.3,delay:0.8}}
    >
  <motion.p 
  className='text-white max-w-[90%] flex flex-col items-center gap-y-12 mt-10
  text-center mx-auto font-Cinzel xl:text-5xl lg:text-5xl md:text-4xl sm:text-4xl xs:text-[18px]  font-extralight'
  variants={textAnimation}
      initial="hidden"
      animate="visible"
>
 <p>“Create Your Own Fairytale.” </p>
 
 <p className='text-white  2xl:text-[18px]   xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[16px] xs:text-[14px] 
 tracking-widest
  leading-7 content-center mt-3 mb-3'>Are you ready to join an exclusive club where
   you can experience life <br/> like never before? Our Premium Private Concierge 
   Services makes it possible!<br/>  Reserve your dream lifestyle today and 
   indulge in unparalleled luxury.</p>

                              <Button title="Get Access" onClick={handlePage}/>
  </motion.p>

  
  
  

  {/* <motion.button 
  onClick={handlePage}
  className={` text-white px-10 py-3 mt-10 font-Gilda text-[22px] border-2 border-white hover:bg-white hover:text-black hover:transition hover:transform hover:scale-110 hover:ease-out hover:duration-500 `}
  initial={{opacity:0,y:-100}}
  animate={{opacity:1,y:0}}
  transition={{duration:1.5,delay:1.9}}
  >
    Contact Us
    </motion.button> */}
    
    
    
</div>
</div>
</>
  );
  
};

export default Home;