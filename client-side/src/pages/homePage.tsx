import { FC } from "react";
import Hero from "../components/hero";

const HomePage:FC = () => {
    return (
        <div className="homePage">
            <div className="homePage-wrapper">
                <Hero/>
            </div>
        </div>
    );
}

export default HomePage;