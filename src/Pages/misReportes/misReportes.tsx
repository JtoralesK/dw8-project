import React, { useEffect, useState } from "react";
import {ubication,user,reports} from "../../hooks/atoms"
import {useRecoilState} from"recoil"
import {misReportes,actualizarReporte} from "../../hooks/hooks"
import css from"./misreportes.css"
import {Card} from"../../Components/card/card"
import {FormReportMascota} from "../../Components/formEditarMascota/formEditarMascota"
    type PetEdit = {
        petName?:string,
        url?:string,
        lat?:number,
        lng?:number,
        location?:string,
        id?:number
    }
function MisReportes(){
   const [myUser,serUser]=useRecoilState(user);
   const [results,setReport]= useRecoilState(reports);
   const [editarMiMascota,setEditarMiMascota] = useState(false);
   const [petAEditar,setPetAEditar] = useState<PetEdit>({})
   const {cargandoReporte,actualizarRe}=actualizarReporte()
   useEffect(()=>{
   misReportes(myUser).then((e)=>{
    if(e[0]){
        setReport(e[0]);
    }
   })
   },[])
    const activarEdicionReporte=(e)=>{
        const {petName,url,lat,lng,location,id}=e
        setPetAEditar({petName,url,lat,lng,location,id})
        setEditarMiMascota(true)
    }
    const editarReporte = (e)=>{
        const {petName,url,latYlng,location,id}=e
        let newData ={}
        if(petName)newData={...newData,petName}
        if(url)newData={...newData,url}
        if(location)newData={...newData,location}
        if(latYlng)newData={...newData,latYlng}
        console.log(newData);
        
        actualizarRe(newData,myUser.token,petAEditar.id).then((e)=>{
            misReportes(myUser).then((e)=>{
                if(e[0]){
                    setReport(e[0]);
                }
               })
               setTimeout(()=>{
                setEditarMiMascota(false)
               },1000)
        })
    }
    
    
return <>
   <div className={css.conteiner}>

   <div style={editarMiMascota?{"display":"none"}:{"display":"initial"}} >
   <h1 className={css.titleReporte}>MIS REPORTES</h1>
   <div className={css.misReportesConteiner}>
    {results
    ?
    <>
      {results.map((e)=>{
                if(e){                    
                    return <div key={e.id}><Card onClick={()=>{activarEdicionReporte(e)}} name={e.petName} localidad={e.location} img={e.url} nameButon={"Editar"}/></div>
                }
            })}
    </>
    :
    <p>no hay</p>}
   </div>
   </div>

   <div style={editarMiMascota?{"display":"block"}:{"display":"none"}} className={css.conteinerEdit}>
                <h1 style={{"textAlign":"center"}}>Editar mi mascota perdida</h1>
                <FormReportMascota action={1} petName={petAEditar.petName}
                 url={petAEditar.url} lat={petAEditar.lat} lng={petAEditar.lng} 
                 location={petAEditar.location} setEstado={()=>{setEditarMiMascota(false)}} 
                 onSubmit={(e)=>{editarReporte(e)}}/>
    </div>  

   </div>
</>
}
export {MisReportes}
