import React , { useState ,useEffect}from "react"
import {Outlet } from"react-router-dom"
import { Header } from "../../Components/Header/header"
import {Enter} from"./enter/enterLogin"
import css from"./login.css"
import {MyButton} from"../../Components/ui/button/button"
import {NewLogin} from"./newLogin/newLogin"
import {auth,obtieneToken} from"../../hooks/hooks"
import {dataLocalStorage} from"../../hooks/initLocalStorage"
 function Login(){  
    const [user,setUser]=useState([]);
 
    async function datosLogin(user?){
        setUser(user);
        const json = await obtieneToken(user)
        
        console.log(json)

    }
    async function datosNewLogin(user?){   
        setUser(user);     
        const json = await auth(user)
        const token = await obtieneToken(user)
    }
   
    //new cuenta
    const [active,setActive]=useState(false)
    const datosNewCuenta = ()=>{
      setActive(!active)
    }

    const salir = ()=>{
        setActive(!active)
    }

    return (
     <>
     <section className={css.bodyy}>
        <Header></Header>
        <div className={css.loginSection}>
        <img className={css.img} src="https://www.nami.org/NAMI/media/NAMI-Media/BlogImageArchive/2020/human-animal-bond-blog.jpg" alt="" />
        <div className={css.cardLog}>
        <Enter submit={datosLogin}></Enter>
        <MyButton click={datosNewCuenta} name="Crear nueva cuenta"></MyButton>
        </div> 
        </div>
        <NewLogin active={active} salir={salir} submit={datosNewLogin}></NewLogin>
     </section>
     </>
        )
 }    
   
export {Login}