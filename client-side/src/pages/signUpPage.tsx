import { FC } from "react";
import SignUpForm from "../components/signUpForm";

const SignUpPage:FC = () => {
    return (
        <div className="signUpPage">
            <div className="signUpPage-wrapper">
                <div className="signUpPage-title">
                    <h2>Create an account</h2>
                </div>
                <div className="signUpPage-form">
                    <SignUpForm/>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;