import React from "react";
import './styles.css';

import svgOne from '../../../asset/img/img-svg/svg-1.png';

const SectionServices = () => {
  return (
    <div className="section-Services py-10 bg-gray-100">
        <div className="container mx-auto px-4">
            <div className="flex items-center">
                <div className="row w-1/3">
                    <h5>
                        Explore
                        <span className="text-green-400"> Services</span>
                    </h5>
                    <p>
                    Squadio is an exclusive network of top-notch softaware developers, deisgners, data experts, product managers and project managers in the world. 
                    </p>
                </div>  

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <ul className="services-items flex flex-wrap">
                    <li className="col">
                        <div>
                            <span className="serv-icon">
                                <img src={svgOne}></img>
                            </span>
                            <h3>CTO as a services</h3>
                            <p> 
                                Hire a chief Technology officier in a 
                                short term or long term basis to lead your 
                                devlopmenet teams and develop your technology strategy 
                            </p>
                        </div>
                    </li>

                    
                </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SectionServices;
