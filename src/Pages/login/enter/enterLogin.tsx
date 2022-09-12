import React , { useState ,useEffect}from "react"
import {MyButton} from"../../../Components/ui/button/button"
import css from"./enter.css"
type Prop = {
    submit:(any)=>any
}
 function Enter(p:Prop){  
    const handle = (e)=>{
        e.preventDefault();
        const target = e.target;
        if(p.submit){
            p.submit({email:target.email.value,password:target.password.value})
        }
    }
    return (
     <>
       <form className={css.form} onSubmit={handle}>
        <input name="email" className={css.input} type="email" placeholder="Email"/>
        <input name="password" className={css.input} type="password" placeholder="password" />
        <MyButton name="Iniciar Sesion"></MyButton>
       <a ><h3 className={css.lostPassword}>¿Has olvidado la contraseña?</h3></a>
       <div className={css.linea}></div>
       </form>
     </>
        )
 }    
   
export {Enter}