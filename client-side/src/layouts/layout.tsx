import { FC } from "react";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import { useSelector } from 'react-redux';
import { RootState } from "../app/store";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Layout:FC = () => {

    const isShowSidebar = useSelector((state:RootState)=> state.frontEndSliceReducer.isShowSidebar);

    const { width } = useWindowDimensions();

    return (
        <div className="layout">
            <div className="layout-wrapper">
                <Navbar/>
                {isShowSidebar && width < 768 ? <SideBar/> : null}
            </div>
        </div>
    );
}

export default Layout;