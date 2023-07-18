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
        <div id="partner-div" className="partner-div px-100">
            <div className="container mt-5 px-5 logo-section flex flex-warp-reverse items-center flex-col lg:flex-row">
                <div className="lg:w-1/2 ">
                    <div className="flex flex-wrap-wrap mt-5 gap-4 lg:ml-20 lg:gap-4">

                        <div className="col-span-4  z-10 mt-10">
                            <div className="logo-div mb-4">
                                <img src={sabbarLogo} alt="siems-logo" className="img-fluid"/> 
                            </div>
                            <div className="logo-div mb-4 ">
                                <img src={monshaatLogo} alt="siems-logo" className="img-fluid"/> 
                            </div>
                        </div>

                        <div className="col-span-4 z-10">
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

                        <div className="col-span-4 mt-10 z-10 ">
                            <div className="logo-div mb-4">
                                <img src={sapqLogo} alt="siems-logo" className="img-fluid"/> 
                            </div>
                            <div className="logo-div mb-4">
                                <img src={hrcomLogo} alt="siems-logo" className="img-fluid"/> 
                            </div>
                        </div>

                        <div className="absolute-last">
                                <img src={lastPath} alt="lasth-path-logo" width="600px"/>
                        </div>

                    </div>
                </div>

                <div className="px-5 mt-8 lg:w-1/2 ml-2 lg:mt-0 lg:ml-5">
                    <h2> We're proud of how far we've come, and how how more we'll go! </h2>
                    <p> squadio is a reliable technical partner of more than 50 entities of governmental institutions, enterprises and thriving startups.
                    </p>
                    <div className="flex">
                        <div className="w-1/4">
                            <div className="count-box">
                                <span className="count">10K+</span>
                                <h5 className="count-name">Talent</h5>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <div className="count-box">
                                <span className="count">300</span>
                                <h5 className="count-name">Squad</h5>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <div className="count-box">
                                <span className="count">125+</span>
                                <h5 className="count-name">Country</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerSection;
