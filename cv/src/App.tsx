import Aside from "components/Aside";
import Main from "components/Main";
import Nav from "components/Nav";
import React from "react";
import "./App.scss";
import "./reset.scss";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import bg from "./images/main_background.png";

function App(props) {
    return (
        <Router>
            <div className="fon">
 <div className="wrapper">
                <div className="content">
                    <Aside />
                    <Main />
                </div>
                <Nav />
            </div>
            </div>
        </Router>
    );
}

export default App;
