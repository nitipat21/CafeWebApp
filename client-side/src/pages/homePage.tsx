import { FC } from "react";
import Bestseller from "../components/bestseller";
import Gallery from "../components/gallery";
import Hero from "../components/hero";
import Info from "../components/info";
import Services from "../components/services";
import Story from "../components/story";
import { motion } from 'framer-motion';

const HomePage:FC = () => {

    const animationConfiguration = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <motion.div 
        className="homePage"
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.8 }}
        >
            <div className="homePage-wrapper">
                <Hero/>
                <Info/>
                <Story/>
                <Services/>
                <Bestseller/>
                <Gallery/>
            </div>
        </motion.div>
    );
}

export default HomePage;