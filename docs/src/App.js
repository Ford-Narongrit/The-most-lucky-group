import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import './css/App.css';

import homepage from './homePage';
import FordProfile from './Ford/FordProfile';
import JobProfile from './Job/JobProfile';
import PlumeProfile from './Plume/PlumeProfile';

function App() {
  return (
    <BrowserRouter>
      <Route exact path = "/" component = { homepage }  />
      {/* about Ford */}
      <Route path = "/Ford-profile" component = { FordProfile }  />




      {/* about Job */}
      <Route path = "/Job-profile" component = { JobProfile }  />




      {/* about Pluem */}
      <Route path = "/Plume-profile" component = { PlumeProfile }  />



      
    </BrowserRouter>
  );
}

export default App;