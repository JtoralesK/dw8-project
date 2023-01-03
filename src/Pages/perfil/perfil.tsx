import React , { useState ,useEffect}from "react"
import {useNavigate} from"react-router-dom"
import {user} from"../../hooks/atoms"
import { useRecoilState} from"recoil"
import {MyButton} from"../../Components/ui/button/button"
import css from"./perfil.css"
import {actualizarPerfil,obtieneUser,actualizarPassword}from"../../hooks/hooks"
import {LoaderPuntito} from"../../Components/loaders/loaderBarra/loaderPuntito"

 function Perfil(){  
   const [lookUser,serUser]=useRecoilState(user)
   const [meInfo, setMeInfo]=useState(false)
   const [mePassWord, setMePassword]=useState(false)
   const {obData}= obtieneUser();
   const {cargando,actualiza}=actualizarPerfil()
   const {cargandoPassword,actualizaPassword}=actualizarPassword()

   const navigate = useNavigate() 
   const me:any = lookUser
   const salir = ()=>{
    serUser({});
    navigate("/");
   }
   const editarPassword = (e)=>{
    e.preventDefault();
    const {antiguaPassword,nuevaPassword,passwordConfirmar}=e.target
    console.log(antiguaPassword.value,nuevaPassword.value,passwordConfirmar.value);
    actualizaPassword(antiguaPassword.value,nuevaPassword.value,passwordConfirmar.value,lookUser.token).then(data => {
      obData({token:lookUser.token}).then((user)=>{
        if(user.id){
         setMeInfo(false);setMePassword(false)
       }    
      })
    }).catch((error)=>{
      console.error(error)
      setMeInfo(false);setMePassword(false)
    });
   }
   //editar perfil
    const editarPerfil = (e)=>{
      e.preventDefault();
      const {name,email}=e.target
      actualiza(name.value,email.value,lookUser.token).then(data => {
        
        obData({token:lookUser.token}).then((user)=>{
          if(user.id){
           serUser({token:lookUser.token,fullname:user.fullname,email:user.email})
           setMeInfo(false);setMePassword(false)
         }    
        })
      }).catch((error)=>{
        console.error(error)
        setMeInfo(false);setMePassword(false)
      });
      
      
    }
    return (
     <>
    <section  className={css.perfil}>
    <div className={css.contenedor} >
      <div>
         <img className={css.imgPerfil} src="https://cdn.fs.teachablecdn.com/E8IhyZHBSqCrVymXCuf8" alt="" />
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
      <form onSubmit={editarPassword} className={css.editarPassword} style={mePassWord?{display:"initial"}:{display:"none"}}>
        <div className={css.editarInputs}> 
        <h1 className={css.titleEditar}>Editar Password</h1>
        <input className={css.input} type="password" placeholder="Antigua Password" name="antiguaPassword" required />
        <input  className={css.input} type="password" placeholder="Nuevo Password" name="nuevaPassword" required/> 
        <input  className={css.input} type="password" placeholder="Repetir password" name="passwordConfirmar" required/>
        <MyButton name="Guardar Cambios" ></MyButton>
        <LoaderPuntito state={cargando || cargandoPassword}></LoaderPuntito>
        </div>
       </form>
       <form onSubmit={editarPerfil} className={css.editarPerfil} style={meInfo?{display:"initial"}:{display:"none"}} >
        <div className={css.editarInputs}> 
        <h1 className={css.titleEditar}>Editar Perfil</h1>
        <input  className={css.input} type="text" placeholder="Nuevo Nombre" name="name"  />
        <input  className={css.input} type="email" placeholder="Nuevo Email" name="email" />
        <MyButton name="Guardar Cambios" ></MyButton>
        <LoaderPuntito state={cargando || cargandoPassword}></LoaderPuntito>

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