import {Link} from "react-router-dom";
import IBurgerMenu from "../../../intefaces/IBurger";

const ContactsLink: React.FC<IBurgerMenu> = ({closeBurgerMenu}) => (
    <Link to="/contacts" onClick={() => closeBurgerMenu(false)}>
        <span>Contacts</span>
    </Link>
);

export default ContactsLink;
