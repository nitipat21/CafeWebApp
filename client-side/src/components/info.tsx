import { faClock, faLocationCrosshairs, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

const Info:FC = () => {
    return (
        <div className="info">
            <div className="info-wrapper">
                <div className="info-container">
                    <div className="icon">
                        <FontAwesomeIcon icon={faPhoneAlt}/>
                    </div>
                    <div className="info">
                        <h3>(03) 8039 7484</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptate.</p>
                    </div>
                </div>
                <div className="info-container">
                    <div className="icon">
                        <FontAwesomeIcon icon={faLocationCrosshairs}/>
                    </div>
                    <div className="info">
                        <h3>78 Creedon Street</h3>
                        <p>Melbourne, Victoria, 3051</p>
                    </div>
                </div>
                <div className="info-container">
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