
async function loginService({email,password}){
    const API_BASE_URL= "https://apx-desafio-mod7.herokuapp.com"    
    return fetch(API_BASE_URL+"/auth/token",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      }, body:JSON.stringify({email,password})
    }).then(res => {
      return res.json()
    }).catch((err)=>{
      throw new Error('Response is NOT ok')
    })
  }
export{loginService}