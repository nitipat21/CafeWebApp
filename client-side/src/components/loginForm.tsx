import { faCircleXmark, faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useRef, useState } from "react";
import Button from "./button";

const LoginForm:FC = () => {

    const usernameRef = useRef<HTMLInputElement | null>(null);

    const emailRef = useRef<HTMLInputElement | null>(null);

    const [showPassword, setShowPassword] = useState<Boolean>(false);

    const [isWarning, setIsWarning] = useState<Boolean>(false);

    const [focus, setFocus] = useState<String>("");

    const onClickUsername = () => {
        usernameRef.current?.focus();
    }

    const onClickEmail = () => {
        emailRef.current?.focus();
    }

    return (
        <div className="loginForm">
            <div className="loginForm-wrapper">
                <form>
                    <p><span>*</span> indicates required field</p>
                    <div className="username" onClick={onClickUsername}>
                        <div className="input">
                            <div className={`placeholder ${focus === "username" ? "focus" : ""}`}>* Username or email address</div>
                            <input
                                type="text" 
                                name="username" 
                                ref={usernameRef} 
                                id="username" 
                                onFocus={(event)=>{setFocus(event.target.id)}}
                                onBlur={()=>{setFocus("")}}
                            />
                            <div className="icon">
                                {isWarning && <FontAwesomeIcon icon={faCircleXmark}/>}
                            </div>
                        </div>
                        { isWarning && 
                            <div className="warning">
                                <FontAwesomeIcon icon={faXmark}/>
                                <p>Enter an email/username.</p>
                            </div>
                        }
                    </div>
                    <div className="email" onClick={onClickEmail}>
                        <div className="input">
                            <div className={`placeholder ${focus === "email" ? "focus" : ""}`}>* Password</div>
                            <input 
                                type="password" 
                                name="email" 
                                ref={emailRef} 
                                id="email" 
                                onFocus={(event)=>{setFocus(event.target.id)}}
                                onBlur={()=>{setFocus("")}}
                            />
                            <div className="icon">
                                { showPassword ? 
                                    <FontAwesomeIcon icon={faEye}/>
                                    :
                                    <FontAwesomeIcon icon={faEyeSlash}/>
                                }    
                                {isWarning && <FontAwesomeIcon icon={faCircleXmark}/>}
                            </div>
                        </div>
                        { isWarning && 
                            <div className="warning">
                                <FontAwesomeIcon icon={faXmark}/>
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
                                onClick={()=>{}}
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