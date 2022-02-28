import React from "react";
import "./Nav.scss";

import home from "../../images/navigation/home.svg";
import about from "../../images/navigation/about.svg";
import resume from "../../images/navigation/resume.svg";
import portfolio from "../../images/navigation/portfolio.svg";
import contacts from "../../images/navigation/contacts.svg";
import left from "../../images/navigation/left.svg";
import right from "../../images/navigation/right.svg";

function Nav(props) {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item" id="homeToggler">
                    <a className="navigation__link navigation__link-home" href="#home">
                        <img src={home} alt="home" />
                    </a>
                </li>
                <li className="navigation__item" id="aboutToggler">
                    <a className="navigation_link navigation_link-about" href="#about-me">
                        <img src={about} alt="about" />
                    </a>
                </li>
                <li className="navigation__item" id="educationToggle">
                    <a className="navigation_link navigation_link-resume" href="#education">
                        <img src={resume} alt="resume" />
                    </a>
                </li>
                <li className="navigation__item" id="porfolioToggler">
                    <a className="navigation_link navigation_link-portfolio" href="#porfolio">
                        <img src={portfolio} alt="portfolio" />
                    </a>
                </li>
                <li className="navigation__item" id="contactsToggler">
                    <a className="navigation_link navigation_link-contacts" href="#contacts">
                        <img src={contacts} alt="contacts" />
                    </a>
                </li>
            </ul>

            <div className="navigation__arrows">
                <div className="arrow-right">
                    {" "}
                    <img src={right} alt="right" />
                </div>
                <div className="arrow-left">
                    <img src={left} alt="left" />
                </div>
            </div>
        </nav>
    );
}

export default Nav;
