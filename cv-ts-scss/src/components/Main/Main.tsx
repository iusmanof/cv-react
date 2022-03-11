import About from "../About";
import Contacts from "../Contacts";
import Education from "../Education";
import Home from "../Home";
import Portfolio from "../Portfolio";
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link, HashRouter} from "react-router-dom";
import "./Main.scss";
import {useSpring, animated} from "react-spring";

function Main() {
    const props = useSpring({
        from: {opacity: 0, marginTop: -2500},
        to: {opacity: 1, marginTop: 0},
        config: {delay: 2000, duration: 2000}
    });

    return (
        <main className="main">
            <div className="scroll-content">
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </div>
        </main>
    );
}

export default Main;
