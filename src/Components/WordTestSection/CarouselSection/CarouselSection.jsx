import React, { useEffect } from "react";
import $ from 'jquery'; 

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './styles.css';

import peopleOne from '../../../asset/img/peapole/poople-1.png';
import maskLogo from '../../../asset/img/mask-logo.svg';

const CarouselSection = () => {
  useEffect(() => {
  $(document).ready(function() {
    $(".owl-carousel").owlCarousel({
      items: 4,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
    });
  }, []);
  });


return (
    <div className="matching-skills-carousel">
      <span id="carousel_prev"></span>
      <div id="carousel" className="owl-carousel owl-theme owl-loaded owl-drag owl-hidden">
        <div className="owl-stage-outer">
          <div className="owl-stage" style={{ transform: 'translate3d(-833px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '2084px' }}>
            <div className="owl-item" style={{ width: '406.648px', marginRight: '10px' }}>
              <div className="item-active">
                <div className="outhor-img-div">
                  <img className="rounded-circle author-img" src={peopleOne} width="70px" />
                  <img className={maskLogo} alt="mark-logo"/>
                </div>
                <p>
                Squadio helped us to establish a full fledged team with great harmony in a matter of weeks
                </p>
              </div>

              <div className="item-active">
                <div className="outhor-img-div">
                  <img className="rounded-circle author-img" src={peopleOne} width="70px" />
                  <img className={maskLogo} alt="mark-logo"/>
                </div>
                <p>
                Squadio helped us to establish a full fledged team with great harmony in a matter of weeks
                </p>
              </div>

              <div className="item-active">
                <div className="outhor-img-div">
                  <img className="rounded-circle author-img" src={peopleOne} width="70px" />
                  <img className={maskLogo} alt="mark-logo"/>
                </div>
                <p>
                Squadio helped us to establish a full fledged team with great harmony in a matter of weeks
                </p>
              </div>

              <div className="item-active">
                <div className="outhor-img-div">
                  <img className="rounded-circle author-img" src={peopleOne} width="70px" />
                  <img className={maskLogo} alt="mark-logo"/>
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
