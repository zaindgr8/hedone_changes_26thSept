import React,{useState} from 'react';
import {  motion , useAnimation} from "framer-motion"
import { CiMenuFries,CiCircleRemove } from 'react-icons/ci';
import useScrollPosition from '../../Hooks/useScrollPosition';
import hlogo from "../../Assets/hlogo.png"
import hlogo2 from "../../Assets/hlogo2.png"

console.log("Made By We International Digital Marketing - Zain Ul Abideen Baloch")
const Header = () => {
  const { scrollY } = useScrollPosition()
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  const openMenu = () => {
    setIsOpen(true);
    controls.start({ x: 0 });
  };

  const closeMenu = () => {
    setIsOpen(false);
    controls.start({ x: '100%' });
  };

  const pageName = ["Home", "MemberShips", "Services","About", "Testimonials", "Contact"] 

  const handlePage = (x) => {
    closeMenu();
    
    // Replace 'Services' with the actual id of the target div you want to scroll to
    const targetElement = document.getElementById(x);
  
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element smoothly
    }
  };


  return (
    <>
    {scrollY !== 0 ? 
     <div id="header" className='z-20 w-full h-[70px] bg-neutral-950 fixed top-0 left-0 right-0'
     >
        <div className='h-full flex justify-between mx-auto items-center max-w-[90%]'>
          <img src={hlogo2} width={250}  alt="Hedone Access" className=''/>
          
          <CiMenuFries className='text-white text-[35px] hover:cursor-pointer' onClick={openMenu}/>
        </div>
     </div>

     :

     <div className='h-[110px] flex bg-transparent justify-between 
     mx-auto items-center max-w-[90%] fixed top-0 left-0 right-0 z-10 py-5'
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{duration:1.3,delay:0.8}}
     >
       <img src={hlogo} width="100px" height="100px" /> 
        <CiMenuFries className='text-white text-[40px] hover:cursor-pointer' onClick={openMenu}/>
      </div>
    }
    
    {openMenu && (
      <motion.div className ="border-white border-2 top-0 right-0 bottom-0 w-[250px] h-full xs:w-full bg-black text-white fixed z-20 flex flex-col items-center justify-center p-10"
      initial={{ x: '100%' }}
      animate={controls}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <CiCircleRemove className='text-white absolute top-10 text-[40px] rounded-[50%] p-2 hover:cursor-pointer border-2' onClick={closeMenu}/>
        {pageName.map((x)=>(
          <p className='font-Montserrat hover:underline font-semibold leading-10 hover:cursor-pointer' onClick={()=>handlePage(x)}>
{x}
          </p>
        ))}
      </motion.div>
      )}
    </>
  );
};

export default Header;
