import React, {FC} from "react";
import "./Contacts.scss";
import {YMaps, Map, Placemark} from "react-yandex-maps";

import geolocation from "../../images/icons/geolocation.svg";
import phone from "../../images/icons/phone.svg";
import email from "../../images/icons/email.svg";
import linkedin from "../../images/icons/linkedin.svg";
import facebook from "../../images/icons/facebook.svg";
import vk from "../../images/icons/vk.svg";

const mapData = {
    center: [53.902531, 27.561481],
    zoom: 12
};

const coordinates = [
    [53.902531, 27.561481],
    [56.902531, 30.561481]
];

const widthMap = "520px";
const heightMap = "140px";

interface IProps {}

/**
 * @author
 * @function @Contacts
 **/

const Contacts: FC<IProps> = () => {
    return (
        <div>
            {" "}
            <div className="contacts">
                <h2 className="contacts__header">Contacts</h2>
                <p className="contacts__content">
                    <ul>
                        <li>
                            <img src={geolocation} alt="geolocation" />
                            <h3>Minsk</h3>
                        </li>
                        <li>
                            <img src={phone} alt="phone" />
                            <h3>+375 44 566 45 61</h3>
                        </li>
                        <li>
                            <img src={email} alt="email" />
                            <h3>iusmanof@gmail.com</h3>
                        </li>
                        <li>
                            <img src={linkedin} alt="linkedin" />
                            <h1>Ihar Usmanau</h1>
                        </li>
                        <li>
                            <img src={facebook} alt="facebook" />
                            <h1>Ihar Usmanau</h1>
                        </li>
                        <li>
                            <img src={vk} alt="vk" />
                            <h1>Ihar Usmanau</h1>
                        </li>
                    </ul>
                    <div className="contacts__map">
                        <YMaps>
                            <Map defaultState={mapData} width={widthMap} height={heightMap}>
                                {coordinates.map((coordinate) => (
                                    <Placemark geometry={coordinate} />
                                ))}
                            </Map>
                        </YMaps>
                    </div>
                </p>
            </div>
        </div>
    );
};

export default Contacts;
