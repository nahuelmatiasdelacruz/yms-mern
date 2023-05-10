import './styles/index.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Main from './components/Main';
import Index from './components/Index';
import CamionesEspera from './components/CamionesEspera/CamionesEspera';
import CamionesDarsena from './components/CamionesDarsena/CamionesDarsena';
import CamionesSalida from './components/CamionesSalida/CamionesSalida';
import Reportes from "./components/Reportes/Reportes";
import Gestion from "./components/Gestion/Gestion";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(true);
  useEffect(()=>{
    // const token = sessionStorage.getItem("token") || "token";
    // if(token){
    //   setIsLoggedIn(true);
    // }
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login setLogin={setIsLoggedIn}/>}/>
        <Route exact path="/" element={<Main isLoggedIn={isLoggedIn}/>}>
          <Route index element={<Index/>}/>
          <Route exact path="/camiones-espera" element={<CamionesEspera/>}/>
          <Route exact path="/camiones-darsena" element={<CamionesDarsena/>}/>
          <Route exact path="/camiones-salida" element={<CamionesSalida/>}/>
          <Route exact path="/reportes" element={<Reportes/>}/>
          <Route exact path="/gestion" element={<Gestion/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
