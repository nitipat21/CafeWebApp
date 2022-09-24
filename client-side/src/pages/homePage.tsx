import { FC } from "react";
import Bestseller from "../components/bestseller";
import Gallery from "../components/gallery";
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
                <Gallery/>
            </div>
        </div>
    );
}

export default HomePage;