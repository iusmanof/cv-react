import Aside from "./components/Aside";
import Main from "./components/Main";
import Nav from "./components/Nav";
import {useEffect, useState} from "react";
import "./App.scss";
import "./reset.scss";
import {BrowserRouter as Router} from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu";

const Spinner = () => <div className="loader"></div>;

const Start = () => {
    return (
        <>
            <div className="content">
                <div className="aside__wrapper">
                    <Aside />
                </div>
                <Main />
            </div>
            <Nav />
            <BurgerMenu />
        </>
    );
};

function App() {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 1400);
        }
    }, [loading]);

    const helloHandeler = () => {
        setLoading(!loading);
        setTimeout(() => {
            setLoading(!loading);
            setShow(!show);
        }, 1400);
    };

    if (loading) {
        return (
            <div className={loading ? `wrapper wrapper-loading ` : `wrapper`}>
                <Spinner />;
            </div>
        );
    }

    return (
        <>
            <Router>
                <div className="back">
                    <div className="back-image">
                        <div className={!show ? `wrapper wrapper-loading ` : `wrapper`}>
                            {!show && (
                                <div className="btn start-btn" onClick={helloHandeler}>
                                    Click
                                </div>
                            )}
                            {show && <Start />}
                        </div>
                    </div>
                </div>
            </Router>
        </>
    );
}

export default App;
