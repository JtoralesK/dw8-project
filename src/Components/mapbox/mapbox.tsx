import React , { useState ,useEffect,useRef}from "react"
import { useRecoilState} from"recoil"
import {ubication} from"../../hooks/atoms"
import {Map, Marker } from 'mapbox-gl';
import css from"./mapbox.css"
import {giveUbication}from"../giveUbication/giveUbication"
   const MAPBOX_TOKEN = "pk.eyJ1IjoiamF2aXRvcmFsZXNrIiwiYSI6ImNreTR0ZXg1eDBmN3EybnE5ZmVyc2d2OWQifQ.2CklQ60c6qrllj5ryyJBKg"
   type LyN=[number,number]


    export function Mapa(){
      const divMapaRef = useRef<HTMLDivElement>(null);
      const [mapa,setMapa]=useState<Map>();
      const [location,setLocation]= useRecoilState(ubication)   
      const [lng,setLng]= useState<any>(-51.241)
      const [lat,setLat]= useState<any>(-30.4235)
      const [zoom, setZoom] = useState<any>(5);
      const [miUbicaionActiva,setMiUbicacionActivada]=useState(false)
      
      useEffect(()=>{         
        if(mapa && miUbicaionActiva==true){
         
         mapa.flyTo({
            center: [lng,lat],
            essential: true,// this animation is considered essential with respect to prefers-reduced-motion,
            zoom:zoom
            });
         new Marker({
            color:"red",
            rotationAlignment: 'map'
         }).setLngLat([lng,lat])
            .addTo(mapa)
            
            
            setMiUbicacionActivada(false)
        }
      
      },[miUbicaionActiva])

      useEffect(() => {
         if (mapa){
            mapa.on('move', () => {
               setLng(mapa.getCenter().lng.toFixed(4));
               setLat(mapa.getCenter().lat.toFixed(4));
               setZoom(mapa.getZoom().toFixed(2));
               });

         }
       
         });

         useEffect(()=>{
           if(divMapaRef.current){
           setMapa( 
            new Map({  
            container:divMapaRef.current,
            style:"mapbox://styles/mapbox/dark-v10",
            center:[lng, lat],
            zoom:zoom,
            accessToken:MAPBOX_TOKEN,
            attributionControl: false,
        }) )
           }
           
         },[divMapaRef])
         

            const miUbicacionActual = ()=>{
               if(location.lng && location.lat && mapa){
                  setLng(location.lng);
                  setLat(location.lat);
                  setZoom(12);
                  setMiUbicacionActivada(true)
               }else{
                  giveUbication(setLocation)
               }
         }
      
       
      return (
         <div>
            <div className={css.mapa}  ref={divMapaRef}>
            <div className={css.sidebar}>
            Longitude:{lng}|Latitude:{lat} 
            </div>
            </div>
            <div className={css.mapaButton}>
            <button  type="button" onClick={miUbicacionActual} >Ir a mi ubicaion aproximada</button>
            </div>
         </div>
       );
    }


​