import {Link ,useNavigate } from"react-router-dom"
import React , { useState ,useEffect}from "react"
import css from "./redireccion.css"

type Prop={
    page:string,
    name:string
    then?:(any)=>any
}

 function Redirreccion(p:Prop){
  const [value,setValue] = useState("");
  useEffect(()=>{
    if(value){
        const data=JSON.parse(localStorage.getItem("me"));
        localStorage.setItem("me",JSON.stringify({
            ...data,
            page:value
        }));
    }        
 },[value])

    const click = ()=>{        
        if(p.then){
            p.then(p.page);  }
        if(p.page){
            setValue(p.page)
         }
    }
    return<>
        <p className={css.link} onClick={click}>{p.name}</p>
    </>
}
  
      
export {Redirreccion}