import React from "react";

import './styles.css';
import CardOne from './partials/CardOne/CardOne';
import CardTwo from './partials/CardTwo/CardTwo';

const SectionServices = () => {
  return (
    <div className="section-Services pt-100 pb-100 relativ">
        <div className="container mx-auto px-4">
                <div className="row w-1/3">
                    <h5>
                        Explore
                        <span className="text-green-400"> Services</span>
                    </h5>
                    <p>
                    Squadio is an exclusive network of top-notch softaware developers, deisgners, data experts, product managers and project managers in the world. 
                    </p>
                </div>  

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
              <CardOne />
              <CardTwo />
            </div>
        </div>
    </div>
  )
}

export default SectionServices;
