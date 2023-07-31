import React, {useState} from 'react';
import Logo from '../../../asset/img/logo.svg';

import './styles.css';

const Navbar = () => {

  let Links = [
    {name:"Home", link:"/"},
    {name:"Services", link:"/"},
    {name:"How it works", link:"/"},
    {name:"Partners", links:"/"},
    {name:"Success stories", links:"/"}
  ]

  let [open,setOpen]=useState(false)

  return (
    <nav className="Navbar-wrapper flex items-center justify-between text-white">

      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
          <div className="Navbar md:flex  items-center">
            <img src={Logo} alt="Logo" className="Logo" width="120"/>
          </div>
          <div className="Left-nav flex items-center">
            <ul className={` lg:space-x-4 xl:space-x-8 md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}> 
              {
                Links.map((link) => (
                  <li>
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='Right-nav flex flex-wrap justify-end'>
            <button className="btn-one px-4 py-2 bg-yellow-500 text-gray-900 font-bold rounded">
              Build Your Team
            </button>
            <button className="px-4 py-2">
              <span className="border px-4 py-2  border-yellow-500 text-yellow-500 rounded  w-full">Apply as a talent</span>
            </button>
            <ul>
              <li className=" Right-li flex justify-end ml-4">
              <a href="/" className="text-white hover:text-gray-300">Login</a>
              </li>
            </ul>
          </div>
    </nav>
  );
}

export default Navbar;
