import { FC, useEffect, useRef, useState } from "react";
import Button from "./button";
import { useSelector } from 'react-redux';
import { RootState } from "../app/store";
import { useInView } from "framer-motion";

const Hero:FC = () => {

    const motionRef = useRef(null);

    const isInView = useInView(motionRef, {margin:"0px 0px -100px 0px", once: true });

    const motionStyle = {
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1.25s",
    }
    
    const heroContentList = useSelector((state:RootState)=> state.frontEndSliceReducer.heroContentList);

    const [slide, setSlide] = useState<number>(0);

    const OrderNow = () => {
        
    }

    const ViewMenu = () => {

    }

    // change background image every 10 second.
    useEffect(() => {
        const timer = setTimeout(() => {
            if (slide < 2) {
                setSlide(prev=> prev += 1);
            } else {
                setSlide(0);
            }
        }, 10000);

        return () => clearTimeout(timer);

      }, [slide]);

    return (
        <div className="hero" ref={motionRef}>
            <div className="hero-wrapper" style={{backgroundImage: `url('${heroContentList[slide].image}')`}}>
                <div className="hero-container">
                    <div className="hero-header" style={motionStyle}>
                        <h3>Welcome</h3>
                        <h1>{heroContentList[slide].header.toUpperCase()}</h1>
                    </div>
                    <div className="hero-content" style={motionStyle}>
                        <p>"{heroContentList[slide].content}"</p>
                    </div>
                    <div className="hero-button" style={motionStyle}>
                        <Button children="Order Now" border="1px solid #fff" backgroundColor="#fff" color="#000" onClick={OrderNow}/>
                        <Button children="View Menu" border="1px solid #fff" backgroundColor="transparent" color="#fff" onClick={ViewMenu}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;