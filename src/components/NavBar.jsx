import React from "react"
import { NavLink } from "react-router-dom"
import imgLogo from "../assets/logoNopell.png"
import { AiOutlineInstagram, AiOutlineMinus } from "react-icons/ai"
import { TbBrandGithub } from "react-icons/tb"
import { FiLinkedin, FiTwitter } from "react-icons/fi"

const NavBar = () => {
  return (
    <div className='w-full h-screen absolute'>
      {/* NavBar section */}
      <div className='bg-[#070A0A] text-white h-12 flex items-center justify-between'>
        <img className='flex pl-10' width={80} src={imgLogo} alt='logoNopell' />
        <nav className='flex justify-end'>
          <NavLink className='pr-10 hover:text-[#ffc225] hover:opacity-70' to='/'>
            Home
          </NavLink>
          <NavLink className='pr-10 hover:text-[#ffc225] hover:opacity-70' to='/about'>
            About
          </NavLink>
          <NavLink className='pr-10 hover:text-[#ffc225] hover:opacity-70' to='/experience'>
            Experience
          </NavLink>
          <NavLink className='pr-10 hover:text-[#ffc225] hover:opacity-70' to='/contact'>
            Contact
          </NavLink>
        </nav>
      </div>
      <div className='text-[#ffc225] gap-2 ml-5 pt-96'>
        <TbBrandGithub className='opacity-60 hover:opacity-100' />
        <FiLinkedin className='opacity-60 hover:opacity-100' />
        <FiTwitter className='opacity-60 hover:opacity-100' />
        <AiOutlineInstagram className='opacity-60 hover:opacity-100' />
        <div className='bg-[#ffc225] opacity-60 h-20 w-1 ml-1'></div>
      </div>
    </div>
  )
}

export default NavBar
