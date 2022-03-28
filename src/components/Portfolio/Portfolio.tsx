import React, {FC} from "react";
import "./Portfolio.scss";
import {useSpring, animated} from "react-spring";
import cv from "../../images/projects/cv_project.png";

interface IProps {}

/**
 * @author
 * @function @Portfolio
 **/

const Portfolio: FC<IProps> = () => {
    const props = useSpring({
        from: {opacity: 0, transform: "translate3d(0,100%,0)"},
        to: {opacity: 1, transform: "translate3d(0%,0,0)"}
    });

    return (
        <animated.div style={props}>
            <div className="portfolio">
                <h2 className="portfolio__header category__header">Portfolio</h2>

                <nav className="portfolio__category">
                    <ul>
                        <li>All</li>
                        <li>Front-end</li>
                        <li>Back-end</li>
                    </ul>
                </nav>

                <ul className="portfolio__projects">
                    <li className="portfolio__project">
                        <img
                            src="https://user-images.githubusercontent.com/74846667/159911557-1ab2e807-6c16-49ed-8ac7-0f29dc9cb181.PNG"
                            alt="cv"
                        />
                        <span>cv react</span>
                        <h4>
                            <a href="https://github.com/iusmanof/cv-react/tree/react-cv">
                                github link
                            </a>
                        </h4>
                    </li>
                </ul>
            </div>
        </animated.div>
    );
};

export default Portfolio;
