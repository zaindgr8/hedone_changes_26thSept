import React, { useState } from 'react';
import Button1 from '../Home/button1.js';
import hlogo from "../../Assets/hlogo.png";

function Boxes({ title, description, image, bullets }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const targetElement = document.getElementById("Contact");

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element smoothly
    }
  }

  // Convert the bullets prop into an array if it's not already an array
  const bulletPoints = Array.isArray(bullets) ? bullets : [bullets];

  return (
    <div
      className={`w-full col-span-1 border border-gray-300 shadow-lg 
      flex-col ml-15 text-center rounded-lg transition-transform duration-300 ${
        isHovered ? 'transform scale-105' : 'transform scale-100'
      } relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative group">
        <img
          src={image}
          alt="Elegant Box"
          className="w-full h-[300px] object-cover rounded-t-lg"
        />
        <div className="flex-col p-4 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-60 rounded-t-lg">
          <div className="text-white text-sm font-Montserrat ">
          <ul className='flex flex-col justify-center items-center'>
  <li>
    <img src={hlogo} width={100} alt="Logo" />
  </li>
  {bulletPoints.map((bullet, index) => (
    <li key={index}>{bullet}</li>
  ))}
</ul>

          </div>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 font-Cinzel">{title}</h2>
        <p className="text-gray-700 mb-4 font-Montserrat text-sm">
          {description}
        </p>
        <Button1 title="Get Access" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Boxes;
