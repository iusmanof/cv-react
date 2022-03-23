import React, {useState} from "react";
import Aside from "../Aside";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "./BurgerMenu.scss";

const HomeLink = () => (
    <Link to="/">
        <span>Home</span>
    </Link>
);
const AboutLink = () => (
    <Link to="/about">
        <span>About</span>
    </Link>
);
const EducationLink = () => (
    <Link to="/education">
        <span>Education</span>
    </Link>
);
const PortfolioLink = () => (
    <Link to="/portfolio">
        <span>Portfolio</span>
    </Link>
);
const ContactsLink = () => (
    <Link to="/contacts">
        <span>Contacts</span>
    </Link>
);

const BurgerMenu = () => {
    const [burger, setBurger] = useState(false);
    const burgerClassName = burger ? "burger burger-active" : "burger";
    const menuClassName = burger
        ? "burger-menu__wrapper burger-menu__wrapper-active"
        : "burger-menu__wrapper";
    return (
        <div className="burger__menu">
            <div
                className={burgerClassName}
                onClick={() => {
                    setBurger(!burger);
                    console.log(burger);
                }}
            >
                <span className="burger-line"></span>
            </div>

            <div className={menuClassName}>
                <Aside
                    homeLink={<HomeLink />}
                    aboutLink={<AboutLink />}
                    educationLink={<EducationLink />}
                    portfolioLink={<PortfolioLink />}
                    contactsLink={<ContactsLink />}
                />
            </div>
        </div>
    );
};

export default BurgerMenu;
