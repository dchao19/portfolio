import React from 'react';
import { Router } from '@reach/router';

import './App.css';

import InConstruction from "./pages/InConstruction";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <div className="sidebar">
        <Logo/>
        <SocialLinks/>
        <Navigation/>
      </div> */}
      <Router>
        <InConstruction path="/"/>  
      </Router>
    </div>
  );
}

export default App;
