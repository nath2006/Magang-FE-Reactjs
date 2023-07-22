import React from "react";
import logoFooter from "../../asset/img/footer-logo.svg";

import './styles.css';

const FooterSection = () => {
    return (
        <div className="landing-footer bg-[#422e87] pt-6">
                <div className="container flex flex-warp align-center">
                    <div className="w-1/4">
                        <a>
                             <img src={logoFooter} className="logo-footer mb-1" width="100px"/>
                        </a>
                    </div>
                </div>
        </div>
    )
}

export default FooterSection;