import React , { useState ,useEffect,useRef}from "react"
import { useRecoilState} from"recoil"
import {ubication} from"../../hooks/atoms"
import {Map, Marker } from 'mapbox-gl';
import {giveUbication}from"../giveUbication/giveUbication"
import css from "mapbox-gl/dist/mapbox-gl.css";
console.log(css);

   const MAPBOX_TOKEN = "pk.eyJ1IjoiamF2aXRvcmFsZXNrIiwiYSI6ImNreTR0ZXg1eDBmN3EybnE5ZmVyc2d2OWQifQ.2CklQ60c6qrllj5ryyJBKg"
   const divStyle = {
      backgroundColor: '40px',
      color: ' #fff',
      padding: '6px 12px',
      fontfamily: 'monospace',
      zindex: 1,
      position: 'absolute',
      margin: '12px',
      borderRadius:' 4px',
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
      
       
      return (
         <div>
            <div  ref={divMapaRef}>
            <div style={{
      backgroundColor: '40px',
      color: ' #ffeb3b',
      padding: '6px 12px',
      fontFamily: 'monospace',
      zIndex: 1,
      position: 'absolute',
      margin: '12px',
      borderRadius:' 4px',
      background:"#7833334f"
    }}>
            Longitude:{lng}|Latitude:{lat} 
            </div>
            </div>
            <div style={{"display":"block","textAlign":"center"}} >
            <button  type="button" onClick={miUbicacionActual} >Ir a mi ubicaion aproximada</button>
            </div>
         </div>
       );
    }


​