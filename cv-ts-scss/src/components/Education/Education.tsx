import React, {FC} from "react";
import "./Education.scss";

import js_certificate from "../../images/certificate/js-fronend2021q1/js-fronend2021q1-1.jpg";
import nodejs_certificate from "../../images/certificate/nodejs2021q4/nodejs2021q4-1.jpg";

import js_pdf from "../../images/certificate/js-fronend2021q1/js-fronend2021q1.pdf";
import nodejs_pdf from "../../images/certificate/nodejs2021q4/nodejs2021q4.pdf";
import {useSpring, animated} from "react-spring";
interface IProps {}

/**
 * @author
 * @class @Education
 **/

const Education: FC<IProps> = () => {
    // const props = useSpring({ from: { opacity: 0, marginLeft: -2500 }, to:{ opacity: 1, marginLeft: 0 }, config: { delay: 2000, duration: 2000} })
    const props = useSpring({
        from: {opacity: 0, transform: "translate3d(0,100%,0)"},
        to: {opacity: 1, transform: "translate3d(0%,0,0)"}
        // config: {delay: 2000, duration: 200}
    });

    return (
        <animated.div style={props}>
            <div className="education">
                <h2 className="education__header  category__header">Education</h2>
                <div className="education__content">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    2009 - 2014
                                    <div className="certificate-true">[certificated]</div>
                                </td>
                                <td>
                                    Higher education: Belarusian State University of Informatics and
                                    Radioelectronics - Telecommunications Enginee
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    2014 - 2017
                                    <div className="certificate-true">[certificated]</div>
                                </td>
                                <td>Course: IT Step - Programming Engineer</td>
                            </tr>
                            <tr>
                                <td>
                                    2021 <div className="certificate-true">[certificated]</div>
                                </td>
                                <td>Course: EPAM RS School - JS/Front-end 2021Q1 </td>
                            </tr>
                            <tr>
                                <td>
                                    2021 <div className="certificate-false">[completed]</div>
                                </td>
                                <td>Course: EPAM RS School - React 2021Q3</td>
                            </tr>
                            <tr>
                                <td>
                                    2021 <div className="certificate-true">[certificated]</div>
                                </td>
                                <td>Course: EPAM RS School - NodeJS 2021Q4</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <ul>
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
                    </ul> */}
                </div>

                <h2 className="education__header  category__header">Certificates</h2>
                <ul className="education__certificates">
                    <li>
                        <img src={js_certificate} alt="js-certificate" className="cert-img" />
                        <a className="button__download" href={js_pdf} download>
                            download certificate
                        </a>
                    </li>
                    <li>
                        <img
                            src={nodejs_certificate}
                            alt="nodejs-certificate"
                            className="cert-img"
                        />
                        <a className="button__download" href={nodejs_pdf} download>
                            download certificate
                        </a>
                    </li>
                    <li>
                        <img
                            src={nodejs_certificate}
                            alt="nodejs-certificate"
                            className="cert-img"
                        />
                        <a className="button__download" href={js_pdf} download>
                            download certificate
                        </a>
                    </li>
                </ul>
            </div>
        </animated.div>
    );
};

export default Education;
