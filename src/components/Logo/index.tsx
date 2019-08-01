import React from 'react';

import logo from "./logo.svg";
import "./Logo.css";

const Logo: React.FC = () => {
    return (
        <img src={logo} className="Logo" alt="DC"/>
    )
}

export default Logo;