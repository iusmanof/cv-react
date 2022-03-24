import {useState} from "react";
import Aside from "../Aside";
import "./BurgerMenu.scss";
import HomeLink from "../BurgerLinks/HomeLink";
import AboutLink from "../BurgerLinks/AboutLink";
import EducationLink from "../BurgerLinks/EducationLink";
import PortfolioLink from "../BurgerLinks/PortfolioLink";
import ContactsLink from "../BurgerLinks/ContactsLink";

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
                }}
            >
                <span className="burger-line"></span>
            </div>

            <div className={menuClassName}>
                <Aside
                    homeLink={<HomeLink closeBurgerMenu={setBurger} />}
                    aboutLink={<AboutLink closeBurgerMenu={setBurger} />}
                    educationLink={<EducationLink closeBurgerMenu={setBurger} />}
                    portfolioLink={<PortfolioLink closeBurgerMenu={setBurger} />}
                    contactsLink={<ContactsLink closeBurgerMenu={setBurger} />}
                />
            </div>
        </div>
    );
};

export default BurgerMenu;
