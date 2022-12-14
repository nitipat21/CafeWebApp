import { FC, useEffect } from "react";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import { useSelector } from 'react-redux';
import { RootState } from "../app/store";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Footer from "../components/footer";
import { AnimatePresence } from "framer-motion";

interface layoutProps {
    children: React.ReactNode;
}

const Layout:FC<layoutProps> = ({children}) => {

    const isShowSidebar = useSelector((state:RootState)=> state.frontEndSliceReducer.isShowSidebar);

    const { width } = useWindowDimensions();

    // disable scroll when show sidebar
    useEffect(()=>{
        if (isShowSidebar) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    },[isShowSidebar]);

    console.log("layout",width)

    return (
        <div className="layout">
            <div className="layout-wrapper">
                <Navbar/>
                <AnimatePresence>
                    {isShowSidebar && width?.width! < 768 ? <SideBar/> : null}
                </AnimatePresence>
                {children}
                <Footer/>
            </div>
        </div>
    );
}

export default Layout;