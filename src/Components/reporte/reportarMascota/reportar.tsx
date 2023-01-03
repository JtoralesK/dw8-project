import React , { useState}from "react"
import css from"./reportar.css"
import {Mapa} from"../../mapbox/mapbox"
import {MyDropzone} from "../../imgDropzone/imgDropzone"
import {ButtonFlecha} from"../../ui/buttonFlechaAtras/buttonFlechaAtras"
import {LoaderCircular}from"../../loaders/loaderCircular/loaderCircular"
type Prop={
   onSubmit?:(any)=>any
   onClickEliminar?:()=>any,
   setImage?: React.Dispatch<React.SetStateAction<string>>,
   setEstado?:()=>any,
   estado?:boolean
}
 function ReportMascota(p:Prop){     
   
   const [url,setUrl]= useState("")
   const [latYlng,setLocation]= useState([null,null])
   const [error,setError]=useState(false)
   const [nameError,setNameError]=useState("")

   const enviarForm = (e)=>{
      e.preventDefault();
      const {name,location}= e.target     
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
    return (
     <>
          <form onSubmit={(e)=>{enviarForm(e)}} className={css.form}> 
               <div  className={css.divZonaDescription}>
               <label className={css.labelName}>
                <h2>Nombre de la mascota*</h2>
                <input className={css.inputReport} type="text"  name="name" required={true}  placeholder={"michi"}/>
                </label>
               <label>
               <h2>Foto de la mascota*</h2>
               <MyDropzone value={url} onChange={(e)=>{setUrl(e)}}></MyDropzone>
               </label>
               </div>
               <div className={css.divZonaUbicacion}>
                <Mapa setLocation={(a)=>{setLocation(a)}}></Mapa>
                <label className={css.labelLocalidad}>
                <h2>Indica ciudad y localidad*</h2>
                <input className={css.inputReport} type="text"  name="location" required={true}  placeholder={"Buenos Aires, Retiro"}/>
                </label>
                <div className={css.buttonsReportar}>
                  <div className={css.buttonesFormReporte}>
                    <button className={css.buttonEditYReport} onClick={()=>{setError(false)}}>{"Reportar mascota"}</button>
                     <p style={error?{"display":"initial","color":"red","textAlign":"center"}:{"display":"none"}} >{nameError}</p>
                    <div style={{display:"initial"}} ><ButtonFlecha onClick={()=>{p.setEstado()}}/></div>
                  </div>
                </div>
               </div>
               <div className={css.loaderReport}><LoaderCircular estado={p.estado}></LoaderCircular></div>

               </form> 
 
     </>
        )
 }    
   
export {ReportMascota}