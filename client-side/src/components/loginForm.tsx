import { faCircleXmark, faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useRef, useState } from "react";
import Button from "./button";

const LoginForm:FC = () => {

    

    const [showPassword, setShowPassword] = useState<Boolean>(false);

    const [isWarning, setIsWarning] = useState<Boolean>(false);

    const [focus, setFocus] = useState<String>("");

    console.log(focus)

    return (
        <div className="loginForm">
            <div className="loginForm-wrapper">
                <form>
                    <p><span>*</span> indicates required field</p>
                    <div className="username">
                        <div className="input">
                            <div className={`placeholder ${focus === "username" ? "focus" : ""}`}>* Username or email address</div>
                            <input type="text" name="username" id="username" onFocus={(event)=>{setFocus(event.target.id)}}/>
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
                    <div className="email">
                        <div className="input">
                            <div className={`placeholder ${focus === "email" ? "focus" : ""}`}>* Password</div>
                            <input type="password" name="email" id="email" onFocus={(event)=>{setFocus(event.target.id)}}/>
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