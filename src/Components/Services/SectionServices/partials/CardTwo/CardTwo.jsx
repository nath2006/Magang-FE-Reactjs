import React from "react";
import './styles.css'

import svg from '../../../../../asset/img/img-svg/svg-2.png';

const CardOne = () => {
    return (
        <ul className="service-items">
            <li className="col">
                <div>
                    <span className="serv-icon">
                        <img src={svg} alt="img-1"></img>
                    </span>
                    <h3>CTO as a services</h3>
                    <p> 
                        Hire a chief Technology officier in a 
                        short term or long term basis to lead your 
                        devlopmenet teams and develop your technology strategy 
                    </p>
                </div>
            </li>
        </ul>
    )
}

export default CardOne;