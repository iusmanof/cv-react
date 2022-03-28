import "./Education.scss";

import js_certificate from "../../images/certificate/js-fronend2021q1/js-fronend2021q1-1.jpg";
import js_certificate_pdf from "../../images/certificate/js-fronend2021q1/js-fronend2021q1.pdf";
import nodejs_certificate from "../../images/certificate/nodejs2021q4/nodejs2021q4-1.jpg";
import nodejs_certificate_pdf from "../../images/certificate/nodejs2021q4/nodejs2021q4.pdf";

import {useSpring, animated} from "react-spring";

const Education = () => {
    const props = useSpring({
        from: {opacity: 0, transform: "translate3d(0,100%,0)"},
        to: {opacity: 1, transform: "translate3d(0%,0,0)"},
        config: {delay: 2000, duration: 1000}
    });

    return (
        <animated.div style={props}>
            <div className="education scroll-content">
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
                </div>

                <h2 className="education__header  category__header">Certificates</h2>
                <ul className="education__certificates">
                    <li>
                        <img src={nodejs_certificate} alt="nodejs-certificate" />
                        <span>CCNA</span>
                        <h4>
                            <a href={nodejs_certificate_pdf} download>
                                Download
                            </a>
                        </h4>
                    </li>
                    <li>
                        <img src={js_certificate} alt="nodejs-certificate" />
                        <span>JS/Front-end certificate</span>
                        <h4>
                            <a href={js_certificate_pdf} download>
                                Download
                            </a>
                        </h4>
                    </li>

                    <li>
                        <img src={nodejs_certificate} alt="nodejs-certificate" />
                        <span>Nodejs certificate</span>
                        <h4>
                            <a href={nodejs_certificate_pdf} download>
                                Download
                            </a>
                        </h4>
                    </li>
                </ul>
            </div>
        </animated.div>
    );
};

export default Education;
