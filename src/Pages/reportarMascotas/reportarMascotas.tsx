import React , { useState ,useEffect}from "react"
import {user} from"../../hooks/atoms"
import { useRecoilState} from"recoil"
import css from"./reportar.css"
import {Mapa} from"../../Components/mapbox/mapbox"
import {MyDropzone} from "../../Components/imgDropzone/imgDropzone"
import {FormReportMascota} from "../../Components/formEditarMascota/formEditarMascota"
 function Reportar(){  

   const [lookUser,serUser]=useRecoilState(user)
   const [image, setImage]=useState("")
    return (
     <>
        <div className={css.body}>
           <div className={css.conteiner}>
           <div className={css.reportConteiner}>
                <h1 >Mi mascota perdida</h1>
                <FormReportMascota image={image} setImage={setImage}></FormReportMascota>
            </div>
           </div>
        </div>
     </>
        )
 }    
   
export {Reportar}