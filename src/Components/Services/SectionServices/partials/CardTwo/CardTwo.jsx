import React from "react";
import '../css/styles.css'

import svg from '../../../../../asset/img/img-svg/svg-2.png';

const CardTwo = () => {
    return (
    <div className="Card-Two">
        <div className="col">
            <div className="wrapper-card">
                <span className="serv-icon">
                    <img src={svg} alt="img-2"></img>
                </span>
                <h3>Squad as a service</h3>
                <p> 
                get matched with vetted engineers from around the
                world and hire them without the overhead
                </p>
            </div>
        </div>
    </div>
    )
}



export default CardTwo;