import React , { useState ,useEffect}from "react"
import {user} from"../../hooks/atoms"
import { useRecoilState} from"recoil"
import css from"./formReport.css"
import {Mapa} from"../../Components/mapbox/mapbox"
import {MyDropzone} from "../../Components/imgDropzone/imgDropzone"
import {ButtonFlecha} from"../../Components/ui/buttonFlechaAtras/buttonFlechaAtras"

type Prop={
   petName?:string,
   url?:string,
   lat?:number,
   lng?:number,
   location?:string,
   id?:number,
   action:number,//0==reporte | 1==editar reporte
   onSubmit?:(any)=>any
   setImage?: React.Dispatch<React.SetStateAction<string>>,
   setEstado?:()=>any
}
 function FormReportMascota(p:Prop){     
   const [url,setUrl]= useState("")
   const [latYlng,setLocation]= useState([null,null])
   const [error,setError]=useState(false)
   const [nameError,setNameError]=useState("")


   useEffect(()=>{
      if(p.url){
         setUrl(p.url)
      }
   },[p.url])

   const enviarForm = (e)=>{
      e.preventDefault();
      const {name,location}= e.target     
      if(p.action==0){
         if(url){
            if(latYlng[0]!=null || latYlng[1]!=null){
               if(p.onSubmit){               
                  p.onSubmit({latYlng,url,petName:name.value,location:location.value})
               }
            }else{
               console.error("falta location")
               setNameError("Falta Seleccionar Boton Mi Ubicación")
               setError(true)
            }
         }else{
            console.error("falta Imagen")
            setNameError("Falta Imagen")
            setError(true)
         }
      } 
      
   }
    return (
     <>
           <form onSubmit={(e)=>{enviarForm(e)}} className={css.form}> 
               <div  className={css.divZonaDescription}>
               <label className={css.labelName}>
                <h2>Nombre de la mascota*</h2>
                <input className={css.inputReport} type="text"  name="name" required  placeholder={p.petName?p.petName:"michi"}/>
                </label>
               <label>
               <h2>Foto de la mascota*</h2>
               <MyDropzone value={url} onChange={(e)=>{setUrl(e)}}></MyDropzone>
               </label>
               </div>
               <div className={css.divZonaUbicacion}>
                <Mapa lng={p.lng?p.lng:null} lat={p.lat?p.lat:null} setLocation={(a)=>{setLocation(a)}}></Mapa>
                <label className={css.labelLocalidad}>
                <h2>Indica ciudad y localidad*</h2>
                <input className={css.inputReport} type="text"  name="location" required  placeholder={p.location?p.location:"Buenos Aires, Retiro"}/>
                </label>
                <div className={css.buttonsReportar}>
                  <div className={css.buttonesFormReporte}>
                    <button className={css.buttonEditYReport} onClick={()=>{setError(false)}}>{p.action>0?"Editar Reporte":"Reportar mascota"}</button>
                     <p style={error?{"display":"initial","color":"red","textAlign":"center"}:{"display":"none"}} >{nameError}</p>
                    <button style={p.action>0?{display:"initial"}:{display:"none"}}>Eliminar Reporte</button>
                    <div style={p.action>0?{display:"initial"}:{display:"none"}} ><ButtonFlecha onClick={()=>{p.setEstado()}}/></div>
                  </div>
                </div>
               </div>
               </form> 
     </>
        )
 }    
   
export {FormReportMascota}