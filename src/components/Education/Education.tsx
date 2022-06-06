import "./Education.scss";

import {useSpring, animated} from "react-spring";
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
                        <tbody>
                            <EducationList />
                        </tbody>
                    </table>
                </div>
                <h2 className="education__header  category__header">Certificates</h2>
                <ul className="education__certificates">
                    <CertificateList />
                </ul>
            </div>
        </animated.div>
    );
};

export default Education;
