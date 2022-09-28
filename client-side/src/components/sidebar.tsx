import { motion } from "framer-motion";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleSidebar } from "../app/frontEndSlice";
import Button from "./button";

const SideBar:FC = () => {

    const animationConfiguration = {
        initial: { opacity: 0, x: window.innerWidth },
        animate: { opacity: 1, x:0 },
        exit: { opacity: 0, x: window.innerWidth },
        overlay_initial: { opacity: 0 },
        overlay_animate: { opacity: 0.38 },
        overlay_exit: { opacity: 0 }
    };

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const signIn = () => {
        navigate('/login');
        dispatch(toggleSidebar());
    }

    const signUp = () => {
        navigate('/signUp');
        dispatch(toggleSidebar());
    }

    return (
        <motion.div 
        className="sidebar"
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.8 }}
        key="sidebar"
        >
            <div className="sidebar-overlay" onClick={()=>{dispatch(toggleSidebar())}}>
                <motion.div 
                className="overlay"
                variants={animationConfiguration}
                initial="overlay_initial"
                animate="overlay_animate"
                exit="overlay_exit"
                transition={{ duration: 2.4 }}
                key="overlay">
                </motion.div>
            </div>
            <div className="sidebar-wrapper">
                <ul className="link-list">
                    <li><a href="">Menu/Order</a></li>
                    <li><a href="">Membership</a></li>
                </ul>
                <hr></hr>
                <div className="authentication">
                    <div className="signIn-button">
                        <Button children="Sign in" border="1px solid #000" backgroundColor="#fff" onClick={signIn}/>
                    </div>
                    <div className="signUp-button">
                        <Button children="Join now" border="1px solid #000" backgroundColor="#000" color="#fff" onClick={signUp}/>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default SideBar;