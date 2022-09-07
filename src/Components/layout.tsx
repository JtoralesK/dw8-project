import React , { useState ,useEffect}from "react"
import {SearchForm} from "./searchForm"
import {Outlet } from"react-router-dom"

 function Layout(){
  const [q,setQ]=useState("");

  function query(query?){
   setQ(query);
  } 
  useEffect(()=>{
    if(q){
      console.log("se imprimio",q); }
  },[q])
  
    return (
      <div>
        
        <SearchForm onSearch={query}></SearchForm>
        <Outlet></Outlet>
      </div>
        )
 }    
      

export {Layout}