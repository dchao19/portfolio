import React from 'react';
import { Router } from '@reach/router';

import './App.css';

import Logo from "./components/Logo";
import SocialLinks from "./components/SocialLinks";

import InConstruction from "./pages/InConstruction";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <div className="App-sidebar">
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
