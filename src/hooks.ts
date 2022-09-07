import React , { useState ,useEffect}from "react"
import { useParams} from"react-router-dom"
import {atom , useRecoilState, useRecoilValue,selector} from"recoil"


const queryState = atom({
  key: "query",
  default:" ",
});
const resultState = selector({
  key: 'searhcResults',
  get: async({get}) =>{
     const valorDeQuery= get(queryState)
     console.log({valorDeQuery});
     
     if(valorDeQuery){
        const url = await fetch("https://api.mercadolibre.com/sites/MLA/search?q="+valorDeQuery)
        const urlParseada =await url.json()        
        return urlParseada.results
     }else{
      return [] }
    }
  }
   );

 function useSearch(){
    const [value, setQueryValue] = useRecoilState(queryState)
    const results=useRecoilValue(resultState)
    const query= useParams().query

  console.log("el valor de query en recoil",value);
  
   
    useEffect(()=>{
        if(query){
          setQueryValue(query)
            console.log("llego query",query," a hooks.ts");
        }        
     },[query])
     return results;
}
export {useSearch}