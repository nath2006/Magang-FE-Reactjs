import React from 'react';
// import Navbar from './Navbar';

function Home() {
  return (
    <div className='landing-wrapper h-screen bg-[#422e87]'>
      <div className="nav-banner-wrapper">
        {/* <Navbar /> */}
      <div className="container align-items-center z-index-1 position-relative py-5">
        <div className="row align-items-center text-center text-lg-start">
          <div className="col-lg-7 col-12 mt-5">
            <h1 className="mb-4 text-white">
              <span className="text-yellow-400">Build</span> Your Team
            </h1>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
