import React from "react";
import css from "./seccionViMascota.css"
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
type Prop ={
    name:String,
    img:string,
    onClick?:()=>any
}

 function SeccionViMascota (p:Prop){
   console.log({p});
   const onClick =()=>{    
        if(p.onClick){
            p.onClick()
        }
   }
    return <>
     <div className={css.conteinerViMascota}>
       <div className={css.seccionMascota}>
        <div><img className={css.mascotaVista} src={p.img} alt="" /></div>
       <div>
       <h1 className={css.titleSeccionMascota}>¿Viste a {p.name}?</h1>
       <form className={css.formSeccionMascota}>
            <label>
                <p className={css.pSeccionMascota}>Tu nombre</p>
                <input className={css.inputSeccionMascota} type="text" name="" id="" placeholder="Julian" />
            </label>
            <label>
                <p className={css.pSeccionMascota}>Tu numero</p>
                <input className={css.inputSeccionMascota} type="text" name="" id="" placeholder="54 9 112343625" />
            </label>
            <label>
                <p className={css.pSeccionMascota}>¿Donde viste a {p.name}?</p>
                <textarea className={css.inputSeccionMascota} name="" id="" cols={5} rows={5}></textarea>
            </label>
            <div className={css.divButton}>
            <button className={css.buttonFormSeccionMascota}>Reportar información</button>
            </div>
        </form>
        <div className={css.divButtonRight}>
        <button className={css.buttonSeccionVista} onClick={onClick}><BsFillArrowLeftSquareFill /></button>
        </div>
        <div>
           
        </div>
       </div>
       </div>
     </div>

    </>
  
}
export {SeccionViMascota};