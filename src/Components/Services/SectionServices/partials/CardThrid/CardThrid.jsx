import React from "react";
import '../css/styles.css'

import svg from '../../../../../asset/img/img-svg/svg-3.png';

const CardThird= () => {
    return (
    <div className="Card-Thrid shadow-xl">
        <div className="col">
            <div className="wrapper-card">
                <span className="serv-icon">
                    <img src={svg} alt="img-3"></img>
                </span>
                <h3>Creative lab</h3>
                <p> 
                we provide you with a project manager and a product designer to start working on 
                your product's idea with the most suitable methodology and provide you with a prototype
                </p>
            </div>
        </div>
    </div>
    )
}



export default CardThird;