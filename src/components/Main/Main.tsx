import About from "../About";
import Contacts from "../Contacts";
import Education from "../Education";
import Home from "../Home";
import Portfolio from "../Portfolio";
import {Routes, Route} from "react-router-dom";
import "./Main.scss";

function Main() {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </main>
    );
}

export default Main;
