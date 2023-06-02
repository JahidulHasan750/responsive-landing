import React from 'react';
import { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav]= useState(true);


    const handleNav=()=>{
        setNav(!nav);
    }

  return (
    <div className='flex justify-center items-center h-24 max-w-[1240px] mx-auto px-4  text-white'>
        <h1 className=' w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 hover:cursor-pointer'>
            <Link to='home'>Home</Link></li>
            <li className='p-4 hover:cursor-pointer'><Link to='company'>Company</Link></li>
            <li className='p-4 hover:cursor-pointer'><Link to='resources'>Resources</Link> </li>
            <li className='p-4 hover:cursor-pointer'><Link to='about'>About</Link></li>
            <li className='p-4 hover:cursor-pointer'><Link to='contact'>Contact</Link></li>
        </ul>
        <div onClick={handleNav} className=' block md:hidden'>
        {!nav ? <AiOutlineClose size={24}></AiOutlineClose>: <AiOutlineMenu size={26}></AiOutlineMenu>}
            
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 bg-gray-900 ease-in-out duration-500 ' : 'fixed left-[100%]'}>
        <h1 className=' w-full text-3xl font-bold text-[#00df9a] m-4'>React.</h1>
            <ul className=' uppercase p-4 '>
            <li className='p-4 border-b border-gray-600'  >Home</li>
            <li className='p-4 border-b  border-gray-600'>Company</li>
            <li className='p-4  border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b  border-gray-600'>About</li>
            <li className='p-4 '>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar