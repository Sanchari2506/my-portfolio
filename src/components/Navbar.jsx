import React, { useState } from 'react'
import { FaAtlassian } from "react-icons/fa";
import { FiAlignJustify, FiX } from "react-icons/fi";
import Logo from '../assets/logo.png'
const Navbar = () => {
  // set states 
  const [nav, setNav] = useState(false)
  const toggleNav = () => {
    setNav(!nav)
    console.log(nav)
  }


  return (
    <div className='fixed w-full flex justify-between h-[70px] bg-[#020617] px-4 z-50 nav-container'>
      {/* logo  */}
      <div className='logo-container'>
        <a href='/'><img src={Logo} alt='logo image' style={{ width: '90px' }} /></a>
      </div>

      {/* dekstop menu  */}
      <div className='desktop-menu-container hidden md:flex items-center'>
        <ul className='desktop-menu flex flex-wrap'>
          <li className='d-menu-item'><a className='text-white hover:underline hover:text-[#EAB308]' href='#hero-section'>Home</a></li>
          <li className='d-menu-item'><a className='text-white hover:underline hover:text-[#EAB308]' href="#about-section">About</a></li>
          <li className='d-menu-item'><a className='text-white hover:underline hover:text-[#EAB308]' href='#skill-section'>Skills</a></li>
          <li className='d-menu-item'><a className='text-white hover:underline hover:text-[#EAB308]' href='#services-section'>Works</a></li>
          <li className='d-menu-item'><a className='text-white hover:underline hover:text-[#EAB308]' href='#experience-section'>Experience</a></li>
          <li className='d-menu-item'><a className='text-white hover:underline hover:text-[#EAB308]' href='#contact-section'>Contact</a></li>
        </ul>
      </div>


      {/* hamberger icon  */}
      <div className='hamberger-menu-container md:hidden z-20 flex items-center text-[#ffffff]' onClick={toggleNav}>
        {!nav ? <FiAlignJustify className='text-3xl'/> : <FiX className='text-3xl'/>}
      </div>

      {/* mobile menu  */}
      <div className={!nav ? 'hidden' : 'mobile-menu-container md:hidden absolute top-0 left-0 w-full bg-[#020617] pt-4'}>
        <ul className='mobile-menu flex flex-col items-center justify-center text-[#9CA3AF]'>
          <li className='m-menu-item'><a className='text-xl text-white hover:underline hover:text-[#EAB308]' href='#hero-section'>Home</a></li>
          <li className='m-menu-item'><a className='text-xl text-white hover:underline hover:text-[#EAB308]' href="#about-section">About</a></li>
          <li className='m-menu-item'><a className='text-xl text-white hover:underline hover:text-[#EAB308]' href='#skill-section'>Skills</a></li>
          <li className='m-menu-item'><a className='text-xl text-white hover:underline hover:text-[#EAB308]' href='#services-section'>Works</a></li>
          <li className='m-menu-item'><a className='text-xl text-white hover:underline hover:text-[#EAB308]' href='#experience-section'>Experience</a></li>
          <li className='m-menu-item'><a className='text-xl text-white hover:underline hover:text-[#EAB308]' href='#contact-section'>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar