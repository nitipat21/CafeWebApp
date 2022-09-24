import { faCartPlus, faMugHot, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

const Services:FC = () => {
    return (
        <div className="services">
            <div className="services-wrapper">
                <div className="service-item">
                    <div className="icon">
                        <FontAwesomeIcon icon={faCartPlus}/>
                    </div>
                    <div className="service-container">
                        <div className="header">
                            <h2>EASY TO ORDER</h2>
                        </div>
                        <div className="content">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel recusandae autem at maiores eaque dolore cumque, saepe ex quasi!</p>
                        </div>
                    </div>
                </div>
                <div className="service-item">
                    <div className="icon">
                        <FontAwesomeIcon icon={faTruckFast}/>
                    </div>
                    <div className="service-container">
                        <div className="header">
                            <h2>FASTEST DELIVERY</h2>
                        </div>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nostrum ducimus tempora aut id quibusdam, repudiandae molestiae deserunt totam recusandae!</p>
                        </div>
                    </div>
                </div>
                <div className="service-item">
                    <div className="icon">
                        <FontAwesomeIcon icon={faMugHot}/>
                    </div>
                    <div className="service-container">
                        <div className="header">
                            <h2>QUALITY COFFEE</h2>
                        </div>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, hic! Voluptatem, dolorum? Hic consequuntur vitae praesentium alias harum, vel maiores.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;