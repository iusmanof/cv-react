import About from "components/About";
import Contacts from "components/Contacts";
import Education from "components/Education";
import Home from "components/Home";
import Portfolio from "components/Portfolio";
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link, HashRouter} from "react-router-dom";
import "./Main.scss";

function Main(props) {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </main>
    );
}

export default Main;
