import React from "react";
import { Router } from "@reach/router";

import "./App.css";

import Logo from "./components/Logo";
import SocialLinks from "./components/SocialLinks";
import Navigation from "./components/Navigation";

import AboutMe from "./pages/AboutMe";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-sidebar">
        <Logo />
        <SocialLinks />
        <Navigation />
      </div>
      <div className="App-content">
        <Router>
          <AboutMe path="/" />
        </Router>
      </div>
    </div>
  );
};

export default App;
