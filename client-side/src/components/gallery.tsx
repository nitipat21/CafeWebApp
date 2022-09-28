import { useInView } from "framer-motion";
import { FC, useRef } from "react";
import item1 from "../assets/items/gallery1.jpg";
import item2 from "../assets/items/gallery2.jpg";
import item3 from "../assets/items/gallery3.jpg";
import item4 from "../assets/items/gallery4.jpg";


const Gallery:FC = () => {

    const motionRef = useRef(null);

    const isInView = useInView(motionRef, {margin:"0px 0px -100px 0px", once: true });

    const motionStyle = {
        opacity: isInView ? 1 : 0,
        transition: "all 1.25s",
    }

    return (
        <div className="gallery">
            <div className="gallery-wrapper" ref={motionRef}>
                <div className="item" style={motionStyle}>
                    <img src={item1} alt="item1"/>
                </div>
                <div className="item" style={motionStyle}>
                    <img src={item2} alt="item2"/>
                </div>
                <div className="item" style={motionStyle}>
                    <img src={item3} alt="item3"/>
                </div>
                <div className="item" style={motionStyle}>
                    <img src={item4} alt="item4"/>
                </div>
            </div>
        </div>
    );
}

export default Gallery;