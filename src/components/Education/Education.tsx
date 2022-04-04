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
import IEducationInfo from "../../intefaces/IEducationInfo";
import ICertificateInfo from "../../intefaces/ICertificateInfo";

const educationInfo: IEducationInfo[] = [
    {
        id: 1,
        date: "2009 - 2014",
        isCertificated: true,
        title: "Higher education: Belarusian State University of Informatics and  Radioelectronics - Telecommunications Enginee"
    },
    {
        id: 2,
        date: "2014 - 2017",
        isCertificated: true,
        title: "Course: IT Step - Programming Engineer"
    },
    {
        id: 3,
        date: "2021",
        isCertificated: true,
        title: "Course: EPAM RS School - JS/Front-end 2021Q1"
    },
    {
        id: 4,
        date: "2021",
        isCertificated: false,
        title: "Course: EPAM RS School - React 2021Q3"
    },
    {
        id: 5,
        date: "2021",
        isCertificated: true,
        title: "Course: EPAM RS School - NodeJS 2021Q4"
    }
];

const educations = educationInfo.map(({isCertificated, title, date}) => {
    return (
        <tr>
            <td>
                {date}
                <div className={isCertificated ? "certificate-true" : "certificate-false"}>
                    {isCertificated ? "[certificated]" : "[completed]"}
                </div>
            </td>
            <td>{title}</td>
        </tr>
    );
});

const certificateInfo: ICertificateInfo[] = [
    {
        id: 1,
        imageUrl: ccna_certificate,
        certificatePDF: ccna_certificate_pdf,
        title: "CCNA"
    },
    {
        id: 2,
        imageUrl: itessential_certificate,
        certificatePDF: js_certificate_pdf,
        title: "IT Essential"
    },
    {
        id: 3,
        imageUrl: js_certificate,
        certificatePDF: itessential_certificate_pdf,
        title: "JS/Front-end"
    },
    {
        id: 4,
        imageUrl: nodejs_certificate,
        certificatePDF: nodejs_certificate_pdf,
        title: "Nodejs"
    }
];

const certificates = certificateInfo.map(({imageUrl, certificatePDF, title}) => {
    return (
        <li>
            <img src={imageUrl} alt="nodejs-certificate" />
            <span>{title}</span>
            <h4>
                <a href={certificatePDF} download>
                    Download {title} (PDF)
                </a>
            </h4>
        </li>
    );
});

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
                        <tbody>{educations}</tbody>
                    </table>
                </div>
                <h2 className="education__header  category__header">Certificates</h2>
                <ul className="education__certificates">{certificates}</ul>
            </div>
        </animated.div>
    );
};

export default Education;
