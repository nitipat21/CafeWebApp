import { faFacebook, faFacebookF, faFacebookSquare, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

const Footer:FC = () => {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="aboutUs-container">
                    <div className="aboutUs-header">
                        <h3>About Us</h3>
                    </div>
                    <div className="aboutUs-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad itaque aliquam. Natus est optio ipsum. Laborum nostrum ipsam voluptatum?</p>
                    </div>
                    <div className="aboutUs-icons">
                        <div className="icon">
                            <FontAwesomeIcon icon={faFacebookF}/>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </div>
                    </div>
                </div>
                <div className="contacts-container">
                    <div className="address">
                        <div className="address-icon">
                            <FontAwesomeIcon icon={faLocationDot}/>
                        </div>
                        <div className="address-info">
                            <p>78  Creedon Street, Melbourne, Victoria, 3051</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="address-icon">
                            <FontAwesomeIcon icon={faPhone}/>
                        </div>
                        <div className="phone-info">
                            <p>(03) 8069 7484</p>
                        </div>
                    </div>
                    <div className="email">
                        <div className="address-icon">
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </div>
                        <div className="email-info">
                            <p>CoffeeShop@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="copyright-container">
                    <div className="copyright">
                        <p><small>© 2022 CoffeeShop. All rights reserved.</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;