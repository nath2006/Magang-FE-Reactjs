import React from "react";
import './styles.css';

import CarouselSection from "./CardSection/CardSection";


const wordTestSection = ( ) => {
    return (
        <div className="word pt-0 pb-[50px] bg-[#ffc628] relative">
            <div className="word-section relative z-10">
                <div className="">

                        <div className="text my-8 px-3 text-center">
                                <h2 className="ourPartnersWords"> 
                                    Our-Partner
                                    <span className="text-[#422e87]"> words</span>
                                </h2>
                        </div>
                        
  
                    <div className="">
                        <CarouselSection/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default wordTestSection;