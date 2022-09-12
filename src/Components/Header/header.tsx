import React from "react";
import css from "./header.css"
import {Link ,useNavigate } from"react-router-dom"
import {LinkT} from"../link/link"
import {initStorage} from"../../hooks/initLocalStorage"
import {confirmaUser} from"../../hooks/hooks"
import {Redirreccion} from"../redireccion/redireccion"
function Header(){
    const history = useNavigate() 
   async function click(){
    let data = initStorage();
        let confirmUs= await confirmaUser(data)        
       if(confirmUs){
        history("/tat");
    }else{ history("/login") ;}
      
    }
    return <>
    <header className={css.header}>
        <div className={css.wrapper}>
            <div className={css.menuLinks}> <Link to={"/"}>PetApx</Link></div>
               <ul className={css.menu}>
                <li className={css.menuLinks}><Redirreccion name="Perfil" page="/perfil" then={click}></Redirreccion></li>
                <li className={css.menuLinks}><Redirreccion name="Mascotas cercanas" page="/mascotas-Cercanas" then={click}></Redirreccion></li>
                <li className={css.menuLinks}><Redirreccion name="Mascotas perdidas" page="/mascotas-Perdidas" then={click}></Redirreccion></li>
           

               </ul>
        </div>
    </header>
    </>
}
export {Header};