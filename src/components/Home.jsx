import React from "react"
import { Link } from "react-router-dom"
import NavBar from "./NavBar"

const Home = () => {
  return (
    <div className='bg-[#070A0A] w-full h-screen'>
      <NavBar />
      <span className='flex ml-10 pt-20 italic text-[#ffc225]'>&lt;home&gt;</span>
      <div className='mt-10 ml-20'>
        <h1 className='text-2xl text-[#ffc225]'>
          Hi, my name is<span className='pl-1'>Noval</span>
        </h1>
        <p className='text-4xl text-[#ffc225]'>I`m excited to learn about your project. Ready to get started?</p>
        <button className='text-[#ffc225] border-2 border-slate-700 h-10 w-32 flex justify-center items-center'>started</button>
      </div>
      <span className='flex -mt-20 pl-10 pt-96 italic text-[#ffc225]'>&lt;/ home&gt;</span>
    </div>
  )
}

export default Home
