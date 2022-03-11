import React, {FC} from "react";
import "./Portfolio.scss";

import cv from "../../images/projects/cv_project.png";

interface IProps {}

/**
 * @author
 * @function @Portfolio
 **/

const Portfolio: FC<IProps> = (props) => {
    return (
        <div className="portfolio">
            <h2 className="portfolio__header">Portfolio</h2>

            <nav className="portfolio__category">
                <ul>
                    <li>All</li>
                    <li>Front-end</li>
                    <li>Back-end</li>
                </ul>
            </nav>

            <ul className="portfolio__projects">
                <li>
                    <div className="portfolio__project">
                        <img src={cv} alt="cv" />
                        <span>CV on image</span>
                    </div>
                    <h4>Title CV</h4>
                </li>

            </ul>
        </div>
    );
};

export default Portfolio;
