import React from "react";
import css from "./seccionViMascota.css"
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
type Prop ={
    name:String,
    img:string,
    onClick?:()=>any,
    onSubmit?:(any)=>any
    estadoLoader:boolean
}

 function SeccionViMascota (p:Prop){
   const onClick =()=>{    
        if(p.onClick){
            p.onClick()
        }
   }
   const enviarForm = (e)=>{
    e.preventDefault();
    const {name,bio,cellphone}= e.target;
    if(p.onSubmit){
        p.onSubmit({name:name.value,bio:bio.value,cellphone:cellphone.value})
    }
   }
    return <>
     <div className={css.conteinerViMascota}>
       <div className={css.seccionMascota}>
        <div className={css.seccionMascotaImg}><img className={css.mascotaImg} src={p.img}  /></div>
       <div>
       <h1 className={css.titleSeccionMascota}>¿Viste a {p.name}?</h1>
       <form onSubmit={enviarForm} className={css.formSeccionMascota}>
            <label>
                <p className={css.pSeccionMascota}>Tu nombre</p>
                <input className={css.inputSeccionMascota} type="text" name="name"  placeholder="Julian" />
            </label>
            <label>
                <p className={css.pSeccionMascota}>Tu numero</p>
                <input className={css.inputSeccionMascota} type="text" name="cellphone"  placeholder="54 9 112343625" />
            </label>
            <label>
                <p className={css.pSeccionMascota}>¿Donde viste a {p.name}?</p>
                <textarea className={css.inputSeccionMascota} name="bio"  ></textarea>
            </label>
            <div className={css.divButton}>
            <button className={css.buttonFormSeccionMascota}>Reportar información</button>
            <span style={p.estadoLoader?{"display":"block"}:{"display":"none"}} className={css.loaderCircular}></span>
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