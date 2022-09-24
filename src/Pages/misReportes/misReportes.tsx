import React, { useEffect, useState } from "react";
import {ubication,user,reports} from "../../hooks/atoms"
import {useRecoilState} from"recoil"
import {misReportes} from "../../hooks/hooks"
import css from"./misreportes.css"


function MisReportes(){
   const [myUser,serUser]=useRecoilState(user);
   const [reportss,setReport]= useRecoilState(reports)
    
   useEffect(()=>{
    console.log(myUser);
    
   misReportes(myUser).then((e)=>{
    if(e[0]){
        setReport(e[0]);
    }
   })
   },[])
    
    
return <>
   <div className={css.conteiner}>
    <h1>MIS REPORTES</h1>
    {reportss?<h1>hay reportes</h1>:<p>no llo hay</p>}
   </div>
</>
}
export {MisReportes}