import React from "react"
import { Routes, Route } from "react-router-dom";
import { Login } from "../Pages/login/login";
import {Home} from"../Pages/home/home"
import {Perfil} from"../Pages/perfil/perfil"
function AppRoutes(){
    return ( 
      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
          <Route path="/perfil" element={<Perfil/>}/>

        </Routes>
      )
}
export {AppRoutes}
