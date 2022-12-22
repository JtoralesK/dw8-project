import React, { useEffect, useState } from "react";
import {ubication} from "../../hooks/atoms"
import {useRecoilState} from"recoil"
import {reportesCercanos,EnviarEmail} from "../../hooks/hooks"
import css from"./mascotasCercanas.css"
import {Card} from"../../Components/card/card"
import {giveUbication} from"../../Components/giveUbication/giveUbication"
import {Loader} from"../../Components/loaders/loaderHeader/loader"
import {SeccionViMascota} from"../../Components/seccionViMascota/seccionViMascota"


type CardType ={
  name?:String,
  img?:string
  userEmail?:string
}
function MascotasCercanas(){
    //mascotas cercanas
    const [results,setResults]= useState([]);
    
    //conexion api
    const {obData,cargando}=reportesCercanos()
    const {enviarReporte,cargandoEmail}=EnviarEmail();
    //atom ubication
    const [location,setLocation]= useRecoilState(ubication)    
    
    //estado de seleccion de la card
    const [cardSeleccionada,setCardSeleccionada]= useState(false);
    console.log(cardSeleccionada);
    
    ///data de la card seleccionada
    const [cardData,setCardData]=useState<CardType>({})
    
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
      if(e){
        setCardData({name:e.petName,img:e.url,userEmail:e.userEmail})
      }
      setCardSeleccionada(!cardSeleccionada);

  }
  const enviarEmail = (e)=>{
    enviarReporte(e.bio,e.name,e.cellphone,cardData.userEmail).then((e)=>{
      window.alert("Menjase enviado correctamente")
      setCardSeleccionada(!cardSeleccionada);

    })
    
  }

return <>

      <div className={css.body}>
        <div className={css.secciones}>
        <aside className={css.seccionNombres}> 
          <div className={css.listado}>
          <h2 className={css.tituloListado}>Listado de mascotas</h2>
          <ul >
          {results.map((e)=>{
                if(e){ 
                    return  <li className={css.ulMCercanas} key={e.objectID}>{e.petName},{e.location}</li>
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
            <SeccionViMascota name={cardData.name} img={cardData.img} onClick={()=>{loVi()}} onSubmit={enviarEmail} estadoLoader={cargandoEmail} />
            :
           <div className={css.mascotasCercanas}>
             {results.map((e)=>{
            
            if(e){
                return <div style={cardSeleccionada?{display:"none"}:{display:"block"}} key={e.objectID}>
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
