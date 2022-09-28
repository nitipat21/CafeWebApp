import { FC } from "react";
import LoginForm from "../components/loginForm";
import { motion } from 'framer-motion';

const LoginPage:FC = () => {

    const animationConfiguration = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <motion.div 
        className="loginPage"
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.8 }}
        >
            <div className="loginPage-wrapper">
                <div className="loginPage-title">
                    <h2>Sign in</h2>
                </div>
                <div className="loginPage-form">
                    <LoginForm/>
                </div>
            </div>
        </motion.div>
    );
}

export default LoginPage;