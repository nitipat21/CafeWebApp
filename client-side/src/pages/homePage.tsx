import { FC } from "react";
import Bestseller from "../components/bestseller";
import Hero from "../components/hero";
import Info from "../components/info";
import Services from "../components/services";
import Story from "../components/story";

const HomePage:FC = () => {

    return (
        <div className="homePage">
            <div className="homePage-wrapper">
                <Hero/>
                <Info/>
                <Story/>
                <Services/>
                <Bestseller/>
            </div>
        </div>
    );
}

export default HomePage;