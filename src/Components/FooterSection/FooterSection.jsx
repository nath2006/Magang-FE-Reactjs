import React from "react";
import Subfooter from "./Subfooter/subfooter";

import logoFooter from "../../asset/img/footer-logo.svg";
import facebookLogo from "../../asset/img/facebook.svg";
import linkedinLogo from "../../asset/img/linkedin.svg";
import instagramLogo from "../../asset/img/instagram.svg";
import twitterLogo from "../../asset/img/twitter.svg";

import './styles.css';

const FooterSection = () => {
    return (
        <footer className="landing-footer bg-[#422e87] pt-20">
                <div className="container flex flex-col md:flex-row flex-warp justify-center pl-2">
                    <div className="lg:w-1/4 w-full ">
                        <a className="flex items-center mb-1">
                            <img src={logoFooter} className="logo-footer mb-1" width="100px"/>
                        </a>
                        <p className="text-footer">
                            We form dedicated squads of our top-notch engineers and tech experts to build your product up digitally 
                        </p>
                    </div>


                    <div className="md:w-[100px] sm:w-[30px]"></div>
                    
                    <div className="quick-link-section lg:w-1/4 md:w-full text-white">
                        <h5 className="mb-0.5 text-yellow-300">
                            Quick Links
                        </h5>
                        <ul className="nav flex flex-col mb-0.5">
                            <li className="nav-item mb-0.5">
                                <a className="nav-link p-0 cursor-pointer">
                                    Hire Tech Team
                                </a>
                            </li>
                            <li className="nav-item mb-0.5">
                                <a className="nav-link p-0 cursor-pointer">
                                    Apply as a talent
                                </a>
                            </li>
                        </ul>
                    </div>

                <div className="lg:w-1/4 md:lg-1/4 w-full">
                    <ul className="social-links flex">
                        <li className="flex items-center justify-center"> 
                            <a href="/">
                                <img src={facebookLogo} className="social-logo" alt="facebook-logo"/>
                            </a>
                        </li>
                        <li className="flex items-center justify-center"> 
                            <a>
                                <img src={twitterLogo} className="social-logo" alt="twitter-logo"/>
                            </a>
                        </li>
                        <li className="flex items-center justify-center"> 
                            <a>
                                <img src={instagramLogo} className="social-logo" alt="instagram-logo"/>
                            </a>
                        </li>
                        <li className="flex items-center justify-center"> 
                            <a>
                                <img src={linkedinLogo} className="social-logo" alt="linkedin-logo"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <Subfooter />

        </footer>
    )
}

export default FooterSection;