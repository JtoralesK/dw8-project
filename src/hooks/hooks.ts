import React, { useState } from "react";

const API = "https://apipet.up.railway.app/"


 export  function obtieneUser(){
  const [cargando,setCargando] =useState(false)
  async function obData(data:any){
    setCargando(true)    
    if(data.token){
      
      const url = await  fetch(API+"user",{headers:{
        'Authorization':`bearer ${data.token}` }})
          const dataa =  await url.json()
          if(data.error){
            setCargando(false)
            return false
          }else{
            setCargando(false)
            return dataa
          }
    }else{
      setCargando(false)
      return false
    }    
  }
  return{
    cargando,
    obData,
  
  }
        
}
export async function crearUsuario(email:string,password:string,fullname:string){
  console.log(email,password,fullname);
  
  if(email==null || password==null || fullname==null ){
    console.error("falta data")
    return []
  }else{
    const json = await fetch(API+"auth",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
       body:JSON.stringify({email,password,fullname})})
      const info= json.json()
      try{
        return info
      }catch(error){
        return error
      }
  }

}
export async function iniciarUsuario(email,password){
    if(email==null || password==null){
      console.error("falta email o password")
      return []
    }else{
      const json = await fetch(API+"auth/token",{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
         body:JSON.stringify({email,password})})
        const info =  json.json()
        try{
          return info
        }catch(error){
          return error
        }
    }
  }
  


export  function reportesCercanos(){
  const [cargando,setCargando] =useState(false)
  async function obData(data:any){
    setCargando(true)    
    if(data.lat==null || data.lng==null){
      console.error("falta la ubicacion de lng o lat")
      setCargando(false)    
      return []
    }else{
      const lat= data.lat
      const lng= data.lng
      console.log(lat,lng);
      const json = await fetch(API+"reportes-cerca-de?lat="+lat+"&lng="+lng)
        const info =  json.json()
        try{
          setCargando(false)            
          return info
        }catch(error){
          setCargando(false)    
          return error
        }
    }
  }
  return{
    cargando,
    obData,
  }

 
}
export async function misReportes(data){
  const json = await fetch(API+"me/reportes",{headers:{
    'Authorization':`bearer ${data.token}` }})
    const info= json.json()
    try{        
      return info
    }catch(error){
      return error
    }
}
export  function actualizarPerfil(){
  const [cargando,setCargando] =useState(false)
  async function actualiza(name:string,email:string,token:string){
    setCargando(true)    
    if((name || email) && token){
      const json = await fetch(API+"editar-perfil",{
        method:"PUT",
        headers:{
          'Authorization':`bearer ${token}`,
          'Content-Type': 'application/json'
        },
         body:JSON.stringify({name,email})})
          const info= json.json()
          try{
            setCargando(false)                    
            return info
          }catch(error){
            setCargando(false)            
            return error
          }
    }else{
      console.error("falta data")
      setCargando(false)    
      return []
    }
  }
  return{
    cargando,
    actualiza,
  }
}
export  function actualizarPassword(){
  const [cargandoPassword,setCargando] =useState(false)
  async function actualizaPassword(passwordVieja:string,passwordNueva:string,passwordNuevaConfirmar:string,token:string){
    setCargando(true)    
    if(passwordVieja && passwordNueva && passwordNuevaConfirmar && token){
      const json = await fetch(API+"change-password",{
        method:"POST",
        headers:{
          'Authorization':`bearer ${token}`,
          'Content-Type': 'application/json'
        },
         body:JSON.stringify({passwordVieja,passwordViejaConfirmar:passwordVieja,passwordNueva,passwordNuevaConfirmar})})
          const info= json.json()
          try{
            setCargando(false)                    
            return info
          }catch(error){
            setCargando(false)            
            return error
          }
    }else{
      console.error("falta data")
      setCargando(false)    
      return []
    }
  }
  return{
    cargandoPassword,
    actualizaPassword,
  }
}
export  function creaReporte(){
  const [cargandoReporte,serReporte] =useState(false)
  async function creaReport(data,token:string){
    serReporte(true)    
    const {petName,location} = data
    const lng = data.latYlng[0]
    const lat =data.latYlng[1]
    const url = data.url
      
    if(petName && location && lat && lng && url){
      const json = await fetch(API+"profile",{
        method:"POST",
        headers:{
          'Authorization':`bearer ${token}`,
          'Content-Type': 'application/json'
        },
         body:JSON.stringify({petName,location,lat,lng,url})})
          const info= json.json()
          try{
            serReporte(false)                    
            return [true,info]
          }catch(error){
            serReporte(false)            
            return  [false,info]
          }
    }else{
      console.error("falta data")
      serReporte(false)    
      return []
    }
  }
  return{
    cargandoReporte,
    creaReport,
  }
}
export  function actualizarReporte(){
  const [cargandoReporte,serReporte] =useState(false)
  async function actualizarRe(data,token:string,id:number){
    serReporte(true)    
    const {petName,location} = data
    const lng = data.latYlng[0]
    const lat =data.latYlng[1]
    const url = data.url

  console.table( {petName,location,lat,lng,url});
      
    if(petName || location || (lat && lng) || url){
      console.log("entro al hook");
      
      const json = await fetch(API+`reportes/${id}`,{
        method:"PUT",
        headers:{
          'Authorization':`bearer ${token}`,
          'Content-Type': 'application/json'
        },
         body:JSON.stringify({petName,location,lat,lng,url})})
          const info= json.json()
          try{
            serReporte(false)                    
            return info
          }catch(error){
            serReporte(false)            
            return error
          }
    }else{
      console.error("falta data")
      serReporte(false)    
      return []
    }
  }
  return{
    cargandoReporte,
    actualizarRe,
  }
}
export  function EnviarEmail(){
  const [cargandoEmail,setCargandoEmail] =useState(false)
  async function enviarReporte(bio:string,name:string,cellphone:number,emailUser:string){
    setCargandoEmail(true)    
    if(bio && name && cellphone && emailUser){
      console.log("entro");
      
      const json = await fetch(API+"email",{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
         body:JSON.stringify({emailUser,bio,name,cellphone})})
          try{
            setCargandoEmail(false)                    
            return true
          }catch(error){
            setCargandoEmail(false)            
            return error
          }
    }else{
      console.error("falta data")
      setCargandoEmail(false)    
      return []
    }
  }
  return{
    cargandoEmail,
    enviarReporte,
  }
}
export  function EliminarReporte(){
  const [cargandoEl,setCargandoEl] =useState(false)
  async function eliminandoReporte(id:number){
    setCargandoEl(true)    
    if(id){
      console.log("entro");
      
      const json = await fetch(API+`eliminar-report/${id}`,{method:"Delete",})
        const info= json.json()
          try{
            setCargandoEl(false)                    
            return info
          }catch(error){
            setCargandoEl(false)            
            return error
          }
    }else{
      console.error("falta data")
      setCargandoEl(false)    
      return []
    }
  }
  return{
    cargandoEl,
    eliminandoReporte,
  }
}
const MAPBOX_TOKEN = "pk.eyJ1IjoiamF2aXRvcmFsZXNrIiwiYSI6ImNreTR0ZXg1eDBmN3EybnE5ZmVyc2d2OWQifQ.2CklQ60c6qrllj5ryyJBKg"

export  function BuscarLugares(){
  async function enviaResultados(a:string){
    if(a){            
      const json = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${a}.json?access_token=${MAPBOX_TOKEN}`)
        const info= json.json()
          try{
            return info
          }catch(error){
            return error
          }
    }else{return []}
    }
    return {enviaResultados}
  }
   
   
