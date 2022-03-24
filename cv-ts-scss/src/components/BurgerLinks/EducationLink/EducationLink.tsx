import {Link} from "react-router-dom";
import IBurgerMenu from "../../../intefaces/IBurger";

const EducationLink: React.FC<IBurgerMenu> = ({closeBurgerMenu}) => (
    <Link to="/education" onClick={() => closeBurgerMenu(false)}>
        <span>Education</span>
    </Link>
);

export default EducationLink;
