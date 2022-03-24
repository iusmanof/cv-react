import {Link} from "react-router-dom";
import IBurgerMenu from "../../../intefaces/IBurger";

const PortfolioLink: React.FC<IBurgerMenu> = ({closeBurgerMenu}) => (
    <Link to="/portfolio" onClick={() => closeBurgerMenu(false)}>
        <span>Portfolio</span>
    </Link>
);

export default PortfolioLink;
