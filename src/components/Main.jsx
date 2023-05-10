import React, { useEffect } from "react";
import SideMenu from "./sidemenu/Sidemenu";
import { Outlet, useNavigate } from "react-router-dom";
import "../styles/component-styles/main.css";

const Main = ({isLoggedIn}) => {
    const navigate = useNavigate();

    useEffect(()=>{
        if(!isLoggedIn) navigate("/login");
    },[]);
    return(
        <div className="main-component">
            <SideMenu/>
            <div className="main-content">
                <Outlet/>
            </div>
        </div>
    )
}

export default Main;