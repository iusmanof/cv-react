import React, {FC} from "react";
import "./Home.scss";

interface IProps {}

/**
 * @author
 * @function @Home
 **/

const Home: FC<IProps> = () => (
    <div className="home">
        <h1 className="home__title">Ihar Usmanau</h1>
        <h2 className="home__subtitle">Frontend/React Developer</h2>
        <div className="home__stack">
            <span>html</span>
            <span>css</span>
            <span>js</span>
            <span>react</span>
            <span>redux</span>
        </div>
        <div className="home__stack">
            <span>node</span>
            <span>express</span>
            <span>nest.js</span>
        </div>
        <div className="home__stack">
            <span>postgressql</span>
            <span>typeorm</span>
        </div>
        <div className="home__stack">
            <span>jest</span>
            <span>enzyme</span>
            <span>react testing library</span>
        </div>
        <div className="home__stack">
            <span>eslint</span>
            <span>prettier</span>
        </div>
        <button>btn</button>
    </div>
);

export default Home;
