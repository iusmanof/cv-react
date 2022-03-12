import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import "./Nav.scss";

import home from "../../images/navigation/home.svg";
import about from "../../images/navigation/about.svg";
import education from "../../images/navigation/education.svg";
import portfolio from "../../images/navigation/portfolio.svg";
import contacts from "../../images/navigation/contacts.svg";
import left from "../../images/navigation/left.svg";
import right from "../../images/navigation/right.svg";
import Education from "../Education";

function Nav() {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item" id="homeToggler">
                    <a className="navigation_link navigation__link-home" href="#home">
                        <Link to="/">
                            <img src={home} alt="home" />
                        </Link>
                    </a>
                </li>
                <li className="navigation__item" id="aboutToggler">
                    <a className="navigation_link navigation_link-about" href="#about-me">
                        <Link to="/about">
                            <img src={about} alt="home" />
                        </Link>
                    </a>
                </li>
                <li className="navigation__item" id="educationToggle">
                    <a className="navigation_link navigation_link-resume" href="#education">
                        <Link to="/education">
                            <img src={education} alt="education" />
                        </Link>
                    </a>
                </li>
                <li className="navigation__item" id="porfolioToggler">
                    <a className="navigation_link navigation_link-portfolio" href="#porfolio">
                        <Link to="/portfolio">
                            <img src={portfolio} alt="portfolio" />
                        </Link>
                    </a>
                </li>
                <li className="navigation__item" id="contactsToggler">
                    <a className="navigation_link navigation_link-contacts" href="#contacts">
                        <Link to="/contacts">
                            <img src={contacts} alt="contacts" />
                        </Link>
                    </a>
                </li>
            </ul>

            <div className="navigation__arrows">
                <div className="navigation_link arrow-right">
                    <img src={right} alt="right" />
                </div>
                <div className="navigation_link arrow-left">
                    <img src={left} alt="left" />
                </div>
            </div>
        </nav>
    );
}

export default Nav;
