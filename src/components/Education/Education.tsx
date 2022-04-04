import "./Education.scss";

import ccna_certificate from "../../images/certificate/ccna/ccna.jpg";
import ccna_certificate_pdf from "../../images/certificate/ccna/ccna.pdf";
import itessential_certificate from "../../images/certificate/it-essential/it-essential.jpg";
import itessential_certificate_pdf from "../../images/certificate/it-essential/it-essential.pdf";
import js_certificate from "../../images/certificate/js-fronend2021q1/js-fronend2021q1-1.jpg";
import js_certificate_pdf from "../../images/certificate/js-fronend2021q1/js-fronend2021q1.pdf";
import nodejs_certificate from "../../images/certificate/nodejs2021q4/nodejs2021q4-1.jpg";
import nodejs_certificate_pdf from "../../images/certificate/nodejs2021q4/nodejs2021q4.pdf";

import {useSpring, animated} from "react-spring";
import ICertificateInfo from "../../intefaces/ICertificateInfo";
import EducationList from "../EducationList/EducationList";
import CertificateList from "../CertificateList/CertificateList";

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
                        <tbody><EducationList /></tbody>
                    </table>
                </div>
                <h2 className="education__header  category__header">Certificates</h2>
                <ul className="education__certificates"><CertificateList /></ul>
            </div>
        </animated.div>
    );
};

export default Education;
