import { useInView } from "framer-motion";
import { FC, useRef } from "react";
import storyImage from '../assets/items/story.jpg';

const Story:FC = () => {

    const motionRef = useRef(null);

    const isInView = useInView(motionRef, {margin:"0px 0px -100px 0px", once: true });

    const motionStyle = {
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1.25s",
    }

    return (
        <div className="story">
            <div className="story-wrapper" >
                <div className="image-container">
                    <img src={storyImage} alt="story"/>
                </div>
                <div className="story-container" ref={motionRef}>
                    <div className="story-header" style={motionStyle}>
                        <h2>OUR STORY</h2>
                    </div>
                    <div className="story-content" style={motionStyle}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit non accusamus possimus necessitatibus, quo expedita debitis ducimus aliquam cumque adipisci omnis, neque incidunt error! Consequatur magni obcaecati, laboriosam cumque vel voluptatum quisquam minus esse quo accusamus sed ipsam placeat eveniet temporibus neque maiores incidunt dolorem ut quam, praesentium repudiandae.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Story;