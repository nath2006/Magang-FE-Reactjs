import React from "react";
import '../css/styles.css'

import svg from '../../../../../asset/img/img-svg/svg-1.png';

const CardOne = () => {
    return (
    <div className="Card-One">
        <div className="col">
            <div className="wrapper-card">
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
        </div>
    </div>
    )
}



export default CardOne;