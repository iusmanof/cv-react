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
        <h2 className="home__subtitle">Frontend Developer/React Developer</h2>
    </div>
);

export default Home;
