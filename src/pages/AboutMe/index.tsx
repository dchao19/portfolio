import React from "react";
import { RouteComponentProps } from "@reach/router";

import Headshot from "./headshot.jpg";
import "./index.css";

const AboutMe: React.FC<RouteComponentProps> = () => {
  return (
    <React.Fragment>
      <img className="AboutMe-headshot" src={Headshot} alt="Headshot" />
      <h1>Hello!</h1>
      <p>
        My name is Daniel Chao, and I'm an incoming freshman at Stanford University, intending to
        major in Management Science and Engineering. I currently work at Four Winds Interactive as a
        Software Development Intern.
      </p>
      <p>
        Does this website look incomplete so far? I'm still working on filling in all the details.
        You can follow my progress at this project's{" "}
        <a href="https://github.com/dchao19/portfolio">github page</a>.{" "}
      </p>
    </React.Fragment>
  );
};

export default AboutMe;
