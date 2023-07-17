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
            <div className="container flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 ">
                    <div className="flex flex-wrap mt-5 gap-4 md:ml-40 md:gap-8">

                        <div className="col-span-4 elative z-10 ">
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

                        <div className="col-span-4 mt-5 z-10">
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

                <div className="text-section w-full px-5 mt-8 md:w-1/2 md:px-0 md:mt-0">
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
