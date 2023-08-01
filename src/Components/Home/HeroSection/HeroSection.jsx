import React from "react";
import Talent from '../../../asset/img/talents.png';
import './styles.css'

const HeroSection = () => {
  return (
    <div className="Hero-wrapper flex flex-wrap items-center justify-between">  
      <div className="Left-content w-full lg:w-1/2 order-2 lg:order-1">
        <h1 className="Heading-1 font-bold text-white">
          <span>
          <span className="text-yellow-300">Build</span> Your Tech Team
          </span>
          <br></br>
          <span className="second-heading block text-white" >With Remote Top-Notch Talents</span>
        </h1>
          <button className="btn-one px-4 py-2 my-4 bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-bold rounded">
            Hire Tech Team
          </button>
          <p className="Paragrahp text-white ">
            Looking for job instead? 
              <span className="Paragrahp-link">
                <a href="/apply" className="px-2 text-yellow-300cursor-pointer underline text-base ">
                  Apply as a talent
                </a>
              </span>
          </p>
      </div>

      <div className="Right-content w-full lg:w-1/2  order-1 lg:order-2">
        <img src={Talent} alt="Logo" className="Talent" width="500px" />
      </div>
    </div>
  );
};

export default HeroSection;
