import React from "react";
/* Icons*/
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TransitEnterexitIcon from '@mui/icons-material/TransitEnterexit';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import TrafficIcon from '@mui/icons-material/Traffic';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import Badge from '@mui/material/Badge';
import MyResponsiveLine from "./chart";

const Index = () => {

    return(
        <div className="index-component">
            <div className="index-header">
                <DashboardIcon fontSize="large"/>
                <h4>Dashboard</h4>
            </div>
            <div className="dashboard-cards">
                <div className="card">
                    <div className="card-details">
                        <h4>Camiones en espera</h4>
                        <span>Camiones a la espera de asignación de recorrido</span>
                    </div>
                    <div className="card-icon">
                        <Badge badgeContent={4} color="error">
                            <HourglassTopIcon fontSize="large" color="primary"/>
                        </Badge>
                    </div>
                </div>
                <div className="card">
                    <div className="card-details">
                        <h4>Camiones en darsena</h4>
                        <span>Camiones cargando o descargando productos</span>
                    </div>
                    <div className="card-icon">
                        <Badge badgeContent={6} color="success">
                            <LocalShippingIcon fontSize="large" color="primary"/>
                        </Badge>
                    </div>
                </div>
                <div className="card">
                    <div className="card-details">
                        <h4>Camiones en salida</h4>
                        <span>Camiones que han completado su recorrido</span>
                    </div>
                    <div className="card-icon">
                        <Badge badgeContent={3} color="secondary">
                            <TransitEnterexitIcon fontSize="large" color="primary"/>
                        </Badge>
                    </div>
                </div>
                <div className="card">
                    <div className="card-details">
                        <h4>Darsenas ocupadas</h4>
                        <span>Darsenas ocupadas en este momento</span>
                    </div>
                    <div className="card-icon">
                        <Badge badgeContent={6} color="warning">
                            <TrafficIcon fontSize="large" color="primary"/>
                        </Badge>
                    </div>
                </div>
            </div>
            <div className="dashboard-chart">
                <div className="chart-header">
                    <InsertChartIcon fontSize="large" color="primary"/>
                    <h4>Flujo de camiones diario</h4>
                </div>
                <MyResponsiveLine/>
            </div>
        </div>
    )
}

export default Index;