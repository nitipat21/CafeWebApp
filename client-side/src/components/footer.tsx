import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "framer-motion";
import { FC, useRef } from "react";

const Footer:FC = () => {

    const motionRef = useRef(null);

    const isInView = useInView(motionRef, {margin:"0px 0px -50px 0px", once: true });

    const motionStyle = {
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1.25s",
    }

    const redirectToFacebook = () => {
        window.location.href = 'https://www.facebook.com/';
    }

    const redirectToTwitter = () => {
        window.location.href = 'https://twitter.com/';
    }

    const redirectToInstagram = () => {
        window.location.href = 'https://www.instagram.com/';
    }

    const contactEmail = () => {
        window.location.href = 'mailto:coffeeShop@email.com';
    }

    const openGoogleMap = () => {
        window.location.href = 'https://www.google.com.au/maps/place/78+Creedon+St,+Fawkner+VIC+3060/@-37.7169234,144.9699142,17.81z/data=!4m5!3m4!1s0x6ad6452f1bc447e3:0x3905efb4eabe02f6!8m2!3d-37.7156355!4d144.9704708'
    }

    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="aboutUs-container">
                    <div className="aboutUs-header" ref={motionRef}>
                        <h3>ABOUT US</h3>
                    </div>
                    <div className="aboutUs-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad itaque aliquam. Natus est optio ipsum. Laborum nostrum ipsam voluptatum?</p>
                    </div>
                    <div className="aboutUs-icons" style={motionStyle}>
                        <div className="icon">
                            <FontAwesomeIcon icon={faFacebookF} onClick={redirectToFacebook}/>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faTwitter} onClick={redirectToTwitter}/>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faInstagram} onClick={redirectToInstagram}/>
                        </div>
                    </div>
                </div>
                <div className="contacts-container">
                    <div className="address">
                        <div className="address-icon" onClick={openGoogleMap}>
                            <FontAwesomeIcon icon={faLocationDot} style={{cursor:"pointer"}}/>
                        </div>
                        <div className="address-info" onClick={openGoogleMap}>
                            <p style={{cursor:"pointer"}}>78  Creedon Street, Melbourne, Victoria, 3051</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="address-icon">
                            <FontAwesomeIcon icon={faPhone}/>
                        </div>
                        <div className="phone-info">
                            <p style={{userSelect:"all"}}>(03) 8069 7484</p>
                        </div>
                    </div>
                    <div className="email">
                        <div className="address-icon" onClick={contactEmail}>
                            <FontAwesomeIcon icon={faEnvelope} style={{cursor:"pointer"}}/>
                        </div>
                        <div className="email-info" onClick={contactEmail}>
                            <p style={{cursor:"pointer"}}>CoffeeShop@gmail.com</p>
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