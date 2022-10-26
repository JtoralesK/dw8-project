import React , { useState ,useEffect}from "react"
import {MyButton} from"../../../Components/ui/button/button"
import css from"./new.css"

type Prop = {
    submit?:(any)=>any,
    cambiarForm?:(any)=>any
}
 function NewLogin(p:Prop){  
   
    const handle = (e)=>{
        e.preventDefault();
        const {email,password,fullname} = e.target;
        if(p.submit){
            p.submit({email:email.value,password:password.value,fullname:fullname.value})
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
        <input name="fullname" className={css.input} type="text" placeholder="Nombre Completo"/>
        <input name="email" className={css.input} type="text" placeholder="Email"/>
        <input name="password" className={css.input} type="password" placeholder="password" />
        <MyButton name="Crear Cuenta"></MyButton>
       <div className={css.linea}></div>
       </form>
       <MyButton click={click} name="Iniciar Secion"></MyButton>
        </div>
     </>
        )
 }    
   
export {NewLogin}