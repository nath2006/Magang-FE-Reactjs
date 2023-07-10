import React from "react";

import './styles.css';

import sabbarLogo from '../../asset/img/logo-partner/sabbar-ar.svg';
import monshaatLogo from '../../asset/img/logo-partner/monshaat.png';

const PartnerSection = () => {
    return (
    <div  id="parner-div" className="partner-div pt-100 pb-100">    
        <div className="container">
            <div className="row align-items-center">
                <div class="lg:col-span-6 md:col-span-12 lg:order-first order-last relative min-h-[600px] text-center">
                    <div class="row">
                        <div class="col-span-4 md:col-span-5 mt-5 relative z-10 flex items-end">
                            <div className="logo-div mb-4">
                                <img src={sabbarLogo} alt="siems-logo" className="img-fluid"/> 
                            </div>
                            <div className="logo-div mb-4 float-right w-full">
                                <img src={monshaatLogo} alt="siems-logo" className="img-fluid"/> 
                            </div>
                        </div>

                    </div>

                    <div class="lg:w-1/2 md:w-full">
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}

export default PartnerSection;