import { faClock, faLocationCrosshairs, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "framer-motion";
import { FC, useRef } from "react";

const Info:FC = () => {

    const motionRef = useRef(null);

    const isInView = useInView(motionRef, {margin:"0px 0px -100px 0px", once: true });

    const motionStyle = {
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1.25s",
    }

    const openGoogleMap = () => {
        window.location.href = 'https://www.google.com.au/maps/place/78+Creedon+St,+Fawkner+VIC+3060/@-37.7169234,144.9699142,17.81z/data=!4m5!3m4!1s0x6ad6452f1bc447e3:0x3905efb4eabe02f6!8m2!3d-37.7156355!4d144.9704708'
    }

    return (
        <div className="info">
            <div className="info-wrapper" ref={motionRef}>
                <div className="info-container" style={motionStyle}>
                    <div className="icon">
                        <FontAwesomeIcon icon={faPhoneAlt}/>
                    </div>
                    <div className="info">
                        <h3 style={{userSelect:"all"}}>(03) 8039 7484</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptate.</p>
                    </div>
                </div>
                <div className="info-container" style={motionStyle}>
                    <div className="icon" onClick={openGoogleMap} style={{cursor:"pointer"}}>
                        <FontAwesomeIcon icon={faLocationCrosshairs}/>
                    </div>
                    <div className="info" onClick={openGoogleMap} style={{cursor:"pointer"}}>
                        <h3>78 Creedon Street</h3>
                        <p>Melbourne, Victoria, 3051</p>
                    </div>
                </div>
                <div className="info-container" style={motionStyle}>
                    <div className="icon">
                        <FontAwesomeIcon icon={faClock}/>
                    </div>
                    <div className="info">
                        <h3>Open Monday-Friday</h3>
                        <p>8:00am - 9:00pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;