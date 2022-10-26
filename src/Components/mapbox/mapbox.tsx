import React , { useState ,useEffect,useRef}from "react"
import { useRecoilState} from"recoil"
import {ubication} from"../../hooks/atoms"
import {Map, Marker} from 'mapbox-gl';
   const MAPBOX_TOKEN = "pk.eyJ1IjoiamF2aXRvcmFsZXNrIiwiYSI6ImNreTR0ZXg1eDBmN3EybnE5ZmVyc2d2OWQifQ.2CklQ60c6qrllj5ryyJBKg"
   type LyN=[number,number]


    export function Mapa(){
      const divMapaRef = useRef<HTMLDivElement>(null);
      const [mapa,setMapa]=useState<Map>();
      const [location,setLocation]= useRecoilState(ubication)   
      const [center,setCenter]=useState<LyN>()
      useEffect(()=>{
        console.log(location);
        if(location.lng!=null){
         console.log("hay location");
         setCenter([location.lng,location.lat])
      }
      },[])

      useEffect(()=>{         
            mapa?.flyTo({
               center
            })            
            if(mapa){
               new Marker().setLngLat([-58.7946148, -34.5055951]).addTo(mapa)
            }
      },[center])
      
         useEffect(()=>{
           if(divMapaRef.current){
           setMapa( 
            new Map({  
            container:divMapaRef.current,
            style:"mapbox://styles/mapbox/streets-v11",
            center:center,
            zoom:15,
            accessToken:MAPBOX_TOKEN
        }) )
           }
         },[divMapaRef])
         
      return (
         <div>
            <div  ref={divMapaRef}></div>
         </div>
       );
    }


​