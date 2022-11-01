import React , { useState ,useEffect}from "react"
import {Enter} from"./enter/enterLogin"
import {page,user} from"../../hooks/atoms"
import { useRecoilState} from"recoil"
import css from"./login.css"
import {MyButton} from"../../Components/ui/button/button"
import {NewLogin} from"./newLogin/newLogin"
import {useNavigate } from"react-router-dom"
import {iniciarUsuario,obtieneUser,crearUsuario} from"../../hooks/hooks"
import {LoaderPuntito} from"../../Components/loaders/loaderBarra/loaderPuntito"

 function Login(){  
   //atoms
   const [value,serUser]=useRecoilState(user)
   const [valuePage,serPage]=useRecoilState(page)
   //hooks
   const {obData}= obtieneUser();
   const [cargandoUser,setCargando] =useState(false)
   //state this
   const [someForm,setSomeForm]= useState(true);
   const [datosIncorrectos,setDatosIncorrectos]=useState(false)
   const [usuarioYaCreado,serUsuarioYaCreado]=useState(false)

 //cambia de form
 const cambiarForm = ()=>{
   setSomeForm(!someForm)
 }
   useEffect(()=>{
      if(value){
         serUser(value)         
      }
   },[value])
   const navigate = useNavigate() 

   //iniciar secion
    const enter =(e)=>{    
      setCargando(true);
      setDatosIncorrectos(false)

      const {email,password} = e
      iniciarUsuario(email,password).then((token)=>{
         console.log(token);
         if(token.user==="incorrect dates"){
            console.log("Datos incorrectos");
            setCargando(false);
            setDatosIncorrectos(true)
         }else{
            obData(token).then((user)=>{            
               if(user.id){
                setCargando(false);
                 serUser({token:token.token,fullname:user.fullname,email:user.email})
                navigate(valuePage)
               }    
               setCargando(false);
    
            })
         }
       
            
      })
            
    }

    //crear usuario

   
    const crea = (e)=>{
      setCargando(true);
      serUsuarioYaCreado(false)
      const {email,password,fullname} = e
      crearUsuario(email,password,fullname).then((me)=>{         
            let error = me[1]
            if(me[0]!=null){
               let user = me[0]
               iniciarUsuario(email,password).then((token)=>{ 
               console.log({token});
                setCargando(false);
                serUser({token:token.token,fullname:user.fullname,email:user.email})
                 navigate(valuePage)
                })
            }    
            if(error){
               setCargando(false);
               console.error(error);
               serUsuarioYaCreado(true)
            }
            setCargando(false);
 
         })
    }
   
    return (
     <>
     <section className={css.bodyy}>
       <div className={css.contenedor}>
       <div className={css.loginSection}>
        <img className={css.imgLogin} src="https://stardatelogs.com/images/user/login.png" alt="" />
        <div className={css.cardLog}>
         {someForm
         ?
          <Enter submit={enter} cambiarForm={cambiarForm} error={datosIncorrectos} ></Enter>
         :
         <NewLogin submit={crea} cambiarForm={cambiarForm} error={usuarioYaCreado} ></NewLogin>
         }
        <LoaderPuntito  state={cargandoUser}></LoaderPuntito>
        </div> 
        </div>
       </div>
       
     </section>
     </>
        )
 }    
   
export {Login}