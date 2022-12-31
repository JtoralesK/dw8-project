import React, { useEffect, useState  } from "react";
import css from "./header.css"
import {Link ,useNavigate } from"react-router-dom"
import {obtieneUser} from"../../hooks/hooks"
import {page,ubication,user} from"../../hooks/atoms"
import { useRecoilState} from"recoil"
import {pages} from"./namesPages.js"
import {Loader} from"../loaders/loaderHeader/loader"
import {ButtonMenu} from"../ui/buttonMenu/buttonMenu.index"
function Header(){
    const navigate = useNavigate() 
    const [value, setUser] = useRecoilState(user)
    let valuee:any=value
    const [pagee, setPage] = useRecoilState(page)
    const {obData,cargando}= obtieneUser();
    const [name,setLog]=useState("");
    const [styleButton,setStyleButton]=useState(false);
  
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
            <div  onClick={()=>{setStyleButton(false)}} >
                <Link to={"/"}>
                <img width={200} src={"https://media.petcolove.org/Attachments/NewItems/PetcoLoveLostLogo_ColorRGB_20211022172440_0.svg"} id={"s"} />
                </Link></div>
            <div className={css.abrir}  onClick={()=>{setStyleButton(!styleButton) }}><ButtonMenu state={styleButton} ></ButtonMenu></div>
               <ul className={css.menu}>
               {pages.map((e)=>{
                return <li onClick={()=>{setLog(e.page)}} key={e.name} className={css.menuLinks}>{e.name}</li>
               })}
               </ul>
        </div>
        <div className={css.menuMovile} style={styleButton?{marginLeft:"0"}:{marginLeft:"-100%"}}>
            <ul className={css.menuM} >
               {pages.map((e)=>{
                return <li onClick={()=>{setLog(e.page);setStyleButton(false)}} key={e.name}>{e.name}</li>
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