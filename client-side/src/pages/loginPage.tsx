import { FC } from "react";
import LoginForm from "../components/loginForm";

const LoginPage:FC = () => {
    return (
        <div className="loginPage">
            <div className="loginPage-wrapper">
                <div className="loginPage-title">
                    <h2>Sign in</h2>
                </div>
                <div className="loginPage-form">
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;