import React from 'react'
import { FaAtlassian } from "react-icons/fa";
import Logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='fixed w-full flex justify-between h-[70px] bg-[#05445E] px-4 text-white'>
        <img src={Logo} alt='logo image'/>
    </div>
  )
}

export default Navbar