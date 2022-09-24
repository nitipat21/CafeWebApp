import { FC } from "react";
import storyImage from '../assets/items/story.jpg';

const Story:FC = () => {
    return (
        <div className="story">
            <div className="story-wrapper">
                <div className="image-container">
                    <img src={storyImage} alt="story"/>
                </div>
                <div className="story-container">
                    <div className="story-header">
                        <h2>OUR STORY</h2>
                    </div>
                    <div className="story-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit non accusamus possimus necessitatibus, quo expedita debitis ducimus aliquam cumque adipisci omnis, neque incidunt error! Consequatur magni obcaecati, laboriosam cumque vel voluptatum quisquam minus esse quo accusamus sed ipsam placeat eveniet temporibus neque maiores incidunt dolorem ut quam, praesentium repudiandae.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Story;