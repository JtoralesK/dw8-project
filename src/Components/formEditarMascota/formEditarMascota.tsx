import React , { useState ,useEffect}from "react"
import {user} from"../../hooks/atoms"
import { useRecoilState} from"recoil"
import css from"./formReport.css"
import {Mapa} from"../../Components/mapbox/mapbox"
import {MyDropzone} from "../../Components/imgDropzone/imgDropzone"

type Prop={
   petName?:string,
   url?:string,
   lat?:number,
   lng?:number,
   location?:string,
   id?:number,
   action:number
    setImage?: React.Dispatch<React.SetStateAction<string>>
}
 function FormReportMascota(p:Prop){  
   console.log(p);
   
    return (
     <>
        <div className={css.body}>
           <div className={css.conteiner}>
           <div className={css.reportConteiner}>
           <form className={css.form}> 
               
               <div  className={css.divZonaDescription}>
               <label className={css.labelName}>
                <h2>Nombre de la mascota*</h2>
                <input className={css.inputReport} type="text"  name="name" required  placeholder={p.petName?p.petName:"michi"}/>
                </label>
               <label>
               <h2>Foto de la mascota*</h2>
               <MyDropzone value={p.url} onChange={p.setImage}></MyDropzone>
               </label>
               </div>

               <div className={css.divZonaUbicacion}>
                <Mapa lng={p.lng?p.lng:null} lat={p.lat?p.lat:null}></Mapa>
                <label className={css.labelLocalidad}>
                <h2>Indica ciudad y localidad*</h2>
                <input className={css.inputReport} type="text"  name="name" required  placeholder={p.location?p.location:"Buenos Aires, Retiro"}/>
                </label>
                <div className={css.buttonsReportar}>
                  <div className={css.buttonesFormReporte}>
                    <button>{p.action>0?"Editar Reporte":"Reportar mascota"}</button>
                    <button style={p.action>0?{display:"initial"}:{display:"none"}}>Eliminar Reporte</button>
                    <button>Cancelar</button>
                  </div>
                </div>
               </div>

               </form>
                
            </div>
           </div>
        </div>
     </>
        )
 }    
   
export {FormReportMascota}