import React from "react";
import css from "./card.css"
type Prop ={
    name:String,
    localidad:String,
    img:string
    nameButon:string
    onClick?:(any)=>any
}

 function Card (p:Prop){
    const presion = ()=>{        
        if(p.onClick){
            p.onClick(p)            
        }
    }
    return <>
        <div className={css.serviciosCard}>
         <img className={css.serviciosCardImg} src={p.img} alt="" />
        <div className={css.info}>
        <h2 className={css.localidad}>{p.localidad}</h2>
        <div className={css.lovi}>
        <h4 className={css.name}>{p.name}</h4>
        <button onClick={presion} className={css.button}>{p.nameButon}</button>
        </div>
        </div>
        </div>
        
 

    </>
  
}
export {Card};