import { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleSidebar } from "../app/frontEndSlice";
import Button from "./button";

const SideBar:FC = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const signIn = () => {
        navigate('/login');
        dispatch({type:toggleSidebar});
    }

    const signUp = () => {
        navigate('/signUp');
        dispatch({type:toggleSidebar});
    }

    return (
        <div className="sidebar">
            <div className="sidebar-overlay">
                <div className="overlay"></div>
            </div>
            <div className="sidebar-wrapper">
                <ul className="link-list">
                    <li><a href="">Menu/Order</a></li>
                    <li><a href="">Membership</a></li>
                </ul>
                <hr></hr>
                <div className="authentication">
                    <div className="signIn-button">
                        <Button children="Sign in" border="1px solid #000" backgroundColor="#fff" onClick={signIn}/>
                    </div>
                    <div className="signUp-button">
                        <Button children="Join now" border="1px solid #000" backgroundColor="#000" color="#fff" onClick={signUp}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;