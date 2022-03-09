import Aside from "./components/Aside";
import Main from "./components/Main";
import Nav from "./components/Nav";
import React from "react";
import "./App.scss";
import "./reset.scss";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="back">
                <div className="back-image">
                    <div className="wrapper">
                        <div className="content">
                            <Aside />
                            <Main />
                        </div>
                        <Nav />
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
