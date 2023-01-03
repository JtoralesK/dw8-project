import React , { useState ,useEffect}from "react"
import css from"./editarMascota.css"
import {Mapa} from"../../mapbox/mapbox"
import {MyDropzone} from "../../imgDropzone/imgDropzone"
import {ButtonFlecha} from"../../ui/buttonFlechaAtras/buttonFlechaAtras"
import {LoaderCircular}from"../../loaders/loaderCircular/loaderCircular"

type Prop={
   petName:string,
   url:string,
   lat:number,
   lng:number,
   location:string,
   onSubmit:(any)=>any
   onClickEliminar:()=>any,
   setEstado:()=>any,
   estado?:boolean
}
 function EditarMascota(p:Prop){     
   console.log(p.estado);
   
   const [url,setUrl]= useState("")
   const [latYlng,setLocation]= useState([null,null])
   const [error,setError]=useState(false)
   const [nameError,setNameError]=useState("")

   useEffect(()=>{
      if(p.url){
         setUrl(p.url)
      }
   },[p.url])
   const eliminar =()=>{
  if(p.onClickEliminar){
      p.onClickEliminar();

   }
   }
 

   const enviarForm = (e)=>{
      e.preventDefault();
      const {name,location}= e.target     
      p.onSubmit({latYlng,url,petName:name.value,location:location.value})
      
   }
    return (
     <>
           <form onSubmit={(e)=>{enviarForm(e)}} className={css.form}> 
               <div  className={css.divZonaDescription}>
               <label className={css.labelName}>
                <h2>Nombre de la mascota*</h2>
                <input className={css.inputReport} type="text"  name="name"   placeholder={p.petName?p.petName:"michi"}/>
                </label>
               <label>
               <h2>Foto de la mascota*</h2>
               <MyDropzone value={url} onChange={(e)=>{setUrl(e)}}></MyDropzone>
               </label>
               </div>
               <div className={css.divZonaUbicacion}>
                <Mapa lng={p.lng?p.lng:null} lat={p.lat?p.lat:null} setLocation={(a)=>{setLocation(a)}}></Mapa>
      
                <div className={css.buttonsReportar}>
                  <div className={css.buttonesFormReporte}>
                    <button className={css.buttonEditYReport} onClick={()=>{setError(false)}}>{"Editar Reporte"}</button>
                     <p style={error?{"display":"initial","color":"red","textAlign":"center"}:{"display":"none"}} >{nameError}</p>
                    <button type="button" onClick={()=>{eliminar()}}>Eliminar Reporte</button>
                    <div >
                     <ButtonFlecha onClick={()=>{p.setEstado()}}/>
                     <div className={css.loaderReport}><LoaderCircular estado={p.estado}></LoaderCircular></div>
                     </div>
                  </div>
                </div>
               </div>

               </form> 
     </>
        )
 }    
   
export {EditarMascota}