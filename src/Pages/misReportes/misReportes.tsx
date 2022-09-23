import React, { useEffect, useState } from "react";
import {ubication,user} from "../../hooks/atoms"
import {useRecoilState} from"recoil"
import {misReportes} from "../../hooks/hooks"
import css from"./misreportes.css"
import {useLocalStorage} from"../../hooks/useLocalStorage"


function MisReportes(){
   const [reports,setReports]= useState([])
   const [myUser,serUser]=useRecoilState(user);
    console.log(reports,"yes");
    
   useEffect(()=>{
    console.log(myUser);
    
   misReportes(myUser).then((e)=>{
    if(e[0]){
        setReports(e[0]);
    }
   })
   },[])
    
    
return <>
   <div className={css.conteiner}>
    <h1>MIS REPORTES</h1>
   </div>
</>
}
export {MisReportes}