import React , { useState ,useEffect}from "react"
import {Outlet } from"react-router-dom"
import { Header } from "../../Components/Header/header"
import {Link ,useParams} from"react-router-dom"
import css from"./login.css"
 function Perfil(){  
    return (
     <>
     <Header></Header>
     <h1>Perfil:</h1>

     </>
        )
 }    
   
export {Perfil}