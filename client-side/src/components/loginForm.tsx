import { faCircleXmark, faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useRef, useState } from "react";
import Button from "./button";

const LoginForm:FC = () => {

    const usernameRef = useRef<HTMLInputElement | null>(null);

    const passwordRef = useRef<HTMLInputElement | null>(null);

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState<Boolean>(false);

    const [isWarning, setIsWarning] = useState<Boolean>(false);

    const [focus, setFocus] = useState<String>("");

    const onClickUsername = () => {
        usernameRef.current?.focus();
    }

    const onClickPassword = () => {
        passwordRef.current?.focus();
    }

    const onSubmit = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (!username || !password) {
            setIsWarning(true);
        } else {
            // login
        }
        
    }

    return (
        <div className="loginForm">
            <div className="loginForm-wrapper">
                <form>
                    <p style={{marginBottom: '0'}}><span>*</span> indicates required field</p>
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
                    <div className="password" onClick={onClickPassword}>
                        <div className="input">
                            <div className={
                                `placeholder
                                ${(focus === "password" || password) && "focus"} 
                                ${focus !== "password" && "black-text"}
                                ${(isWarning && !password) && "warning-text"}
                                `
                            }>* Password</div>
                            <input 
                                type={`${showPassword ? "text" : "password"}`} 
                                name="password" 
                                ref={passwordRef} 
                                id="password" 
                                onFocus={(event)=>{setFocus(event.target.id)}}
                                onBlur={()=>{setFocus("")}}
                                value={password}
                                onChange={(event)=>{setPassword(event.target.value)}}
                                className={`${(isWarning && !password) && "warning-input"}`}
                            />
                            <div className="icon">
                                { showPassword ? 
                                    <FontAwesomeIcon icon={faEye} style={{opacity: '0.3'}} onClick={()=>{setShowPassword(false)}}/>
                                    :
                                    <FontAwesomeIcon icon={faEyeSlash} style={{opacity: '0.3'}} onClick={()=>{setShowPassword(true)}}/>
                                }    
                                {(isWarning && !password) && <FontAwesomeIcon icon={faCircleXmark} style={{color: '#d62b1f'}}/>}
                            </div>
                        </div>
                        { (isWarning && !password) && 
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