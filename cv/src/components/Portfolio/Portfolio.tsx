import React, {FC} from "react";
import "./Portfolio.scss";

interface IProps {}

/**
 * @author
 * @function @Portfolio
 **/

const Portfolio: FC<IProps> = (props) => {
    return (
        <div className="portfolio">
            <h2 className="portfolio__header">Portfolio</h2>
            <div className="portfolio__content">
                <h2>CV</h2>
                <a href="#"> netlify link</a>
                <p>Description about cv</p>
                <h2>Statistic app</h2>
                <a href="#"> netlify link</a>
                <p>Description about app</p>
                <h2>HTML CSS app</h2>
                <a href="#"> netlify link</a>
                <p>Description about verstka</p>
            </div>
        </div>
    );
};

export default Portfolio;
