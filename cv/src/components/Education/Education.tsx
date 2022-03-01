import React, {FC} from "react";
import "./Education.scss";

import js_certificate from "../../images/certificate/js-fronend2021q1/js-fronend2021q1-1.jpg";
import nodejs_certificate from "../../images/certificate/nodejs2021q4/nodejs2021q4-1.jpg";

interface IProps {}

/**
 * @author
 * @function @Education
 **/

const Education: FC<IProps> = (props) => {
    return (
        <div className="education">
            <h2 className="education__header">Education:</h2>
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
            <img src={js_certificate} alt="js-certificate" className="cert-img" />
            <img src={nodejs_certificate} alt="nodejs-certificate" className="cert-img" />

            <button>download certificate NodeJS 2021Q4</button>
            <button>download certificate JS/Front-end 2021Q1</button>
            <button>download certificate CCNA</button>
        </div>
    );
};

export default Education;
