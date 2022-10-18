import React from "react";
import css from "./loaderPuntito.css"
type Prop={
    state:boolean
}
export function LoaderPuntito(p:Prop){
    return <>
   <span style={p.state?{display:"initial"}:{display:"none"}} className={css.loader}></span>
    </> 
}
