import React,{useEffect} from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Components/Home/Home"
import Header from './Components/Header/Header';
import MemberShip from './Components/MemberShip/MemberShip';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from "./Components/Contact/Contact.js"

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className=''>
      <Header/>
      <Home/>
      <MemberShip/>
      <Services/>
      <About/>
       <Testimonials/>
     <Contact/>
   </div>

  );
}

export default App;
