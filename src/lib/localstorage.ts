const data ={
  me:{ 
    error:false,
    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsImlhdCI6MTY2MjY4MDM1NH0.J1PEJvXzATknKdDpIDfrQmSt1pFSOppuy3bK7A8YcjE",
    reports:[],
    reportsCercanos:[],
    page:"",
    name:"",
    email:"",
    location:{
      lng:"",
      lat:""
    }}
   
}
function init(){
     
   if(!localStorage.me){
     setState()
   }else{
     const localData = JSON.parse(localStorage.getItem("me"))
     data.me=localData
     //this.setState(data) 
   }
  return data;
  }
  function setState() {
   localStorage.setItem("me", JSON.stringify(data.me));
  }
  export {init}