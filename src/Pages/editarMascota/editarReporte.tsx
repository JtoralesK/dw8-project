import React, { useEffect, useState } from "react";
import {ubication,user,reports} from "../../hooks/atoms"
import {useRecoilState} from"recoil"
import {misReportes,actualizarReporte,EliminarReporte} from "../../hooks/hooks"
import css from"./edit.css"
import {EditarMascota} from"../../Components/reporte/editarMascota/editarMascota"
import { useParams } from "react-router-dom";
import {useNavigate } from"react-router-dom"

    type PetEdit = {
        petName?:string,
        url?:string,
        lat?:number,
        lng?:number,
        location?:string,
        id?:number
    }
function EditarReporte(){
   const navigate = useNavigate()  
   const [myUser,serUser]=useRecoilState(user);
   const [results,setReport]= useRecoilState(reports);
   const [petAEditar,setPetAEditar] = useState<PetEdit>({})
   const {cargandoReporte,actualizarRe}=actualizarReporte()
   const {cargandoEl,eliminandoReporte}=EliminarReporte()   
   const url= useParams()
   let {id} = url
   id = JSON.parse(id)
   useEffect(()=>{    
    results.map((r)=>{
        console.log(r.id,"===",id);        
        if(r.id===id){
            const {petName,url,lat,lng,location,id}=r
            setPetAEditar({petName,url,lat,lng,location,id})
        }
    })
   },[])
  
    const editar = (e)=>{
        const {petName,url,latYlng,location,id}=e
        let newData ={}
        if(petName)newData={...newData,petName}
        if(url)newData={...newData,url}
        if(location)newData={...newData,location}
        if(latYlng)newData={...newData,latYlng}
        actualizarRe(newData,myUser.token,petAEditar.id).then(()=>{
            navigate("/misReportes")
        })
    }
    const eliminarReporte = ()=>{
        eliminandoReporte(petAEditar.id).then((e)=>{
            navigate("/misReportes")
        })
    }
    
return <>
  <div className={css.bodyReport}>
           <div className={css.conteiner}>
           <div className={css.reportConteiner}>
                <h1 style={{"textAlign":"center"}}>Editar mi mascota perdida</h1>
                 <EditarMascota  petName={petAEditar.petName}
                 url={petAEditar.url} lat={petAEditar.lat} lng={petAEditar.lng} 
                 location={petAEditar.location} setEstado={()=>{navigate("/misReportes")}} 
                 onClickEliminar={()=>{eliminarReporte()}}
                 onSubmit={(e)=>{editar(e)}}
                 estado={cargandoEl || cargandoReporte }></EditarMascota>
            </div>
           </div>
        </div>
   <div className={css.conteiner}>


   </div>
</>
}
export {EditarReporte}
