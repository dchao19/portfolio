import React from 'react';
import { RouteComponentProps } from '@reach/router';

import logo from '../logo.svg';
import "./InConstruction.css";

const InConstruction: React.FC<RouteComponentProps> = () => (
    <header className="Construction-header">
        <h1>Hold tight!</h1>
        <img src={logo} className="Construction-logo" alt="logo" />
        I'm working on an update. 
    </header>
    
)

export default InConstruction;