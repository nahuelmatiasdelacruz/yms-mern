import React from "react";
import "../../styles/component-styles/side.css";
import Logo from "../../img/pedidosya.svg";
/* Icons */
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrafficIcon from '@mui/icons-material/Traffic';
import AssessmentIcon from '@mui/icons-material/Assessment';
import OutboundRoundedIcon from '@mui/icons-material/OutboundRounded';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
    const navigate = useNavigate();
    return(
        <div className="side-component">
            <div className="side-header">
                <img src={Logo} alt="Logo"/>
            </div>
            <Divider variant="middle"/>
            <div className="links-container">
                <button className="side-link" type="button" onClick={()=>{navigate("/")}}>
                    <DashboardIcon/>
                    <span>Dashboard</span>
                </button>
                <button className="side-link" type="button" onClick={()=>{navigate("/camiones-espera")}}>
                    <LocalShippingIcon/>
                    <span>Camiones en espera</span>
                </button>
                <button className="side-link" type="button" onClick={()=>{navigate("/camiones-darsena")}}>
                    <TrafficIcon/>
                    <span>Camiones en darsena</span>
                </button>
                <button className="side-link" type="button" onClick={()=>{navigate("/camiones-salida")}}>
                    <OutboundRoundedIcon/>
                    <span>Camiones en salida</span>
                </button>
                <button className="side-link" type="button" onClick={()=>{navigate("/reportes")}}>
                    <AssessmentIcon/>
                    <span>Reportes</span>
                </button>
                <button className="side-link" type="button" onClick={()=>{navigate("/gestion")}}>
                    <ModeEditIcon/>
                    <span>Gestión ABM</span>
                </button>
            </div>
        </div>
    )
}

export default SideMenu;