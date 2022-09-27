import { faCheck, faCircleXmark, faEye, faEyeSlash, faUpRightFromSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useRef, useState } from "react";
import Button from "./button";

const SignUpForm:FC = () => {

    const firstNameRef = useRef<HTMLInputElement | null>(null);

    const lastNameRef = useRef<HTMLInputElement | null>(null);

    const usernameRef = useRef<HTMLInputElement | null>(null);

    const passwordRef = useRef<HTMLInputElement | null>(null);

    const [firstName, setFirstName] = useState("");

    const [lastName, setLastName] = useState("");

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const [isWarning, setIsWarning] = useState<boolean>(false);

    const [isStrongPassword, setIsStrongPassword] = useState<boolean>(false);

    const [isAgree, setIsAgree] = useState<boolean>(false);

    const [focus, setFocus] = useState<string>("");

    const [count, setCount] = useState<number>(0);

    const onClickFirstName = () => {
        firstNameRef.current?.focus();
    }

    const onClickLastName = () => {
        lastNameRef.current?.focus();
    }

    const onClickUsername = () => {
        usernameRef.current?.focus();
    }

    const onClickPassword = () => {
        passwordRef.current?.focus();
    }

    const onSubmit = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (!firstName || !lastName || !username || !password) {
            setIsWarning(true);
            // if (!firstName) {
            //     firstNameRef.current?.focus();
            // } else if (!lastName) {
            //     lastNameRef.current?.focus();
            // } else if (!username) {
            //     usernameRef.current?.focus();
            // } else {
            //     passwordRef.current?.focus();
            // }
        } else {
            // signUp
        }
        
    }

    return (
        <div className="signUpForm">
            <div className="signUpForm-wrapper">
                <form>
                    <p style={{marginBottom: '-1rem'}}><span>*</span> indicates required field</p>
                    <div className="section-header">
                        <h3>Personal Information</h3>
                    </div>
                    <div className="firstName">
                        <div className="input" onClick={onClickFirstName}>
                            <div className={
                                `placeholder 
                                ${(focus === "firstName" || firstName) && "focus"} 
                                ${focus !== 'firstName' && "black-text"}
                                ${(isWarning && !firstName) && "warning-text"}
                                `
                            }>* First name</div>
                            <input
                                type="text" 
                                name="firstName" 
                                ref={firstNameRef} 
                                id="firstName" 
                                onFocus={(event)=>{setFocus(event.target.id)}}
                                onBlur={()=>{setFocus("")}}
                                value={firstName}
                                onChange={(event)=>{setFirstName(event.target.value)}}
                                className={`${(isWarning && !firstName) && "warning-input"}`}
                            />
                            <div className="icon">
                                {(isWarning && !firstName) && <FontAwesomeIcon icon={faCircleXmark} style={{color: '#d62b1f'}}/>}
                            </div>
                        </div>
                        { (isWarning && !firstName) && 
                            <div className="warning">
                                <FontAwesomeIcon icon={faXmark} style={{color: '#d62b1f'}}/>
                                <p>Enter your first name.</p>
                            </div>
                        }
                    </div>
                    <div className="lastName">
                        <div className="input" onClick={onClickLastName}>
                            <div className={
                                `placeholder 
                                ${(focus === "lastName" || lastName) && "focus"} 
                                ${focus !== 'lastName' && "black-text"}
                                ${(isWarning && !lastName) && "warning-text"}
                                `
                            }>* Last Name</div>
                            <input
                                type="text" 
                                name="lastName" 
                                ref={lastNameRef} 
                                id="lastName" 
                                onFocus={(event)=>{setFocus(event.target.id)}}
                                onBlur={()=>{setFocus("")}}
                                value={lastName}
                                onChange={(event)=>{setLastName(event.target.value)}}
                                className={`${(isWarning && !lastName) && "warning-input"}`}
                            />
                            <div className="icon">
                                {(isWarning && !lastName) && <FontAwesomeIcon icon={faCircleXmark} style={{color: '#d62b1f'}}/>}
                            </div>
                        </div>
                        { (isWarning && !lastName) && 
                            <div className="warning">
                                <FontAwesomeIcon icon={faXmark} style={{color: '#d62b1f'}}/>
                                <p>Enter your last name.</p>
                            </div>
                        }
                    </div>
                    <div className="section-header">
                        <h3>Account Security</h3>
                    </div>
                    <div className="username">
                        <div className="input" onClick={onClickUsername}>
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
                        <p style={{fontSize:'90%'}}>This will be your username</p>
                    </div>
                    <div className="password">
                        <div className="input" onClick={onClickPassword}>
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
                                {isWarning && <FontAwesomeIcon icon={faCircleXmark} style={{color: '#d62b1f'}}/>}
                            </div>
                        </div>
                        { isWarning && 
                            <>
                                <div className="warning">
                                    {password.length > 8 ? 
                                        <FontAwesomeIcon icon={faCheck} style={{color: '#006241'}}/>
                                        :
                                        <FontAwesomeIcon icon={faXmark} style={{color: '#d62b1f'}}/>
                                    }
                                    <p>From 8 to 25 characters</p>
                                </div>
                                <div className="warning">
                                    {/\d/.test(password) ?
                                        <FontAwesomeIcon icon={faCheck} style={{color: '#006241'}}/>
                                        :
                                        <FontAwesomeIcon icon={faXmark} style={{color: '#d62b1f'}}/>
                                    }
                                    <p>At least one number</p>
                                </div>
                                <div className="warning">
                                    {/[A-Z]/.test(password) ?
                                        <FontAwesomeIcon icon={faCheck} style={{color: '#006241'}}/>
                                        :
                                        <FontAwesomeIcon icon={faXmark} style={{color: '#d62b1f'}}/>
                                    }
                                    <p>At least one capital letter</p>
                                </div>
                                <div className="warning">
                                    {/[a-z]/.test(password) ?
                                        <FontAwesomeIcon icon={faCheck} style={{color: '#006241'}}/>
                                        :
                                        <FontAwesomeIcon icon={faXmark} style={{color: '#d62b1f'}}/>
                                    }
                                    <p>At least one lowercase letter</p>
                                </div>
                                <div className="warning">
                                    {/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password) ?
                                        <FontAwesomeIcon icon={faCheck} style={{color: '#006241'}}/>
                                        :
                                        <FontAwesomeIcon icon={faXmark} style={{color: '#d62b1f'}}/>
                                    }
                                    <p>At least one special character such as exclamation point or comma</p>
                                </div>
                            </>
                        }
                        <p style={{fontSize:'90%'}}>Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.</p>
                    </div>
                    <div className="section-header">
                        <h3>Email subscription</h3>
                        <p>Email is a great way to know about offers and what's new from CoffeeShop.</p>
                    </div>
                    <div className="checkbox subscription">
                        <input type="checkbox" name="subscription" id="subscription"/>
                        <label htmlFor="subscription">
                            <span>Yes, I'd like email from CoffeeShop</span>
                            <br></br>
                            <br></br>
                            <span style={{marginTop: '1rem'}}>Know about initiatives, announcements and product offers.</span>
                        </label>
                    </div>
                    <div className="section-header">
                        <h3>Terms of Use</h3>
                    </div>
                    <div className="checkbox terms">
                        <input type="checkbox" name="terms" id="terms"/>
                        <label htmlFor="terms">
                            <span>
                            I agree to the 
                                <span>
                                    <a href=""> CoffeeShop Rewards Terms <FontAwesomeIcon icon={faUpRightFromSquare}/> </a>
                                    
                                </span>
                            and the 
                                <span>
                                    <a href=""> CoffeeShop Membership Terms <FontAwesomeIcon icon={faUpRightFromSquare}/> </a>
                                    
                                </span>
                            and have read the
                                <span>
                                    <a href=""> CoffeeShop Privacy Statement <FontAwesomeIcon icon={faUpRightFromSquare}/></a>
                            .
                                </span>
                            </span>
                        </label>
                    </div>
                    <div className="forgetPassword">
                        <a>Forgot your password?</a>
                    </div>
                    <div className="submit">
                        <Button children={"Create account"}
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

export default SignUpForm;