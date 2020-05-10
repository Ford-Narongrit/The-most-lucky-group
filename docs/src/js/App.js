import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../css/App.css';

import homepage from "./homepage.js";
import FordProfile from "./Ford/FordProfile.js";
import JobProfile from "./Job/JobProfile.js";
import PlumeProfile from "./Plume/PlumeProfile.js";

function App() {
  return (
  <BrowserRouter>
    <Route exact path = "/" component = { homepage }  />

    <Route exact path = "/Ford-Profile" component = { FordProfile }  />

    <Route exact path = "/Job-Profile" component = { JobProfile }  />

    <Route exact path = "/Plume-Profile" component = { PlumeProfile }  />

  </BrowserRouter>
  );
}

export default App;
