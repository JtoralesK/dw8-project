import React , { useState ,useEffect}from "react"
import {Outlet } from"react-router-dom"
import { Header } from "../../Components/Header/header"
import {Link ,useParams} from"react-router-dom"
import css from"./home.css"
import {Card} from "../../Components/card/card"
import {initStorage} from"../../hooks/initLocalStorage"
import {confirmaUser} from"../../hooks/hooks"

 function Home(){
  let data = initStorage();
      function click(){
       // let confirmUs=  confirmaUser(data)
        //confirmUs.then((e)=>console.log(e))
        
      }
 
    return (
      <div>
        <Header></Header>
        <div className={css.principal}>
        <div>dfhfdh</div>
       <div><Card></Card></div>
       <button onClick={click}>click</button>
        </div>
      </div>
        )
 }    
   
export {Home}