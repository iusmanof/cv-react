import {Link} from "react-router-dom";
import IBurgerMenu from "../../../intefaces/IBurger";

const AboutLink: React.FC<IBurgerMenu> = ({closeBurgerMenu}) => (
    <Link to="/about" onClick={() => closeBurgerMenu(false)}>
        <span>About</span>
    </Link>
);

export default AboutLink;
