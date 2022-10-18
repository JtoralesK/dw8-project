import React , { useState ,useEffect}from "react"
import {Outlet } from"react-router-dom"
import { Header } from "../../Components/Header/header"
import {Link ,useNavigate} from"react-router-dom"
import {user} from"../../hooks/atoms"
import { useRecoilState} from"recoil"
import {MyButton} from"../../Components/ui/button/button"
import css from"./perfil.css"

 function Perfil(){  
   const [lookUser,serUser]=useRecoilState(user)
   const [meInfo, setMeInfo]=useState(false)
   const [mePassWord, setMePassword]=useState(false)

   const navigate = useNavigate() 
  console.log({meInfo});
  console.log({mePassWord});

   const me:any = lookUser
   const salir = ()=>{
    serUser({});
    navigate("/");
   }
    return (
     <>
    <section  className={css.perfil}>
    <div className={css.contenedor} >
      <div>
         <img className={css.img} src="https://cdn.fs.teachablecdn.com/E8IhyZHBSqCrVymXCuf8" alt="" />
      </div>

      <div className={css.datos} style={meInfo || mePassWord ?{display:"none"}:null}>
      <h1 className={css.title}>Mi Perfil</h1>
      <h2 className={css.usuario}>Usuario:{me.fullname}</h2>
      <h2 className={css.email}>Email:{me.email}</h2>
     <div className={css.buttons}>
      <button onClick={()=>{setMePassword(!mePassWord)}}>Cambiar Contraseña</button>
      <button onClick={()=>{setMeInfo(!meInfo)}}>Editar Perfil</button>
     </div>
     <button onClick={salir} className={css.salir}>Salir</button>
      </div>

      <div className={css.editar} style={meInfo || mePassWord ?{display:"initial"}:null}>
      <form className={css.editarPassword} style={mePassWord?{display:"initial"}:{display:"none"}}>
        <div className={css.editarInputs}> 
        <h1 className={css.titleEditar}>Editar Password</h1>
        <input type="text" placeholder="Antigua Password" />
        <input type="text" placeholder="Nuevo Password" />
        <input type="text" placeholder="Repetir password" />
        <MyButton name="Guardar Cambios" ></MyButton>
        </div>
       </form>
       <form className={css.editarPerfil} style={meInfo?{display:"initial"}:{display:"none"}} >
        <div className={css.editarInputs}> 
        <h1 className={css.titleEditar}>Editar Perfil</h1>
        <input type="text" placeholder="Nuevo Nombre" />
        <input type="email" placeholder="Nuevo Email" />
        <MyButton name="Guardar Cambios" ></MyButton>
        </div>
       </form>
      <div className={css.buttonCancelar}><MyButton name="Cancelar" click={()=>{setMeInfo(false);setMePassword(false)}}></MyButton></div>
    </div>
    </div>

    </section>
     </>
        )
 }    
   
export {Perfil}