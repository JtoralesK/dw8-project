import React , { useState ,useEffect}from "react"
import {MyButton} from"../../../Components/ui/button/button"
import css from"./new.css"
type Prop = {
    submit?:(any)=>any,
    active:true|false,
    salir:()=>any
}
 function NewLogin(p:Prop){  
    const handle = (e)=>{
        e.preventDefault();
        const target = e.target;
        if(p.submit){
            p.submit({fullname:target.name.value,email:target.email.value,password:target.password.value})
        }
    }
    const click  = ()=>{
        if(p.salir){
            p.salir()
        }
    }
    return (
     <>
      <div style={p.active?{display:"initial"}:{display:"none"}}  className={css.cardFlotante}>
       <div >
       <div className={css.titleDiv}>
       <h1>Resgistrate</h1>
       <button onClick={click}>ab</button>
       </div>
       <h3>Reporta tus mascota y comenta en donde se perdio</h3>
      
       </div>
      <form className={css.form} onSubmit={handle}>
        <input name="name" className={css.input} type="text" placeholder="Name"/>
        <input name="email" className={css.input} type="email" placeholder="Email"/>
        <input name="password" className={css.input} type="password" placeholder="password" />
        <MyButton name="Registrate"></MyButton>
       <div className={css.linea}></div>
       </form>
      </div>
     </>
        )
 }    
   
export {NewLogin}