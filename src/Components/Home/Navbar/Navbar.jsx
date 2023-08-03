import { useState} from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";


import Logo from '../../../asset/img/logo.svg';
import "./Navbar.css"

const Navbar= () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  let Links = [
    {name:"Home", link:"/"},
    {name:"Services", link:"#our-services"},
    {name:"How it works", link:"#steps"},
    {name:"Partners", link:"#partner-section"},
    {name:"Success stories", link:"#success-story"}
  ]

  const handleLinkClick = () => {
    // Set toggleMenu to false when a link is clicked
    setToggleMenu(false);
  };

  return (
      <nav className="Navbar-wrappers text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-8 lg:gap-4 my-0 lg:my-2 lg:mx-auto xl:gap-12 ">
              {/* logo */}
              <div className="Navbar pr-1 ">
                <img src={Logo} alt="Logo" className="Logo" width="120"/>
              </div>
              {/* primary */}
              <div className="hidden lg:flex lg:gap-4 xl:gap-8 ">
              {
                Links.map((link) => (
                  <a key={link.name} href={link.link} onClick={handleLinkClick}>
                    {link.name}
                  </a>
                ))
              }
              </div>

                <div className="Right-nav">
                    <button className="btn-one px-4 py-2 bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-bold rounded">
                        Build Your Team
                    </button>
                    <button className="px-4 py-4">
                      <span className="border px-4 py-2  border-yellow-300 text-yellow-300 hover:bg-yellow-400 rounded  w-full">Apply as a talent</span>
                    </button>
                </div>
                <ul className="Right-li">
                  <li className="">
                    <a href="/" className="text-white hover:text-gray-300">Login</a>
                  </li>
                </ul>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
            
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center absolute top-8 right-2">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />                      
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full bg-white overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-50%" 
          }`}
        >
          <div className="px-8 py-4">
            <div className="flex flex-col gap-8 font-bold text-gray-900 tracking-wider">
            {
                Links.map((link) => (
                    <a key={link.name} href={link.link} onClick={handleLinkClick}>
                      {link.name}
                    </a>
                ))
              }
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button className="btn-one px-4 py-4 bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-bold rounded">
                  Build Your Team
              </button>
              <button className="px-0 py-4">
                <span className="border px-4 py-2  border-yellow-300 text-yellow-300 hover:bg-yellow-400 rounded  w-full">Apply as a talent</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;