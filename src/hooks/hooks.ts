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