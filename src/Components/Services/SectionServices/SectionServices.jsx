import React from "react";

import './styles.css';
import CardOne from './partials/CardOne/CardOne';
import CardTwo from './partials/CardTwo/CardTwo';
import CardThird from './partials/CardThrid/CardThrid';

const SectionServices = () => {
  return (
    <div className="section-Services relativ">
        <div className="container mx-auto px-4">
                <div className="row sm:row w-full  md:row-2/5 lg:row-2/5 ">
                    <h2>
                        Explore
                        <span className="text-green-400"> Services</span>
                    </h2>
                    <p>
                    Squadio is an exclusive network of top-notch softaware <br></br> 
                    developers, deisgners, data experts, product managers and<br></br> 
                    project managers in the world. 
                    </p>
                </div>  

            <div className="service-items p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
              <CardOne />
              <CardTwo />
              <CardThird />
            </div>
        </div>
    </div>
  )
}

export default SectionServices;
