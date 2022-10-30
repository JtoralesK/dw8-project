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
export async function crearUsuario(email:string,password:string,fullname:string){
  console.log(email,password,fullname);
  
  if(email==null || password==null || fullname==null ){
    console.error("falta data")
    return []
  }else{
    const json = await fetch("https://apx-desafio-mod7.herokuapp.com/auth",{
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
      const json = await fetch("https://apx-desafio-mod7.herokuapp.com/auth/token",{
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
  const [cargandoPassword,setCargando] =useState(false)
  async function actualizaPassword(passwordVieja:string,passwordNueva:string,passwordNuevaConfirmar:string,token:string){
    setCargando(true)    
    if(passwordVieja && passwordNueva && passwordNuevaConfirmar && token){
      const json = await fetch("https://apx-desafio-mod7.herokuapp.com/change-password",{
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
  const [cargandoImg,setCargandoImg] =useState(false)
  async function creaReport(img:string,token:string){
    setCargandoImg(true)    
    if(img){
      const json = await fetch("https://apx-desafio-mod7.herokuapp.com/profile",{
        method:"POST",
        headers:{
          'Authorization':`bearer ${token}`,
          'Content-Type': 'application/json'
        },
         body:JSON.stringify({img})})
          const info= json.json()
          try{
            setCargandoImg(false)                    
            return info
          }catch(error){
            setCargandoImg(false)            
            return error
          }
    }else{
      console.error("falta data")
      setCargandoImg(false)    
      return []
    }
  }
  return{
    cargandoImg,
    creaReport,
  }
}
export  function EnviarEmail(){
  const [cargandoEmail,setCargandoEmail] =useState(false)
  async function enviarReporte(img:string,bio:string,name:string,cellphone:number){
    setCargandoEmail(true)    
    if(img && bio && name && cellphone ){
      const json = await fetch("https://apx-desafio-mod7.herokuapp.com/email",{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
         body:JSON.stringify({img})})
          const info= json.json()
          try{
            setCargandoEmail(false)                    
            return info
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