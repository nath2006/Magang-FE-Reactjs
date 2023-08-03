import React, {useEffect} from "react";
import AOS from "aos";

import 'aos/dist/aos.css';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import './styles.css';

import peopleOne from '../../../asset/img/peapole/poople-1.png';
import maskLogo from '../../../asset/img/mask-logo.svg';

const CarouselSection = () => {
    useEffect(() => {
        AOS.init();
    }, []);
return (    
    <div 
        data-aos="fade-right"
        data-aos-duration="2000"
        className="Testimonial px-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 overflow-hidden">
    <div className="Card">
        <div className="col">
            <div className="wrapper-card">
                <img className="User" src={peopleOne} alt="user-img" width="70px"></img>
                <img className="mask-img" src={maskLogo} alt="mark-logo"/>
                <h3>Ali al hamzi</h3>
                <p> 
                Squadio helped us to establish a full fledged team with great harmony in a matter of weeks
                </p>
            </div>
        </div>
    </div>

    <div className="Card">
        <div className="col">
            <div className="wrapper-card">
                <img className="User" src={peopleOne} alt="user-img" width="70px"></img>
                <img className="mask-img" src={maskLogo} alt="mark-logo"/>
                <h3>Ali al hamzi</h3>
                <p> 
                Squadio helped us to establish a full fledged team with great harmony in a matter of weeks
                </p>
            </div>
        </div>
    </div>

    <div className="Card">
      <div className="col">
          <div className="wrapper-card">
              <img className="User" src={peopleOne} alt="user-img" width="70px"></img>
              <img className="mask-img" src={maskLogo} alt="mark-logo"/>
              <h3>Ali al hamzi</h3>
              <p> 
              Squadio helped us to establish a full fledged team with great harmony in a matter of weeks
              </p>
          </div>
      </div>
    </div>

    </div>
  );
};

export default CarouselSection;
