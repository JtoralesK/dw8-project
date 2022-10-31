import React , { useState ,useEffect,useRef}from "react"
import { useRecoilState} from"recoil"
import {ubication} from"../../hooks/atoms"
import {Map, Marker } from 'mapbox-gl';
import {giveUbication}from"../giveUbication/giveUbication"
import css from "mapbox-gl/dist/mapbox-gl.css";

   const MAPBOX_TOKEN = "pk.eyJ1IjoiamF2aXRvcmFsZXNrIiwiYSI6ImNreTR0ZXg1eDBmN3EybnE5ZmVyc2d2OWQifQ.2CklQ60c6qrllj5ryyJBKg"
   const divStyle:any = {
      backgroundColor: '40px',
      color: ' #ffeb3b',
      padding: '6px 12px',
      fontFamily: 'monospace',
      zIndex: 1,
      position: 'absolute',
      margin: '12px',
      borderRadius:' 4px',
      background:"#7833334f"
    };
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
      
       console.log(window.innerWidth);
       
      return (
         <div>
            <div  ref={divMapaRef} style={{height:"250px"}}>
            <div style={divStyle}>
            Longitude:{lng}|Latitude:{lat} 
            </div>
            <div style={{...divStyle,bottom:0,right:0}}>
            <button type="button" onClick={miUbicacionActual} style={{"background":"none","border":"none",color:'#ffeb3b'}}>Mi ubicacion</button>
            </div>
            </div>
         </div>
       );
    }


​