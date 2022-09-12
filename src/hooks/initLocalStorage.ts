export function initStorage(){
    let data={
        email : "",
        error : false,
        location : {lng: "", lat: ""},
        name : "",
        page : "",
        reports : [],
        reportsCercanos : [],
        token : "",
       }
       
       if(!localStorage.token){
          localStorage.setItem("me",JSON.stringify(data));
       }else{
        data=JSON.parse(localStorage.getItem("me"));
       }
       return data;
}
export function dataLocalStorage(){
    const data=JSON.parse(localStorage.getItem("me"));
    return data
}
export function setLocalStorage(newData){
    localStorage.setItem("me",JSON.stringify(newData));
}