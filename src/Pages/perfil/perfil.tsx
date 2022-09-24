import React , { useState ,useEffect}from "react"
import {Outlet } from"react-router-dom"
import { Header } from "../../Components/Header/header"
import {Link ,useNavigate} from"react-router-dom"
import {user} from"../../hooks/atoms"
import { useRecoilState} from"recoil"
import {MyButton} from"../../Components/ui/button/button"
import css from"./perfil.css"

 function Perfil(){  
   const [lookUser,serUser]=useRecoilState(user)
   const navigate = useNavigate() 

   const me:any = lookUser
   const salir = ()=>{
    serUser({});
    navigate("/");
   }
    return (
     <>
    <section className={css.perfil}>
    <div className={css.contenedor}>

      <div>
         <img className={css.img} src="https://cdn.fs.teachablecdn.com/E8IhyZHBSqCrVymXCuf8" alt="" />
      </div>

      <div className={css.datos}>
      <h1 className={css.title}>Mi Perfil</h1>
      <h2 className={css.usuario}>Usuario:{me.fullname}</h2>
      <h2 className={css.email}>Email:{me.email}</h2>
     <div className={css.buttons}>
      <button>Cambiar Contraseña</button>
      <button>Editar Perfil</button>
     </div>
     <button onClick={salir} className={css.salir}>Salir</button>
      </div>

    </div>
    </section>
     </>
        )
 }    
   
export {Perfil}