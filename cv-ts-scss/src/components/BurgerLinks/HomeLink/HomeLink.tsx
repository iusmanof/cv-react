import {Link} from "react-router-dom";
import IBurgerMenu from "../../../intefaces/IBurger";

const HomeLink: React.FC<IBurgerMenu> = ({closeBurgerMenu}) => (
    <Link to="/" onClick={() => closeBurgerMenu(false)}>
        <span>Home</span>
    </Link>
);

export default HomeLink;
