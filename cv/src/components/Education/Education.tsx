import React, {FC} from "react";
import "./Education.scss";

import js_certificate from "../../images/certificate/js-fronend2021q1/js-fronend2021q1-1.jpg";
import nodejs_certificate from "../../images/certificate/nodejs2021q4/nodejs2021q4-1.jpg";

import js_pdf from '../../images/certificate/js-fronend2021q1/js-fronend2021q1.pdf'
import nodejs_pdf from '../../images/certificate/nodejs2021q4/nodejs2021q4.pdf'

interface IProps {}

/**
 * @author
 * @class @Education
 **/

const Education: FC<IProps> = (props) => {
    return (
        <div className="education">
            <h2 className="education__header">Education</h2>
            <p className="education__content">
                <ul>
                    <li>
                        Higher education: Belarusian State University of Informatics and
                        Radioelectronics - Telecommunications Engineer 2009 - 2014
                    </li>
                    <li>
                        Course: IT Step - Programming Engineer 2014 - 2017{" "}
                        <span className="certificate-true">[certificate]</span>
                    </li>
                    <li>
                        Course: EPAM RS School - JS/Front-end 2021Q1{" "}
                        <span className="certificate-true">[certificate] </span>
                    </li>
                    <li>
                        Course: EPAM RS School - React 2021Q3{" "}
                        <span className="certificate-false">[completed] </span>
                    </li>
                    <li>
                        Course: EPAM RS School - NodeJS 2021Q4{" "}
                        <span className="certificate-true">[certificate] </span>
                    </li>
                </ul>
            </p>

            <ul className="education__certificates">
                <li>
                    <img src={js_certificate} alt="js-certificate" className="cert-img" />
                    <a className="button__download" href={js_pdf} download>download certificate</a>
                </li>
                <li>
                    <img src={nodejs_certificate} alt="nodejs-certificate" className="cert-img" />
                    <a className="button__download" href={nodejs_pdf} download>download certificate</a>
                </li>
                <li>
                    <img src={nodejs_certificate} alt="nodejs-certificate" className="cert-img" />
                    <a className="button__download" href={js_pdf} download>download certificate</a>
                </li>
            </ul>
        </div>
    );
};

export default Education;
