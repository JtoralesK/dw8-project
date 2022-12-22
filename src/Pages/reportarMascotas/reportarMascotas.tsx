import React , { useState ,useEffect}from "react"
import {user} from"../../hooks/atoms"
import { useRecoilState} from"recoil"
import css from"./reportar.css"
import {FormReportMascota} from "../../Components/formEditarMascota/formEditarMascota"
import {creaReporte} from"../../hooks/hooks"
import {LoaderCircular} from "../../Components/loaders/loaderCircular/loaderCircular"
import {ButtonFlecha} from"../../Components/ui/buttonFlechaAtras/buttonFlechaAtras"
import {useNavigate } from"react-router-dom"

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
        <div className={css.body}>
           <div className={css.conteiner}>
           <div className={css.reportConteiner}>
                <h1 >Mi mascota perdida</h1>
                <FormReportMascota onSubmit={(e)=>{reportar(e)}} action={0}></FormReportMascota>
            </div>
            <div className={css.loaderReport}><LoaderCircular estado={cargandoReporte}></LoaderCircular></div>

           </div>
        </div>
     </>
        )
 }    
   
export {Reportar}