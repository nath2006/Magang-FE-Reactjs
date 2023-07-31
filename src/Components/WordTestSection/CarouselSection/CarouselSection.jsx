import React from "react"; 

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import './styles.css';

import peopleOne from '../../../asset/img/peapole/poople-1.png';
import maskLogo from '../../../asset/img/mask-logo.svg';

const CarouselSection = () => {
  // useEffect(() => {
  // $(document).ready(function() {
  //   $(".owl-carousel").owlCarousel({

  //   });
  // }, []);
  // });


return (

    <div className="matching-skills-carousel">
      <span id="carousel_prev"></span>
      <div id="carousel" className="owl-carousel owl-theme owl-loaded owl-drag owl-hidden">
        <div className="owl-stage-outer">
          <div className="owl-stage" >
            <div className="owl-item">
              <div className="item">
                <div className="outhor-img-div">
                  <img className="author-img" src={peopleOne} width="70px" />
                  <img className="mask-img" src={maskLogo} alt="mark-logo"/>
                </div>
                <p>
                Squadio helped us to establish a full fledged team with great harmony in a matter of weeks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
