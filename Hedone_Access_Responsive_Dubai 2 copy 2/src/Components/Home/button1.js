import React, { useEffect, useRef } from 'react';

function Button1({ title , onClick}) {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;

    if (btn) {
      btn.onmousemove = function (e) {
        const x = e.pageX - btn.offsetLeft;
        const y = e.pageY - btn.offsetTop;

        btn.style.setProperty("--x", x + "px");
        btn.style.setProperty("--y", y + "px");
      };
    }
  }, []);

  return (
    <div
    onClick={onClick}
    className='btn-1 cursor-pointer relative overflow-hidden inline-flex px-3 py-1 bg-gray-200 
     text-sm tracking-widest font-Cinzel
    before:absolute before:w-0
    before:top-[var(--y)] before:left-[var(--x)] before:h-0
    before:rounded-full before:bg-black text-black border-black
    hover:before:w-[400px] hover:before:h-[400px] hover:text-white
    before:translate-x-[-50%] before:translate-y-[-50%] hover:before:scale-110
    rounded-3xl bg-opacity-10 border-2'>
     <span className="inline-block z-10 relative">{title}</span>
    </div>
  );
}

export default Button1;
