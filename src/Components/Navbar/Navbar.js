import React from 'react';
import Logo from '../../asset/img/logo.svg';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="Navbar-wrapper flex items-center justify-between text-white">
        <div className="Navbar flex items-center">
          <img src={Logo} alt="Logo" className="Logo" width="120"/>
        </div>
        <div className="Left-nav flex items-center">
          <ul className="flex space-x-4"> 
            <li>
              <a href="/" className="text-white hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-gray-300">Services</a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-gray-300">How it works</a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-gray-300">Partners</a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-gray-300">Success stories</a>
            </li>
          </ul>
        </div>
        <div className='Right-nav flex justify-end'>
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
