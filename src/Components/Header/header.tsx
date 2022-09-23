import React, { useEffect, useState } from "react";
import css from "./header.css"
import {Link ,useNavigate } from"react-router-dom"
import {obtieneUser} from"../../hooks/hooks"
import {page,user,ubication} from"../../hooks/atoms"
import {useLocalStorage} from"../../hooks/useLocalStorage"
import { useRecoilState,useSetRecoilState} from"recoil"
import {pages} from"./namesPages.js"
function Header(){
    const navigate = useNavigate() 
    const [lookUser,serUser]=useRecoilState(user);

    const [value,setLocal]= useLocalStorage("user",{})
    const [linkPage,setPage]= useLocalStorage("page",{})

    const [name,setLog]=useState("");
    useEffect(()=>{
        
        if(name){  
            console.log("se hizo click",value);
                          
            obtieneUser({token:value.token}).then((r)=>{    
                if(!r){
                setPage(name)
                navigate("/login")
            }else{
                serUser(value)
                navigate(name)
            }})
        }
    },[name])
    return <>
   
    <header className={css.header}>
        <div className={css.wrapper}>
            <div className={css.menuLinks}>
                <Link to={"/"}>PetApx</Link>
             </div>
             <button className={css.abrirMenu}>x</button>
               <ul className={css.menu}>
               {pages.map((e)=>{
                return <li onClick={()=>{setLog(e.page)}} key={e.name} className={css.menuLinks}>{e.name}</li>
               })}
              <li className={css.menuLinks}> <Link  to={"/mascotasCercanas"}>Mascotas Cercanas</Link></li>
               </ul>
        </div>
    </header>
    </> 
}
export {Header}