import React from "react";

import NavigationLink from "./NavigationLink";

import "./index.css";

const Navigation = () => (
  <nav>
    <ul className="Navigation-list">
      <NavigationLink to="/" text="About Me" />
      {/* <NavigationLink to="/projects" text="Projects" />
      <NavigationLink to="/experience" text="Experience" />
      <NavigationLink to="/education" text="Education" />
      <NavigationLink to="/skills" text="Skills" /> */}
    </ul>
  </nav>
);

export default Navigation;
