import React from 'react';

import GithubLogo from "./mark-github.svg";
import MailLogo from "./mail-read.svg";

import "./index.css";

const LinkWithLogo: React.FC<{ href?: string, text: string, imgSrc: string, imgAltText: string}> = ({href, text, imgSrc, imgAltText}) => {
    return ( 
        <li className="SocialLinks-listItem">
            <img className="SocialLinks-listItem-logo" src={imgSrc} alt={imgAltText}/>
            <a className="SocialLinks-listItem-link" href={href}>{text}</a> 
        </li>
    )
}

const SocialLinks: React.FC = () => {
    return (
        <ul className="SocialLinks-list">
            <LinkWithLogo imgSrc={GithubLogo} imgAltText={"Github"} href="https://github.com/dchao19" text="dchao19"/>
            <LinkWithLogo imgSrc={MailLogo} imgAltText={"Email"} href="mailto:daniel@danielchao.me" text="daniel@danielchao.me"/>
            <LinkWithLogo imgSrc={MailLogo} imgAltText={"Email"} href="mailto:djchao@stanford.edu" text="djchao@stanford.edu"/>
        </ul>
    )
}

export default SocialLinks;