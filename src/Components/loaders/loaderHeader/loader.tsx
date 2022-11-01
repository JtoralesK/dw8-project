import React from "react";
import css from "./loader.css"

export function Loader(){
    return <>
     <div className={css.span}>
    <span className={css.loader}></span>
   </div>
    </> 
}
