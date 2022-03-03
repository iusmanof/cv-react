import React from "react";
import "./Aside.scss";
import ava from "../../images/ava.png";

import vk from "../../images/icons/vk.png";
import facebook from "../../images/icons/facebook.png";
import linkedin from "../../images/icons/linkedin.png";

import cv_pdf from "../../images/certificate/js-fronend2021q1/js-fronend2021q1.pdf";

function Aside(props) {
    return (
        <aside className="aside">
            <img className="aside__photo" src={ava} alt="IMG" />
            <h2 className="aside__header">Ihar Usmanau</h2>
            <h3 className="aside__position">React Developer</h3>
            <ul className="aside__social-networks">
                <li className="aside__item">
                    <a href="" className="aside__link link-vk">
                        <img src={vk} alt="vk" />
                    </a>
                </li>
                <li className="aside__item">
                    <a href="" className="aside__link link-facebook">
                        <img src={facebook} alt="facebook" />
                    </a>
                </li>
                <li className="aside__item">
                    <a href="" className="aside__link link-linkedin">
                        <img src={linkedin} alt="linkedin" />
                    </a>
                </li>
            </ul>
            <div className="button">
                <a className="button-dowload" href={cv_pdf} target="_blank" download>
                    Download CV
                </a>
            </div>
            <div className="aside__footer">&copy; 2021 All Right Reserved</div>
        </aside>
    );
}

export default Aside;
