import React, { useEffect, useState } from "react";
import {ubication} from "../../hooks/atoms"
import {useRecoilState} from"recoil"
import {reportesCercanos} from "../../hooks/hooks"
import css from"./mascotasCercanas.css"
import {Card} from"../../Components/card/card"
import {giveUbication} from"../../Components/giveUbication/giveUbication"
import {Loader} from"../../Components/loader/loader"
function MascotasCercanas(){
    const [results,setResults]= useState([]);
    const {obData,cargando}=reportesCercanos()
    const [location,setLocation]= useRecoilState(ubication)    

    useEffect(()=>{
        if(location){
            obData(location).then((e)=>{  
                            
                setResults(e);
            }) 
        }
    },[location])
    const dar =()=>{
      giveUbication(setLocation)
    }
   
    const loVi=(e)=>{
      console.log("lo vi",e);
  }

return <>

      <div className={css.body}>
        <div className={css.secciones}>
        <aside className={css.seccionNombres}> 
          <div className={css.listado}>
          <h2 className={css.tituloListado}>Listado de mascotas</h2>
          <ul>
          {results.map((e)=>{
                if(e){ 
                    return  <li key={e.objectID}>{e.petName},{e.location}</li>
                }
            })}
          </ul>
         </div>
        </aside>
        
        <article className={css.cargando}>
        {cargando
        ?
        <div className={css.span}>
        <span><Loader/></span>
        </div>
        :
        null}    
        {location.estado
         ?
         <>
           <div className={css.mascotas} style={{display:"flex"}}>
           {results.map((e)=>{
            
                if(e){
                    return <div key={e.objectID}><Card onClick={()=>{loVi(e)}} name={e.petName} localidad={e.location} img={e.url} nameButon={"Lo vi"}/></div>
                }else{
                    return <h1>No hay mascotas cerca tuyo</h1>
                }
            })}
           </div>
         </>
       
        :<button onClick={dar}>Dar ubicacion</button>}
        </article>
        </div>
      </div>
   
</>
}
export {MascotasCercanas}
