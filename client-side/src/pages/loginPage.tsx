import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import LoginForm from "../components/loginForm";

const LoginPage:FC = () => {
    return (
        <div className="loginPage">
            <div className="loginPage-wrapper">
                <div className="loginPage-title">
                    <h2>Sign in or create an account</h2>
                </div>
                <div className="loginPage-form">
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;