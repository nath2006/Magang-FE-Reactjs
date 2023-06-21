import React from 'react';
import Logo from '../asset/img/logo.svg';

function Navbar() {
  return (
    <nav className="Navbar flex items-center justify-between p-4 text-white">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="Logo" width="120"/>
      </div>
      <ul className="flex space-x-4 justify-center"> {/* Menambahkan kelas justify-center */}
        <li>
          <a href="/" className="text-white hover:text-gray-300">Home</a>
        </li>
        <li>
          <a href="/about" className="text-white hover:text-gray-300">About</a>
        </li>
        <li>
          <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
