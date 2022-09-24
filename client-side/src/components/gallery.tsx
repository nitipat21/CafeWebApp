import { FC } from "react";
import item1 from "../assets/items/gallery1.jpg";
import item2 from "../assets/items/gallery2.jpg";
import item3 from "../assets/items/gallery3.jpg";
import item4 from "../assets/items/gallery4.jpg";


const Gallery:FC = () => {
    return (
        <div className="gallery">
            <div className="gallery-wrapper">
                <div className="item">
                    <img src={item1} alt="item1"/>
                </div>
                <div className="item">
                    <img src={item2} alt="item2"/>
                </div>
                <div className="item">
                    <img src={item3} alt="item3"/>
                </div>
                <div className="item">
                    <img src={item4} alt="item4"/>
                </div>
            </div>
        </div>
    );
}

export default Gallery;