import { HashRouter , Route } from 'react-router-dom';
import React from 'react';
import './css/App.css';

import homepage from './homePage';
import FordProfile from './Ford/FordProfile';
import FordWeek2 from './Ford/FordWeek2';
import FordWeek3 from './Ford/FordWeek3';
import FordWeek4 from './Ford/FordWeek4';
import FordWeek5 from './Ford/FordWeek5';
import FordWeek6 from './Ford/FordWeek6';

import JobProfile from './Job/JobProfile';
import JobWeek2 from './Job/JobWeek2';
import JobWeek3 from './Job/JobWeek3';
import JobWeek4 from './Job/JobWeek4';


import PlumeProfile from './Plume/PlumeProfile';

function App() {
  return (
    <HashRouter>
      <Route exact path = "/" component = { homepage }  />
      {/* about Ford */}
      <Route exact path = "/Ford-profile" component = { FordProfile }  />
      <Route path = "/Ford-profile/Week2" component = { FordWeek2 }  />
      <Route path = "/Ford-profile/Week3" component = { FordWeek3 }  />
      <Route path = "/Ford-profile/Week4" component = { FordWeek4 }  />
      <Route path = "/Ford-profile/Week5" component = { FordWeek5 }  />
      <Route path = "/Ford-profile/Week6" component = { FordWeek6 }  />

      {/* about Job */}
      <Route exact path = "/Job-profile" component = { JobProfile }  />
      <Route exact path = "/Job-profile/Week2" component = { JobWeek2 }  />
      <Route exact path = "/Job-profile/Week3" component = { JobWeek3 }  />
      <Route exact path = "/Job-profile/Week4" component = { JobWeek4 }  />
      



      {/* about Pluem */}
      <Route exact path = "/Plume-profile" component = { PlumeProfile }  />



      
    </HashRouter>
  );
}

export default App;