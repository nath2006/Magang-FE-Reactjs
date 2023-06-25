import React from 'react';
import Navbar from './Navbar/Navbar';
import HeroSection from './HeroSection/HeroSection';

export default function Home() {
  return (
    <div className='landing-wrapper h-screen bg-[#422e87]'>

      <Navbar /> 

      <HeroSection />
      
      </div>
  );
}