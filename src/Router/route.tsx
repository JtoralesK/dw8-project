import React from "react"
import { Routes, Route } from "react-router-dom";
import { Login } from "../Pages/login/login";
import {Home} from"../Pages/home/home"
import {Perfil} from"../Pages/perfil/perfil"
import {Reportar} from"../Pages/reportarMascotas/reportarMascotas"
import {MascotasCercanas} from"../Pages/mascotasCercanas/mascotasCercanas"
import {MisReportes} from"../Pages/misReportes/misReportes"
import {EditarReporte}from"../Pages/editarMascota/editarReporte"
function AppRoutes(){
    return ( 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
          <Route path="/mascotasCercanas" element={<MascotasCercanas/>}/>
          <Route path="/reportar" element={<Reportar/>}/>
          <Route path="/editar-reporte/:id" element={<EditarReporte/>}/>
          <Route path="/misReportes" element={<MisReportes/>}/>
        </Routes>
        
      )
}
export {AppRoutes}
