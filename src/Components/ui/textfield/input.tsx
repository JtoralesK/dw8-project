import React from "react"
import css from "./input.css"
type Prop= {
  pal:string
}
function MyInput(props){
    return (
           <input  type="text" name="buscador" placeholder="Que buscas?" className={css.button}></input>
      )
}
       
export {MyInput}