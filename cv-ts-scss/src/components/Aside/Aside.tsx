import React from "react";
import {useSpring, animated} from "react-spring";

import "./Aside.scss";
import ava from "../../images/ava.png";

import vk from "../../images/icons/vk.png";
import facebook from "../../images/icons/facebook.png";
import linkedin from "../../images/icons/linkedin.png";

import cv_pdf from "../../images/certificate/js-fronend2021q1/js-fronend2021q1.pdf";

function Aside() {
    const props = useSpring({
        from: {opacity: 0, marginTop: -2500},
        to: {opacity: 1, marginTop: 0},
        config: {delay: 1000, duration: 1200}
    });

    return (
        <animated.div style={props}>
            <aside className="aside">
                <div className="aside__photo-wrapper">
                    <img className="aside__photo" src={ava} alt="IMG" />
                </div>
                <h2 className="aside__header">Ihar Usmanau</h2>
                <h3 className="aside__position">React Developer</h3>
                <ul className="aside__social-networks">
                    <li className="aside__item">
                        <a
                            href="https://vk.com/iharusmanau"
                            target="_blank"
                            className="aside__link link-vk"
                        >
                            <img src={vk} alt="vk" />
                        </a>
                    </li>
                    <li className="aside__item">
                        <a
                            href="https://www.facebook.com/iharusmanau"
                            target="_blank"
                            className="aside__link link-facebook"
                        >
                            <img src={facebook} alt="facebook" />
                        </a>
                    </li>
                    <li className="aside__item">
                        <a
                            href="https://www.linkedin.com/in/iharusmanau"
                            target="_blank"
                            className="aside__link link-linkedin"
                        >
                            <img src={linkedin} alt="linkedin" />
                        </a>
                    </li>
                </ul>
                <div className="button">
                    <a className="button-dowload" href={cv_pdf} target="_blank" download>
                        Download CV
                    </a>
                </div>
                <div className="aside__footer">
                    <a href="https://lmpixels.com/demo/breezycv/dark/1/index.html" target="_blank">
                        &copy; 2021 All Right Reserved
                    </a>
                </div>
            </aside>
        </animated.div>
    );
}

export default Aside;
