import React , { useState ,useEffect} from "react"
import {Link ,Outlet} from"react-router-dom"
import {SearchItem} from"../Components/searchItem"
import { useSearch} from "../hooks"

 function SearchResults(){
  const results = useSearch();
    return (
      <div>
        {results.map(e=>(
          
          <Link to={"/item/"+e.id+e.price}>
          <SearchItem key={e.id}  url={e.thumbnail} price={e.price} product={e.title} ></SearchItem>
          </Link>
        
        ))}
         
      </div>
        )
     
        }   

export {SearchResults}