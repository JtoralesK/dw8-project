



import React , { useState ,useEffect}from "react"
import { useParams} from"react-router-dom"
import { useRecoilState} from"recoil"

import {page,user,ubication} from"./atoms"



export function useLocalStorage(key,initialValue){
    const [storedValue,setStoredValue]= useState((()=>{
      try{
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      }catch(error){
        return initialValue;
      }
    }));

    const setValue = (v)=>{
      try{
        setStoredValue(v);
        localStorage.setItem(key,JSON.stringify(v))
      }catch(error){
        console.error(error)
      }
    }
    return [storedValue,setValue]
}