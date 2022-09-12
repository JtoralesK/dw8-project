
function prac(data:any){
    const API_BASE_URL= "https://apx-desafio-mod7.herokuapp.com"
    console.log("prac:",data.me);
    
    fetch(API_BASE_URL+"/user",{
        headers:{
          'Authorization':`bearer ${data.me.token}`
        },
      }).then(response => response.json())
      .then(data => {
        console.log(data);
      }).catch((error)=>{
        console.error(error)
      });
}

export{prac}