import React from "react"
import { Routes, Route } from "react-router-dom";
import { Login } from "../Pages/login/login";
import {Home} from"../Pages/home/home"
function AppRoutes(){
    return ( 
      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      )
}
export {AppRoutes}
