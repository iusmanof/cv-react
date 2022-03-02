import Aside from "components/Aside";
import Main from "components/Main";
import About from "components/About";
import Education from "components/Education";
import Home from "components/Home";
import Nav from "components/Nav";
import React from "react";
import "./App.scss";
import "./reset.scss";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import bg from "./images/main_background.png";

function App(props) {
    return (
        <Router>
            <div className="wrapper">
                <div className="content">
                    <Aside />
                    <Main />
                </div>
                <Nav />
            </div>
            <img src={bg} alt="bg" className="bg" />
        </Router>
    );
}

export default App;
