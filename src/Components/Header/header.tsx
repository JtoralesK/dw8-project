import React, { useEffect, useState } from "react";
import css from "./header.css"
import {Link ,useNavigate } from"react-router-dom"
import {obtieneUser} from"../../hooks/hooks"
import {page,ubication,user} from"../../hooks/atoms"
import { useRecoilState} from"recoil"
import {pages} from"./namesPages.js"
import {Loader} from"../loader/loader"
function Header(){
    const navigate = useNavigate() 
    const [value, setUser] = useRecoilState(user)
    let valuee:any=value
    const [pagee, setPage] = useRecoilState(page)
    const {obData,cargando}= obtieneUser();
    const [name,setLog]=useState("");
    
    useEffect(()=>{   
        if(name){  
            //reportes cercanos            
            if(name==="/mascotasCercanas"){
                navigate(name);
            }else{
                obData({token:valuee.token}).then((e)=>{
                    console.log(e,"dsf");
                    if(!e){
                        setPage(name)
                        navigate("/login")
                    }else{
                        navigate(name)
                    }
                 })
            }

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
               </ul>
        </div>

        { cargando
        ?
        <div className={css.cargando}>
        <div className={css.span}>
        <span><Loader/></span>
        </div>
        </div>
        :null}

    </header>
    
    </> 
}
export {Header}