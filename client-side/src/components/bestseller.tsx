import { useInView } from "framer-motion";
import { FC, useRef, useState } from "react";
import bestsellerImage from '../assets/items/bestseller.jpg';
import Button from "./button";

const Bestseller:FC = () => {

    const motionRef = useRef(null);

    const isInView = useInView(motionRef, {margin:"0px 0px -100px 0px", once: true });

    const motionStyle = {
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1.25s",
    }

    const [bestsellerList, setBestSellerList] = useState<null[]>([null, null, null, null]);

    const bestsellerElement = bestsellerList.map((value, index) => {
        return (
            <div className="bestsellerItem" key={`${value}${index}`}>
                <div className="image">
                    <img src={bestsellerImage} alt="bestseller"/>
                </div>
                <div className="info">
                    <h3>COFFEE CAPUCCINO</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, veniam?</p>
                </div>
                <div className="button">
                    <Button children="Order Now" border="1px solid #fff" backgroundColor="transparent" color="#fff" onClick={()=>{}}/>
                </div>
            </div>
        );
    });

    return (
        <div className="bestseller" ref={motionRef}>
            <div className="bestseller-wrapper" >
                <div className="title-container" style={motionStyle}>
                    <div className="header">
                        <h2>BEST COFFEE SELLERS</h2>
                    </div>
                    <div className="content" style={motionStyle}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum maxime, quae sint aut eum!</p>
                    </div>
                </div>
                <div className="bestseller-container" style={motionStyle}>
                    {bestsellerElement}
                </div>
            </div>
        </div>
    );
}

export default Bestseller;