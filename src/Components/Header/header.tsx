import React, { useEffect, useState } from "react";
import css from "./header.css"
import {Link ,useNavigate } from"react-router-dom"
import {obtieneUser} from"../../hooks/hooks"
import {page,user} from"../../hooks/atoms"
import { useRecoilState} from"recoil"
import {pages} from"./namesPages.js"
function Header(){
    const [linkPage,setPage]=useRecoilState(page);
    const [lookUser,serUser]=useRecoilState(user)
    console.log(lookUser);
    
    const navigate = useNavigate() 

    const [name,setLog]=useState("");
    useEffect(()=>{
        console.log("se clickeo en header");
        
        if(name){            
            obtieneUser(lookUser).then((r)=>{    
                console.log(r);
                             
                if(!r){
                setPage(name)
                navigate("/login")
            }else{
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
               </ul>
        </div>
    </header>
    </> 
}
export {Header}