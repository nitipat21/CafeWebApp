import { FC, useEffect, useState } from "react";
import Button from "./button";
import { useSelector } from 'react-redux';
import { RootState } from "../app/store";

const Hero:FC = () => {
    
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
        <div className="hero">
            <div className="hero-wrapper" style={{backgroundImage: `url('${heroContentList[slide].image}')`}}>
                <div className="hero-container">
                    <div className="hero-header">
                        <h3>Welcome</h3>
                        <h1>{heroContentList[slide].header.toUpperCase()}</h1>
                    </div>
                    <div className="hero-content">
                        <p>"{heroContentList[slide].content}"</p>
                    </div>
                    <div className="hero-button">
                        <Button children="Order Now" border="1px solid #fff" backgroundColor="#000" color="#fff" onClick={OrderNow}/>
                        <Button children="View Menu" border="1px solid #fff" backgroundColor="transparent" color="#fff" onClick={ViewMenu}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;