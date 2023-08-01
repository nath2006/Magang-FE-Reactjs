import React from 'react';
import Navbar from './Navbar/NavbarDua';
import HeroSection from './HeroSection/HeroSection';
import './styles.css'

export default function Home() {
  return (
    <div className='landing-wrapper h-screen bg-[#422e87]'>

      <Navbar /> 

      <HeroSection />
      
      </div>
  );
}