import { FC } from "react";
import SignUpForm from "../components/signUpForm";
import { motion } from 'framer-motion';

const SignUpPage:FC = () => {

    const animationConfiguration = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <motion.div 
        className="signUpPage"
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.8 }}
        >
            <div className="signUpPage-wrapper">
                <div className="signUpPage-title">
                    <h2>Create an account</h2>
                </div>
                <div className="signUpPage-form">
                    <SignUpForm/>
                </div>
            </div>
        </motion.div>
    );
}

export default SignUpPage;