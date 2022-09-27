import React, { useEffect, useState } from "react";
import {ubication} from "../../hooks/atoms"
import {useRecoilState} from"recoil"
import {reportesCercanos} from "../../hooks/hooks"
import css from"./mascotasCercanas.css"
import {Card} from"../../Components/card/card"
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

    const giveUbication = ()=>{
        function success(position) {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
           setLocation({lng:longitude,lat:latitude,estado:true})
        }
          function error(err) {
            console.log(err.code,err.message);
            console.warn("algo salio mal");
            setLocation({lng:null,lat:null,estado:false})
          }
          if (navigator.geolocation) {
            console.log("Locating…");
            
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.error("Geolocation is not supported by your browser")

          }
          
    
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
        
        <article>
        {cargando?<h1>cargando...</h1>:null}    
        {location.estado
         ?
         <>
           <div className={css.mascotas}>
           {results.map((e)=>{
                if(e){
                    return <div key={e.objectID}><Card name={e.petName} localidad={e.location} img={e.url}/></div>
                }else{
                    return <h1>No hay mascotas cerca tuyo</h1>
                }
            })}
           </div>
         </>
       
        :<button onClick={giveUbication}>Dar ubicacion</button>}
        </article>
        </div>
      </div>
   
</>
}
export {MascotasCercanas}
