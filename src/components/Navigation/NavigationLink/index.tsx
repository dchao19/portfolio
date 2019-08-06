import React from "react";
import { Link, LinkGetProps } from "@reach/router";

import "./index.css";

const NavigationLink: React.FC<{ to: string; text: string }> = ({ to, text }) => {
  const isActive: (options: LinkGetProps) => object = ({ isCurrent }) => {
    return isCurrent ? { className: "NavigationLink NavigationLink_active" } : {};
  };

  return (
    <Link to={to} getProps={isActive} className="NavigationLink">
      <li className="NavigationLink-listItem">{text}</li>
    </Link>
  );
};

export default NavigationLink;
