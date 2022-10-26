import React , { useState ,useEffect}from "react"
import {Enter} from"./enter/enterLogin"
import {page,user} from"../../hooks/atoms"
import { useRecoilState} from"recoil"
import css from"./login.css"
import {MyButton} from"../../Components/ui/button/button"
import {NewLogin} from"./newLogin/newLogin"
import {useNavigate } from"react-router-dom"
import {iniciarUsuario,obtieneUser} from"../../hooks/hooks"
import {LoaderPuntito} from"../../Components/loaderPuntito/loaderPuntito"

 function Login(){  
   const [value,serUser]=useRecoilState(user)
   const [valuePage,serPage]=useRecoilState(page)
   const {obData,cargando}= obtieneUser();
   const {obDataUser}= iniciarUsuario();
   const [cargandoUser,setCargando] =useState(false)

   const [someForm,setSomeForm]= useState(true);

   useEffect(()=>{
      if(value){
         serUser(value)         
      }
   },[value])


    const [logged,setLogged]=useState(null);
    const navigate = useNavigate() 
    const enter =(e)=>{    
      setCargando(true);
      const email = e.email
      const password = e.password
      obDataUser(email,password).then((token)=>{
         obData(token).then((user)=>{            
            if(user.id){
             setCargando(false);
              serUser({token:token.token,fullname:user.fullname,email:user.email})
             navigate(valuePage)
            }    
            setCargando(false);
 
         })
            
      })
            
    }



    //abre card new cuenta
    const cambiarForm = ()=>{
      setSomeForm(!someForm)
    }
    const crea = ()=>{}
   
    return (
     <>
     <section className={css.bodyy}>
       <div className={css.contenedor}>
       <div className={css.loginSection}>
        <img className={css.imgLogin} src="https://stardatelogs.com/images/user/login.png" alt="" />
        <div className={css.cardLog}>
         {someForm
         ?
          <Enter submit={enter} cambiarForm={cambiarForm} ></Enter>
         :
         <NewLogin submit={crea} cambiarForm={cambiarForm}  ></NewLogin>
         }
         <LoaderPuntito state={cargandoUser}></LoaderPuntito>
        </div> 
        </div>
       </div>
       
     </section>
     </>
        )
 }    
   
export {Login}