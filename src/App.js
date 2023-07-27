import React from 'react';

import Home from './Components/Home/Home'
import Services from './Components/Services/Services';
import Steps from './Components/Steps/Steps';
import PartnerSection from './Components/PartnerSection/PartnerSection';
import WordTestSection from './Components/WordTestSection/WordTestSection';
import FooterSection from './Components/FooterSection/FooterSection';

import $ from "jquery";
window.$ = $;
window.jQuery = $;

function App() {
  return (
    <div className='landing-wrapper'>
      <Home />
      <Services/>
      <Steps/>
      <PartnerSection/>
      <WordTestSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
