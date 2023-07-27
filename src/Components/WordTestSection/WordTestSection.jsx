import React from "react";
import './styles.css';

import CarouselSection from "./CarouselSection/CarouselSection";


const wordTestSection = ( ) => {
    return (
        <div className="word py-[100px] bg-[#ffc628] relative">
            <div className="word-section relative z-10">
                <div className="flex flex-warp align-center">

                        <div className="w-full md:w-1/4">
                                <h2 className="ourPartnersWords"> 
                                    Our-Partner
                                    <br/>
                                    words
                                </h2>
                        </div>
                        
  
                    <div className="w-full md:w-3/4">
                        <CarouselSection/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default wordTestSection;