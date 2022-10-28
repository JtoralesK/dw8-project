import React , { useState ,useEffect}from "react"
import {MyButton} from"../../../Components/ui/button/button"
import css from"./enter.css"
type Prop = {
    submit?:(any)=>any
    cambiarForm?:(any)=>any
    error?:boolean
}
 function Enter(p:Prop){  
    const handle = (e)=>{
        e.preventDefault();
        const target = e.target;
        if(p.submit){
            p.submit({email:target.email.value,password:target.password.value})
        }
    }
    const click = ()=>{
        if(p.cambiarForm){
            p.cambiarForm((e)=>{!e})
        }
    }
    return (
     <>
      <div className={css.conteiner}>
      <form className={css.form} onSubmit={handle}>
        <input name="email" className={css.input} type="email" placeholder="Email"/>
        <input name="password" className={css.input} type="password" placeholder="password" />
        <MyButton name="Iniciar Sesion"></MyButton>
        <p className={css.errorFaltanDatos} style={p.error?{display:"initial"}:{display:"none"}}>Datos Incorrectos</p>
       <div className={css.linea}></div>
       </form>
       <MyButton click={click} name="Crear nueva cuenta"></MyButton>
      </div>

     </>
        )
 }    
   
export {Enter}