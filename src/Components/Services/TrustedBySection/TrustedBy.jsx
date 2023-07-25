import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

import partner1 from '../../../asset/img/logo-partner/DRC-logo.png';
import partner2 from '../../../asset/img/logo-partner/Morni-logo.png';
import partner3 from '../../../asset/img/logo-partner/STC-logo.png';
import partner4 from '../../../asset/img/logo-partner/Sabic-logo.png';
import partner5 from '../../../asset/img/logo-partner/Safa-logo.png';
import partner6 from '../../../asset/img/logo-partner/Shawarmer-logo.png';
import partner7 from '../../../asset/img/logo-partner/Siemens-logo.png';

const TrustedBy = () => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 5,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="lg:w-1/3 w-full">
            <h3 className="text-2xl font-bold mb-6">Proudly Served</h3>
          </div>
          <div className="lg:w-2/3 w-full">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="bg-white w-28 h-20 rounded-lg shadow-md flex items-center justify-center">
                    <img src={partner1} alt="Partner 1" className="h-12 bg-transparent" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="bg-white w-28 h-20 rounded-lg shadow-md flex items-center justify-center">
                    <img src={partner2} alt="Partner 2" className="h-12 bg-transparent" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="bg-white w-28 h-20 rounded-lg shadow-md flex items-center justify-center">
                    <img src={partner3} alt="Partner 3" className="h-12 bg-transparent" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="bg-white w-28 h-20 rounded-lg shadow-md flex items-center justify-center">
                    <img src={partner4} alt="Partner 4" className="h-12 bg-transparent" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="bg-white w-28 h-20 rounded-lg shadow-md flex items-center justify-center">
                    <img src={partner5} alt="Partner 5" className="h-12 bg-transparent" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="bg-white w-28 h-20 rounded-lg shadow-md flex items-center justify-center">
                    <img src={partner6} alt="Partner 6" className="h-12 bg-transparent" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="bg-white w-28 h-20 rounded-lg shadow-md flex items-center justify-center">
                    <img src={partner7} alt="Partner 7" className="h-12 bg-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
