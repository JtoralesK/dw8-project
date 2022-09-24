import React, { useEffect, useState } from "react";
import {ubication} from "../../hooks/atoms"
import {useRecoilState} from"recoil"
import {reportesCercanos} from "../../hooks/hooks"
import css from"./mascotasCercanas.css"

function MascotasCercanas(){
    const [results,setResults]= useState([]);
    const [location,setLocation]= useRecoilState(ubication)    

    useEffect(()=>{
        if(location){
            reportesCercanos(location).then((e)=>{                
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
    <div>
   
        {
        location.estado 
        ? 
        <>
      <section className={css.contenedor}>
      <div className={css.contenedorM}>
         <h1 className={css.title}> Reportes Cercanos</h1>
            <div className={css.contenedorDeItems}>
            {results.map((e)=>{  
                console.log(e);
                          
             if(e){
            return <div key={e.objectID}>
                <h1 >{e.petName}</h1>
                <img className={css.img} src={e.url} alt="" />
                <h2>Location:{e.location}</h2>
            </div>
            }else{
            return <h1>No hay mascotas reportadas cerca tuyo</h1>
             }
             })}
            </div>
       </div>
      </section>
     
        </> 
        :
        <button onClick={giveUbication}>Dar ubicacion</button>}
    </div>
</>
}
export {MascotasCercanas}