import React , { useState ,useEffect}from "react"
import {user} from"../../hooks/atoms"
import { useRecoilState} from"recoil"
import css from"./reportar.css"
import {creaReporte} from"../../hooks/hooks"
import {LoaderCircular} from "../../Components/loaders/loaderCircular/loaderCircular"
import {useNavigate } from"react-router-dom"
import {ReportMascota}from"../../Components/reporte/reportarMascota/reportar"

 function Reportar(){  

   const [miData,setMiData]=useRecoilState(user)
   const {cargandoReporte,creaReport} = creaReporte()
   const navigate = useNavigate() 

   const reportar = (e)=>{
      creaReport(e,miData.token).then((json)=>{
         if(json[0]){
            console.log("se ha creado reporte",json);
            setTimeout(()=>{
               navigate("/misReportes")
            },1000)
         } else{
            console.error("no se pudo reportar")
         }  
      })
   }
    return (
     <>
        <div className={css.bodyReport}>
           <div className={css.conteiner}>
           <div className={css.reportConteiner}>
                <h1 >Mi mascota perdida</h1>
                <ReportMascota onSubmit={(e)=>{reportar(e)}} setEstado={()=>{ navigate("/")}}></ReportMascota>
            </div>
            <div className={css.loaderReport}><LoaderCircular estado={cargandoReporte}></LoaderCircular></div>
           </div>
        </div>
     </>
        )
 }    
   
export {Reportar}