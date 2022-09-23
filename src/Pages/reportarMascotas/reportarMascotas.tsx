import React , { useState ,useEffect}from "react"
import {Outlet } from"react-router-dom"
import { Header } from "../../Components/Header/header"
import {Link ,useParams} from"react-router-dom"
import {user} from"../../hooks/atoms"
import { useRecoilState} from"recoil"
import {MyButton} from"../../Components/ui/button/button"
import css from"./reportar.css"
 function Reportar(){  
   const [lookUser,serUser]=useRecoilState(user)
   
    return (
     <>
        <div className={css.conteiner}>
            <div className={css.children}>
                <img src="https://us.123rf.com/450wm/bigmouse/bigmouse1912/bigmouse191200010/135227816-cartoon-color-lost-dog-ad-poster-card-vector.jpg?ver=6" alt="" />
                <div>
                <form>
    
               <h1 >Mi reporte</h1>
                <label >
                 <h2>Nombre de la mascota</h2>
                 <input type="text"  name="name" required  placeholder="michi"/>
                 </label>
 
  
                 <input  name="busqueda" type="search" required />

                 <button >Confirmar Ubicación</button>
     
                 <h3>Falta confirmar ubicacion o subir imagen</h3>
                  <button>Reportar</button>
                 </form>
          
                </div>
            </div>
        </div>
     </>
        )
 }    
   
export {Reportar}