import React from "react";
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import './styles.css';
import peopleOne from '../../../asset/img/peapole/poople-1.png';

const CarouselSection = () => {
  return (
    <div className="matching-skills-carousel">
      <span id="carousel_prev"></span>
      <div id="carousel" className="owl-carousel owl-theme owl-loaded owl-drag owl-hidden">
        <div className="owl-stage-outer">
          <div className="owl-stage" style={{ transform: 'translate3d(-833px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '2084px' }}>
            <div className="owl-item" style={{ width: '406.648px', marginRight: '10px' }}>
              <div className="item">
                <div className="outhor-img-div">
                  <img className="rounded-circle author-img" src={peopleOne} width="70px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
