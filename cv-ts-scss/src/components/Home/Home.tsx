import React, {FC, useState, useEffect} from "react";
import {useSpring, animated} from "react-spring";
import Typist from "react-typist";

import "./Home.scss";

interface IProps {}
const Home: FC<IProps> = () => {
    const props = useSpring({
        from: {opacity: 0, transform: "translate3d(0,100%,0)"},
        to: {opacity: 1, transform: "translate3d(0%,0,0)"}
    });
    const [count, setCount] = useState(1);

    return (
        <animated.div style={props}>
            <div className="home">
                <h1 className="home__title">Ihar Usmanau</h1>
                <h2 className="home__subtitle">Frontend/React Developer</h2>
                <div className="home__stacks">
                    {count ? (
                        <Typist avgTypingDelay={50} onTypingDone={() => setCount(1)}>
                            <span> TECHNOLOGY STACK </span>
                            <Typist.Backspace count={20} delay={800} />
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
                        </Typist>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </animated.div>
    );
};

export default Home;
