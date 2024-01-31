import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import { navLinks } from '../constants';

import { logo, menu, close } from "../assets";
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false)
  return (
    <nav
      className={`${styles.paddingX} 
      w-full flex items-center 
      py-5 fixed top-0 
      z-20 bg-[#7B8DEA] rounded-[0px_0px_26px_26px]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain'/>
          <p className=" text-slate-950 text-[28px] font-bold cursor-pointer flex">eX-Well</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li 
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : " text-black"
              } hover:text-[#58E186] text-[25px]
              font-medium cursor-pointer
              `}
              onClick={() => { setActive(link.title)}} 
            >
              <a href={`${link.id}`}>{link.title}</a>
            </li>
          ))}


        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] 
            object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}

          />
          <div className={`${!toggle ?  'hidden' :'flex'} 
          p-6 bg-gradient absolute top-20 right-0 mx-4 
          my-2 min-w-[140px] z-10 rounded-xl
          }`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((link) => (
            <li 
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-black"
              } text-[#58E186] font-poppins
              font-medium text-[16px]
              `}
              onClick={() => { 
                setToggle(!toggle);
                setActive(link.title);
                }} 
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}


        </ul>
          </div>
        </div>

      </div>

    </nav>
  )
}

export default Navbar