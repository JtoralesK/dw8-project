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
      background:"#7833334f",
    };
    type valoresMyPetEdit = {
      lng?:number,
      lat?:number,
      setLocation?:(any)=>any
    }
    export function Mapa(valores:valoresMyPetEdit){
      
      const divMapaRef = useRef<HTMLDivElement>(null);
      const [mapa,setMapa]=useState<Map>();
      const [location,setLocation]= useRecoilState(ubication)   
      const [lng,setLng]= useState<any>(-51.241)
      const [lat,setLat]= useState<any>(-30.4235)
      const [zoom, setZoom] = useState<any>(5);
      const [miUbicaionActiva,setMiUbicacionActivada]=useState(false)

      //si esta en modo editar, pone la ubicacion que ya se encuentra en la mascota
      useEffect(()=>{
        if(valores.lat && valores.lng){
         mapa.flyTo({
            center: [valores.lng,valores.lat],
            essential: true,
            zoom:15
            });
         new Marker({
            color:"red",
            rotationAlignment: 'map'})
            .setLngLat([valores.lng,valores.lat])
            .addTo(mapa)
        }
      
      },[valores])
      ///va hacia el sitio que se toco en el boton y pone un marcador
      useEffect(()=>{  
        if(mapa && miUbicaionActiva==true){    
            mapa.flyTo({
               center: [lng,lat],
               essential: true,
               zoom:zoom
               });
            new Marker({
               color:"red",
               rotationAlignment: 'map'})
               .setLngLat([lng,lat])
               .addTo(mapa)
               setMiUbicacionActivada(false)
        }
      
      },[miUbicaionActiva])
         //mueve el mapa
      useEffect(() => {
         if (mapa){
            mapa.on('move', () => {
               setLng(mapa.getCenter().lng.toFixed(4));
               setLat(mapa.getCenter().lat.toFixed(4));
               setZoom(mapa.getZoom().toFixed(2));
               });}});
        //Activa boton mi ubicaion
           const miUbicacionActual = ()=>{
            if(location.lng && location.lat && mapa){
               setLng(location.lng);
               setLat(location.lat);
               setZoom(12);
               setMiUbicacionActivada(true)
               valores.setLocation([location.lng,location.lat])
            }else{
               giveUbication(setLocation)
            }
      }
      //setea el mapa
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
           
      return (
         <div>
            <div  ref={divMapaRef} style={window.innerWidth>600?{height:"250px",width:"100%"}:{height:"200px",width:"100%"}}>
            <div style={divStyle}>
            Longitude:{lng}|Latitude:{lat} 
            </div>
            <div style={{...divStyle,bottom:0,right:0,cursor:"pointer",padding:"0"}}>
            <button type="button" onClick={miUbicacionActual} 
            style={{"background":"none","border":"none",color:'#ffeb3b',cursor:"pointer",padding:"10px"}}
            >Mi ubicacion</button>
            </div>
            </div>
         </div>
       );
    }


​