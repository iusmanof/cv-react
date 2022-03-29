import {ReactElement} from "react";
import {useSpring, animated} from "react-spring";
import "./Aside.scss";
import ava from "../../images/ava.png";
import cv_pdf from "../../cv/CV.pdf";

interface IAside {
    homeLink?: ReactElement;
    aboutLink?: ReactElement;
    educationLink?: ReactElement;
    portfolioLink?: ReactElement;
    contactsLink?: ReactElement;
}

function Aside(props: IAside) {
    const propsAnimated = useSpring({
        from: {opacity: 0, marginTop: -2500},
        to: {opacity: 1, marginTop: 0},
        config: {delay: 1000, duration: 1200}
    });

    const {homeLink, aboutLink, educationLink, portfolioLink, contactsLink} = props;
    return (
        <animated.div style={propsAnimated}>
            <aside className="aside">
                <div className="aside__photo-wrapper">
                    <img className="aside__photo" src={ava} alt="IMG" />
                </div>
                <h2 className="aside__header">Igor Usmanov</h2>
                <h3 className="aside__position">React Developer</h3>
                <ul className="aside__burger-links">
                    <li className="aside__burger-link">{homeLink}</li>
                    <li className="aside__burger-link">{aboutLink}</li>
                    <li className="aside__burger-link">{educationLink}</li>
                    <li className="aside__burger-link">{portfolioLink}</li>
                    <li className="aside__burger-link">{contactsLink}</li>
                </ul>

                <ul className="aside__social-networks">
                    <li className="aside__item">
                        <a
                            href="https://vk.com/iharusmanau"
                            target="_blank"
                            rel="noreferrer"
                            className="aside__link link-vk"
                        ></a>
                    </li>
                    <li className="aside__item">
                        <a
                            href="https://www.facebook.com/iharusmanau"
                            target="_blank"
                            rel="noreferrer"
                            className="aside__link link-facebook"
                        ></a>
                    </li>
                    <li className="aside__item">
                        <a
                            href="https://www.linkedin.com/in/iharusmanau"
                            target="_blank"
                            rel="noreferrer"
                            className="aside__link link-linkedin"
                        ></a>
                    </li>
                </ul>
                <div className="button">
                    <a
                        className="button-dowload"
                        href={cv_pdf}
                        target="_blank"
                        rel="noreferrer"
                        download
                    >
                        Download CV
                    </a>
                </div>
                <div className="aside__footer">
                    <a
                        href="https://lmpixels.com/demo/breezycv/dark/1/index.html"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &copy; 2021 All Right Reserved
                    </a>
                </div>
            </aside>
        </animated.div>
    );
}

export default Aside;
