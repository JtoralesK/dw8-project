/*import {Link ,useNavigate } from"react-router-dom"
import React , { useState ,useEffect}from "react"
import {atom , useSetRecoilState, useRecoilValue,selector} from"recoil"


const page = atom({
    key: "page",
    default:" ",
  });
  const result = selector({
    key: 'ultimePage',
    get: async({get}) =>{
       const valorDePage= get(page)
       console.table({valorDePage});
       return valorDePage;
    }
   
  })
 function usePage(v:string){
    const data=JSON.parse(localStorage.getItem("me"));
  const [value,setValue] = useState("");
  setValue(data.page);
  const setQueryValue = useSetRecoilState(page)
  const valueUl=useRecoilValue(result)
  useEffect(()=>{
    if(value){
        setQueryValue(value)
        console.log("page:",value," a hooks.ts");
    }        
 },[value])
    return valueUl
}
  
      
export {usePage}*/