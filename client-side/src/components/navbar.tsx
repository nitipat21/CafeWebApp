import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useDispatch } from 'react-redux'
import { toggleSidebar } from "../app/frontEndSlice";
import Button from "./button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Navbar:FC = () => {

    const { width } = useWindowDimensions();

    const isShowSidebar = useSelector((state:RootState) => state.frontEndSliceReducer.isShowSidebar);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const signIn = () => {
        navigate('/login');
    }

    const signUp = () => {
        navigate('/signUp');
    }

    const redirectToHome = () => {
        navigate('/');
        if (isShowSidebar) {
            dispatch(toggleSidebar());
        }
    }

    return (
        <div className="navbar">
            <div className="navbar-wrapper">
                <div className="left-section">
                    <div className="logo" onClick={redirectToHome} style={{cursor:"pointer"}}>
                        <h3>Coffee<br></br>Shop</h3>
                    </div>
                    {   width > 768 &&
                        <ul className="link-list">
                            <li><a href="">Menu/Order</a></li>
                            <li><a href="">Membership</a></li>
                        </ul>
                    }
                </div>
                {   width < 768 ?
                    <div className="hamburger" onClick={()=> dispatch(toggleSidebar())}>
                        {   isShowSidebar ?
                            <FontAwesomeIcon icon={faXmark} size={"2x"}/>
                            :
                            <FontAwesomeIcon icon={faBars} size={"2x"}/>
                        }
                    </div>
                    :
                    <div className="right-section">
                        <div className="authentication">
                            <div className="signIn-button">
                                <Button children="Sign in" border="1px solid #000" backgroundColor="#fff" onClick={signIn}/>
                            </div>
                            <div className="signUp-button">
                                <Button children="Join now" border="1px solid #000" backgroundColor="#000" color="#fff" onClick={signUp}/>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Navbar;