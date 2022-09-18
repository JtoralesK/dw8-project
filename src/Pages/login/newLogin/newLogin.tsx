import React , { useState ,useEffect}from "react"
import {MyButton} from"../../../Components/ui/button/button"
import css from"./new.css"
import {useUser} from"../../../hooks/useUser"

type Prop = {
    submit?:(any)=>any,
    active:true|false,
    salir:()=>any
}
 function NewLogin(p:Prop){  
   
    const [fullName,setFullname]= useState("");
    const [password,setPassword]= useState("");
    const [email,setEmail]= useState("");


    const handle = (e)=>{
        e.preventDefault();
        
       // const target = e.target;
       // if(p.submit){
       //     p.submit({fullname,email,password})
       // }
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
        <input value={fullName} onChange={(e)=>{setFullname(e.target.value)}} className={css.input} type="text" placeholder="Name"/>
        <input  value={password} onChange={(e)=>{setPassword(e.target.value)}} name="email" className={css.input} type="email" placeholder="Email"/>
        <input  value={email} onChange={(e)=>{setEmail(e.target.value)}} name="password" className={css.input} type="password" placeholder="password" />
        <MyButton name="Registrate"></MyButton>
       <div className={css.linea}></div>
       </form>
      </div>
     </>
        )
 }    
   
export {NewLogin}