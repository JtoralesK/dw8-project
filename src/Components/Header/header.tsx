import React from "react";
import css from "./header.css"
import {Link ,useNavigate } from"react-router-dom"
import {LinkT} from"../link/link"
import {initStorage} from"../../hooks/initLocalStorage"
import {confirmaUser} from"../../hooks/hooks"
import {Redirreccion} from"../redireccion/redireccion"
function Header(){
    const history = useNavigate() 
   async function preguntaUsernew(page){
    let data = initStorage();
        let confirmUs= await confirmaUser(data)        
       if(confirmUs){
        console.log("no esta logeado");
        
        history(page);
    }else{ history("/login") ;}
    }
    const home = ()=>{
        history("/");
    }
    return <>
    <header className={css.header}>
        <div className={css.wrapper}>
            <div className={css.menuLinks}><Redirreccion name="PetApx" page="/" then={home}></Redirreccion></div>
               <ul className={css.menu}>
                <li className={css.menuLinks}><Redirreccion name="Perfil" page="/perfil" then={preguntaUsernew}></Redirreccion></li>
                <li className={css.menuLinks}><Redirreccion name="Mascotas cercanas" page="/mascotas-Cercanas" then={preguntaUsernew}></Redirreccion></li>
                <li className={css.menuLinks}><Redirreccion name="Mascotas perdidas" page="/mascotas-Perdidas" then={preguntaUsernew}></Redirreccion></li>
               </ul>
        </div>
    </header>
    </>
}
export {Header};