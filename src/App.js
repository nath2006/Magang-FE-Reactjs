import React from 'react';

import Home from './Components/Home/Home'
import Services from './Components/Services/Services';
import Steps from './Components/Steps/Steps';


function App() {
  return (
    <div className='landing-wrapper'>
      <Home />
      <Services/>
      <Steps/>
    </div>
  );
}

export default App;
