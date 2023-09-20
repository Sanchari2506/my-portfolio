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
    <div className='fixed w-full flex justify-between h-[70px] bg-[#05445E] px-4 text-white'>
      {/* logo  */}
      <div className='logo-container'>
        <img src={Logo} alt='logo image' style={{ width: '90px' }} />
      </div>

      {/* dekstop menu  */}
      <div className='desktop-menu-container hidden md:flex items-center'>
        <ul className='desktop-menu flex flex-wrap'>
          <li className='d-menu-item'>Home</li>
          <li className='d-menu-item'>About</li>
          <li className='d-menu-item'>Skills</li>
          <li className='d-menu-item'>Works</li>
          <li className='d-menu-item'>Contact</li>
        </ul>
      </div>


      {/* hamberger icon  */}
      <div className='hamberger-menu-container md:hidden z-20 flex items-center' onClick={toggleNav}>
        {!nav ? <FiAlignJustify /> : <FiX />}
      </div>

      {/* mobile menu  */}
      <div className={!nav ? 'hidden' : 'mobile-menu-container md:hidden absolute top-0 left-0 w-full bg-[#05445E] pt-4'}>
        <ul className='mobile-menu flex flex-col items-center justify-center'>
          <li className='m-menu-item'>Home</li>
          <li className='m-menu-item'>About</li>
          <li className='m-menu-item'>Skills</li>
          <li className='m-menu-item'>Works</li>
          <li className='m-menu-item'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar