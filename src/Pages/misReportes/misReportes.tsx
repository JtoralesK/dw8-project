import React, { useEffect, useState } from "react";
import {ubication,user,reports} from "../../hooks/atoms"
import {useRecoilState} from"recoil"
import {misReportes} from "../../hooks/hooks"
import css from"./misreportes.css"
import {Card} from"../../Components/card/card"


function MisReportes(){
   const [myUser,serUser]=useRecoilState(user);
   const [results,setReport]= useRecoilState(reports)
    
   useEffect(()=>{
   misReportes(myUser).then((e)=>{
    if(e[0]){
        setReport(e[0]);
    }
   })
   },[])
    const editar=(e)=>{
        console.log("editar");
    }
        
    
    
return <>
   <div className={css.conteiner}>
   <h1 className={css.titleReporte}>MIS REPORTES</h1>
   <div className={css.misReportesConteiner}>
    {results
    ?
    <>
      {results.map((e)=>{
                if(e){                    
                    return <div key={e.id}><Card onClick={editar} name={e.petName} localidad={e.location} img={e.url} nameButon={"Editar"}/></div>
                }
            })}
    </>
    :
    <p>no hay</p>}
   </div>
   </div>
</>
}
export {MisReportes}