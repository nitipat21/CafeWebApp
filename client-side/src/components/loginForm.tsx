import { faCircleXmark, faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useRef, useState } from "react";
import Button from "./button";

const LoginForm:FC = () => {

    const usernameRef = useRef<HTMLInputElement | null>(null);

    const emailRef = useRef<HTMLInputElement | null>(null);

    const [username, setUsername] = useState("");

    const [email, setEmail] = useState("");

    const [isSubmit, setIsSubmit] = useState(false);

    const [showPassword, setShowPassword] = useState<Boolean>(false);

    const [isWarning, setIsWarning] = useState<Boolean>(false);

    const [focus, setFocus] = useState<String>("");

    const onClickUsername = () => {
        usernameRef.current?.focus();
    }

    const onClickEmail = () => {
        emailRef.current?.focus();
    }

    const onSubmit = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsSubmit(true);

        if (!username || !email) {
            setIsWarning(true);
        } else {
            // login
        }
        
    }

    return (
        <div className="loginForm">
            <div className="loginForm-wrapper">
                <form>
                    <p><span>*</span> indicates required field</p>
                    <div className="username" onClick={onClickUsername}>
                        <div className="input">
                            <div className={
                                `placeholder 
                                ${(focus === "username" || username) && "focus"} 
                                ${focus !== 'username' && "black-text"}
                                ${(isWarning && !username) && "warning-text"}
                                `
                            }>* Username or email address</div>
                            <input
                                type="text" 
                                name="username" 
                                ref={usernameRef} 
                                id="username" 
                                onFocus={(event)=>{setFocus(event.target.id)}}
                                onBlur={()=>{setFocus("")}}
                                value={username}
                                onChange={(event)=>{setUsername(event.target.value)}}
                                className={`${(isWarning && !username) && "warning-input"}`}
                            />
                            <div className="icon">
                                {(isWarning && !username) && <FontAwesomeIcon icon={faCircleXmark} style={{color: '#d62b1f'}}/>}
                            </div>
                        </div>
                        { (isWarning && !username) && 
                            <div className="warning">
                                <FontAwesomeIcon icon={faXmark} style={{color: '#d62b1f'}}/>
                                <p>Enter an email/username.</p>
                            </div>
                        }
                    </div>
                    <div className="email" onClick={onClickEmail}>
                        <div className="input">
                            <div className={
                                `placeholder
                                ${(focus === "email" || email) && "focus"} 
                                ${focus !== "email" && "black-text"}
                                ${(isWarning && !email) && "warning-text"}
                                `
                            }>* Password</div>
                            <input 
                                type="password" 
                                name="email" 
                                ref={emailRef} 
                                id="email" 
                                onFocus={(event)=>{setFocus(event.target.id)}}
                                onBlur={()=>{setFocus("")}}
                                value={email}
                                onChange={(event)=>{setEmail(event.target.value)}}
                                className={`${(isWarning && !email) && "warning-input"}`}
                            />
                            <div className="icon">
                                { showPassword ? 
                                    <FontAwesomeIcon icon={faEye} style={{opacity: '0.3'}}/>
                                    :
                                    <FontAwesomeIcon icon={faEyeSlash} style={{opacity: '0.3'}}/>
                                }    
                                {(isWarning && !email) && <FontAwesomeIcon icon={faCircleXmark} style={{color: '#d62b1f'}}/>}
                            </div>
                        </div>
                        { (isWarning && !email) && 
                            <div className="warning">
                                <FontAwesomeIcon icon={faXmark} style={{color: '#d62b1f'}}/>
                                <p>Enter a password.</p>
                            </div>
                        }
                    </div>
                    <div className="keepMe">
                        <input type="checkbox" name="keepMe" id="keepMe"/>
                        <label htmlFor="keepMe">Keep me signed in</label>
                    </div>
                    <div className="forgetPassword">
                        <a>Forgot your password?</a>
                    </div>
                    <div className="submit">
                        <Button children={"Sign in"}
                                onClick={onSubmit}
                                border={"2px solid #000"}
                                backgroundColor={"transparent"}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;