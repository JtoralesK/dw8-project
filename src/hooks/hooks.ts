 export async function obtieneUser(data){
  const url = await fetch("https://apx-desafio-mod7.herokuapp.com/user",{headers:{
        'Authorization':`bearer ${data.token}` }})
        data = await url.json()
        if(data.error){
          return false;
        }else{
          return data;
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
export async function obtieneToken(data){
  const json = await fetch("https://apx-desafio-mod7.herokuapp.com/auth/token",{
    method:"POST",
    headers:{
      'Content-Type': 'application/json'
    },
     body:JSON.stringify(data)})
    return json.json()
}
export async function reportesCercanos(data){
  if(data.lat==null || data.lng==null){
    console.error("falta la ubicacion de lng o lat")
    return []
  }else{
    const lat= data.lat
    const lng= data.lng
    console.log(lat,lng);
    
    const json = await fetch("https://apx-desafio-mod7.herokuapp.com/reportes-cerca-de?lat="+lat+"&lng="+lng)
      const info =  json.json()
      try{        
        return info
      }catch(error){
        return error
      }
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