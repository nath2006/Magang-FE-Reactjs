import React from "react";
import Talent from '../../asset/img/talents.png';
import './style.css'

const HeroSection = () => {
  return (
    <div className="Hero-wrapper flex items-center justify-between">
      <div className="Left-content w-1/2">
        <h1 className="Heading-1 font-bold text-white">
          <span className="text-yellow-400">Build</span> Your Team
          <br></br>
          <span className="second-heading block text-white" >With Remote Top-Notch Talents</span>
        </h1>
    <button className="btn-one px-4 py-2 my-4 bg-yellow-500 text-gray-900 font-bold rounded">
            Build Your Team
          </button>
      </div>

      <div className="Right-content w-1/2">
        <img src={Talent} alt="Logo" className="Talent" width="500px" />
      </div>
    </div>
  );
};

export default HeroSection;
