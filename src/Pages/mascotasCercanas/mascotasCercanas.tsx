import React, { useEffect, useState } from "react";
import {ubication} from "../../hooks/atoms"
import {useRecoilState} from"recoil"
import {reportesCercanos} from "../../hooks/hooks"
import css from"./mascotasCercanas.css"
import {Card} from"../../Components/card/card"
import {giveUbication} from"../../Components/giveUbication/giveUbication"
import {Loader} from"../../Components/loader/loader"
import {SeccionViMascota} from"../../Components/seccionViMascota/seccionViMascota"
type CardType ={
  name?:String,
  img?:string
}
function MascotasCercanas(){
    const [results,setResults]= useState([]);
    const {obData,cargando}=reportesCercanos()
    const [location,setLocation]= useRecoilState(ubication)    
    const [cardSeleccionada,setCardSeleccionada]= useState(false);
    const [cardData,setCardData]=useState<CardType>({})
    console.log(cardData);
    
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
   
    const loVi=(e?)=>{
      setCardSeleccionada(!cardSeleccionada);
      console.log(e);
      if(e){
        setCardData({name:e.petName,img:e.url})
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
           <div className={css.cardMascotavista}  >
            {cardSeleccionada
            ?
            <SeccionViMascota name={cardData.name} img={cardData.img} onClick={()=>{loVi()}} />
            :
           <div className={css.mascotasCercanas}>
             {results.map((e)=>{
            
            if(e){
                return <div style={cardSeleccionada?{display:"none"}:{display:"initial"}} key={e.objectID}>
                  <Card onClick={()=>{loVi(e)}} name={e.petName} localidad={e.location} img={e.url} nameButon={"Lo vi"}/>
                  </div>
            }else{
                return <h1>No hay mascotas cerca tuyo</h1>
            }
             })}
           </div>
            }
          
           </div>
         </>
       
        :<button onClick={dar}>Dar ubicacion</button>}
        </article>
        </div>
      </div>
   
</>
}
export {MascotasCercanas}
