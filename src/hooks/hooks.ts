import React, { useState } from "react";
import {atom , useRecoilState, useRecoilValue,selector} from"recoil"
import {cargar} from"./atoms"

 export  function obtieneUser(){
  const [cargando,setCargando] =useState(false)
  async function obData(data:any){
    setCargando(true)    
    if(data.token){
      
      const url = await  fetch("https://apx-desafio-mod7.herokuapp.com/user",{headers:{
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
export async function auth(data){
  const json = await fetch("https://apx-desafio-mod7.herokuapp.com/auth",{
    method:"POST",
    headers:{
      'Content-Type': 'application/json'
    },
     body:JSON.stringify(data)})
    return json.json()
}
export async function creaUsuario(data){
  const json = await fetch("https://apx-desafio-mod7.herokuapp.com/auth/token",{
    method:"POST",
    headers:{
      'Content-Type': 'application/json'
    },
     body:JSON.stringify(data)})
    return json.json()
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
      const json = await fetch("https://apx-desafio-mod7.herokuapp.com/reportes-cerca-de?lat="+lat+"&lng="+lng)
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
  const json = await fetch("https://apx-desafio-mod7.herokuapp.com/me/reportes",{headers:{
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
      const json = await fetch("https://apx-desafio-mod7.herokuapp.com/editar-perfil",{
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
  const [cargando,setCargando] =useState(false)
  async function actualiza(passwordVieja:string,passwordNueva:string,passwordNuevaConfirmar:string,token:string){
    setCargando(true)    
    if(passwordVieja && passwordNueva && passwordNuevaConfirmar && token){
      const json = await fetch("https://apx-desafio-mod7.herokuapp.com/change-password",{
        method:"PUT",
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
    cargando,
    actualiza,
  }
}