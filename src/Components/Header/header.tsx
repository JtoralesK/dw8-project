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
    const [pagee, setPage] = useRecoilState(page)
    const {obData,cargando,data}= obtieneUser();
    console.log(cargando);

    const [name,setLog]=useState("");
    console.log(data);
    
    useEffect(()=>{
        
        if(name){  
             obData({token:value.token}).then((e)=>{
                console.log(e,"dsf");
                if(!e){
                    setPage(name)
                    navigate("/login")
                }else{
                    navigate(name)

                }
              
              
             })
          
        }
    },[name])
    return <>
    {cargando
     ? 
     <div>
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
              <li className={css.menuLinks}> <Link   to={"/mascotasCercanas"}><p className={css.linkaso}>Mascotas Cercanas</p></Link></li>
               </ul>
        </div>
    </header>
   <div className={css.cargando}>
   <div className={css.span}>
    <span><Loader/></span>
   </div>
   </div>
     </div>
     :
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
    </header>}
    
    </> 
}
export {Header}