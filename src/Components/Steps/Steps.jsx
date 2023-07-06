import React from "react";

import './styles.css';
import logoDua from '../../asset/img/logo-2.svg';
import RightArrow from '../../asset/img/Arrow_Right.svg';

const Steps = () => {
    return (
        <div>
            <div className="Steps py-16 bg-[#422e87]">
                <div className="container mx-auto px-4">
                    <div className="row">
                        <h4 className="font-medium text-white text-center">
                            How to
                            <span className="text-yellow-400"> Hire </span>
                            Through
                            <img src={logoDua} alt="logo-steps-section" width="120"></img>
                        </h4>
                    </div>
                        <ul className="grid mx-auto text-left steps-ul p-3 pt-50 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                            <li className="col">
                                <span className="step-number">1</span>
                                <h4 className="text-white">Brief your Business:
                                <div className="line-shape"></div>
                                </h4>
                                <p>After you fill out the 
                                        <a href="" className="text-white"> build your team form,</a>
                                        a memeber of our matching team will reach out to you at your selected time-slot; to fully understand your technical needs, culture, and stategic route. 
                                </p>
                                <div className="right-arrow"> 
                                    <img src={RightArrow} alt="Right arrow"></img>
                                </div>
                            </li>
                            
                            <li className="col">
                                <span className="step-number">2</span>
                                <h4 className="text-white"> Find your Matched talents
                                <div className="line-shape"></div>
                                </h4>
                                <p> Start browsing through our system generated matched talents You are ensured not only the velocity but of top quality </p>
                                <div className="right-arrow"> 
                                    <img src={RightArrow} alt="Right arrow"></img>
                                </div>
                            </li>

                            <li className="col">
                                <span className="step-number">3</span>
                                <h4 className="text-white"> kick start your Squad 
                                <div className="line-shape"></div>
                                </h4>
                                <p> 
                                We offer a no risk trial period and then will be 
                                with you every step of the ob boarding process and team 
                                integeration     
                                </p>
                                {/* <div className="right-arrow"> 
                                    <img src={RightArrow} alt="Right arrow"></img>
                                </div> */}
                            </li>
                        </ul>
                        <div className="button">
                            <button className="flex justify-center items-center mx-auto btn-one px-4 py-2 bg-yellow-500 text-gray-900 font-bold rounded cursor-pointer">
                                Hire Tech Team
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Steps;