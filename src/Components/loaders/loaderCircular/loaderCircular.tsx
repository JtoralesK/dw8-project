import React from "react";
import css from "./loaderCircular.css"
   type Prop={
      estado:Boolean
   }
 function LoaderCircular (p:Prop){
    return <div style={p.estado?{display:"initial"}:{display:"none"}} className={css.divLoader}>
         <span className={css.loader}></span>
         </div>
   }

export {LoaderCircular};