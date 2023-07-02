import React from "react";

import './styles.css';
import logoDua from '../../asset/img/logo-2.svg';

const Steps = () => {
    return (
        <div>
            <div className="Steps py-16 bg-[#422e87]">
                <div className="container">
                    <div className="row">
                        <h4 className="font-medium text-white text-center">
                            How to
                            <span className="text-yellow-400"> Hire </span>
                            Through
                            <img src={logoDua} alt="logo-steps-section" width="120"></img>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps;