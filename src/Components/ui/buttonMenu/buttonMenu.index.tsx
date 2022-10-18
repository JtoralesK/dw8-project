import React, { Children } from "react"
import css from "./buttonMenu.css"
type Prop= {
  click?:()=>any,
  state:boolean
}
function ButtonMenu(p:Prop){
  
    return (
          <div>
            <button className={p.state?css.cruz : css.menu}>
            <div></div>
            <div></div>
            <div></div>
           </button>
          </div>
      )
}
       
export {ButtonMenu}