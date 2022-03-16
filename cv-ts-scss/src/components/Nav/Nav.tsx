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
                    <Link to="/" nav-tooltip="Home">
                        <span className="icon icon-home"></span>
                    </Link>
                </li>
                <li className="navigation__item" id="aboutToggler">
                    <Link to="/about" nav-tooltip="About">
                        <span className="icon icon-about"></span>
                    </Link>
                </li>
                <li className="navigation__item" id="educationToggle">
                    <Link to="/education" nav-tooltip="Education">
                        <span className="icon icon-education"></span>
                    </Link>
                </li>
                <li className="navigation__item" id="porfolioToggler">
                    <a
                        className="navigation_link navigation_link-portfolio"
                        href="#porfolio"
                        nav-tooltip="Portfolio"
                    >
                        <Link to="/portfolio">
                            <span className="icon icon-portfolio"></span>
                        </Link>
                    </a>
                </li>
                <li className="navigation__item" id="contactsToggler">
                    <Link to="/contacts" nav-tooltip="Portfolio">
                        <span className="icon icon-contacts"></span>
                    </Link>
                </li>
            </ul>

            <div className="navigation__arrows">
                <Link to="/about" nav-tooltip="next">
                    <span className="icon icon-right"></span>
                </Link>
                <Link to="/about" nav-tooltip="prev">
                    <span className="icon icon-left"></span>
                </Link>
            </div>
        </nav>
    );
}

export default Nav;
