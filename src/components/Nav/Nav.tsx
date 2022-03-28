import {useEffect, useRef, useState} from "react";
import {NavLink} from 'react-router-dom'

import "./Nav.scss";
const links = ["/", "/about", "/education", "/portfolio", "/contacts"];

function Nav() {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item" id="homeToggler">
                    <NavLink 
                    to="/" 
                     nav-tooltip="Home" 
                     className={(navData) => (navData.isActive ? 'icon icon-home-active' : 'icon icon-home')}>
                    </NavLink>
                </li>
                <li className="navigation__item" id="aboutToggler">
                    <NavLink 
                    to="/about"
                     nav-tooltip="About"
                     className={(navData) => (navData.isActive ? 'icon icon-about-active' : 'icon icon-about')}>
                    </NavLink>
                </li>
                <li className="navigation__item" id="educationToggle">
                    <NavLink 
                    to="/education" 
                    nav-tooltip="Education"
                    className={(navData) => (navData.isActive ? 'icon icon-education-active' : 'icon icon-education')}>
                    </NavLink>
                </li>
                <li className="navigation__item" id="porfolioToggler">
                    <NavLink 
                    to="/portfolio"
                     nav-tooltip="Portfolio"
                     className={(navData) => (navData.isActive ? 'icon icon-portfolio-active' : 'icon icon-portfolio')}>
                    </NavLink>
                </li>
                <li className="navigation__item" id="contactsToggler">
                    <NavLink 
                    to="/contacts" 
                    nav-tooltip="Contacts"
                    className={(navData) => (navData.isActive ? 'icon icon-contacts-active' : 'icon icon-contacts')}>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
