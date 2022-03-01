import React, {FC} from "react";
import "./Contacts.scss";

interface IProps {}

/**
 * @author
 * @function @Contacts
 **/

const Contacts: FC<IProps> = (props) => {
    return (
        <div>
            {" "}
            <div className="contacts">
                <h2 className="contacts__header">Contacts</h2>
                <p className="contacts__content">
                    <ul>
                        gmail:
                        <li>iusmanof@gmail.com</li>
                        <li>
                            <a href="https://vk.com/iusmanof">vk link</a>
                        </li>
                        <li>
                            <a href="#">facebook link</a>
                        </li>
                        <li>
                            <a href="#">linkedin link</a>
                        </li>
                        <li>
                            <a href="#">discord link</a>
                        </li>
                        <li>
                            <a href="#">telegram link</a>
                        </li>
                        <li>Phone: +375 44 566 45 61</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Contacts;
