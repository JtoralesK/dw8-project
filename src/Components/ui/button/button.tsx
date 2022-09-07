import React from "react"
import css from "./button.css"
type Prop= {
  pal:string
}
function MyButton(props){
    return (
           <button className={css.button}>{props.pal}</button>
      )
}
       
export {MyButton}