import React from "react";
import './styles.css';

import sabbarLogo from '../../asset/img/logo-partner/sabbar-ar.svg';
import monshaatLogo from '../../asset/img/logo-partner/monshaat.png';
import hasselLogo from '../../asset/img/logo-partner/hassel-logo.png';
import resalLogo from '../../asset/img/logo-partner/resal-logo.png';
import mallerLogo from '../../asset/img/logo-partner/maller-logo.png';
import taniaLogo from '../../asset/img/logo-partner/tania-logo.png';
import sapqLogo from '../../asset/img/logo-partner/sapq-logo.png';
import hrcomLogo from '../../asset/img/logo-partner/hrcom-logo.png';
import lastPath from '../../asset/img/last-path-shape.svg';

const PartnerSection = () => {
    return (
        <div id="parner-div" className="partner-div pt-100 pb-100">    
            <div className="container">
                <div className="row align-items-center">
                    <div className="w-1/2 md:w-full">
                        <div className="flex flex-wrap -mx-2">
                            
                            <div className="col-span-4 md:col-span-5 mt-5 relative z-10 flex items-end">
                                <div className="logo-div mb-4">
                                    <img src={sabbarLogo} alt="siems-logo" className="img-fluid"/> 
                                </div>
                                <div className="logo-div mb-4 ">
                                    <img src={monshaatLogo} alt="siems-logo" className="img-fluid"/> 
                                </div>
                            </div>

                            <div className="col-span-4 md:col-span-3 z-10">
                                <div className="logo-div mb-4">
                                    <img src={hasselLogo} alt="siems-logo" className="img-fluid"/> 
                                </div>
                                <div className="logo-div mb-4">
                                    <img src={resalLogo} alt="siems-logo" className="img-fluid"/> 
                                </div>
                                <div className="logo-div mb-4">
                                    <img src={mallerLogo} alt="siems-logo" className="img-fluid"/> 
                                </div>
                                <div className="logo-div mb-4">
                                    <img src={taniaLogo} alt="siems-logo" className="img-fluid"/> 
                                </div>
                            </div>

                            <div className="col-span-4 md:col-span-3 mt-5 z-10">
                                    <div className="logo-div mb-4">
                                        <img src={sapqLogo} alt="siems-logo" className="img-fluid"/> 
                                    </div>
                                    <div className="logo-div mb-4">
                                        <img src={hrcomLogo} alt="siems-logo" className="img-fluid"/> 
                                    </div>
                            </div>
                        </div>
                        <div className="absolute-last">
                                <img src={lastPath} alt="lasth-path-logo" width="600px"/>
                        </div>
                        <div className="w-1/2 md:w-full">
                            <h4> We're proud of how far we've come, and how how more we'll go! </h4>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PartnerSection;
