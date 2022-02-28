import Aside from "components/Aside";
import Main from "components/Main";
import Nav from "components/Nav";
import React from "react";
import "./App.scss";
import "./reset.scss";

function App(props) {
    return (
        <div className="wrapper">
            <div className="content">
                <Aside />
                <Main />
            </div>
            <Nav />
        </div>
    );
}

export default App;
