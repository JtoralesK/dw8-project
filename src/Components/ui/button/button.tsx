import React, { Children } from "react"
import css from "./button.css"
type Prop= {
  name:string
  click?:()=>any
}
function MyButton(p:Prop){
  
    return (
           <button  onClick={p.click} className={css.buttonMy}>{p.name}</button>
      )
}
       
export {MyButton}