import React from 'react';

import Home from './Components/Home/Home'
import Services from './Components/Services/Services';
import Steps from './Components/Steps/Steps';
import PartnerSection from './Components/PartnerSection/PartnerSection';
import WordTestSection from './Components/WordTestSection/WordTestSection';

function App() {
  return (
    <div className='landing-wrapper'>
      <Home />
      <Services/>
      <Steps/>
      <PartnerSection/>
      <WordTestSection/>
    </div>
  );
}

export default App;
