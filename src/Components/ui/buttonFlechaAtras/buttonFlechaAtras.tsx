import React, { Children } from "react"
import css from "./buttonFlechaAtras.css"
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
type Prop={
  onClick:(any?)=>any
}
function ButtonFlecha(p:Prop){
  
    return (
        <div className="divButton">
         <button onClick={()=>{p.onClick()}} type="button" className={css.buttonSeccionVista}><BsFillArrowLeftSquareFill /></button>
        </div>
      )
}
       
export {ButtonFlecha}