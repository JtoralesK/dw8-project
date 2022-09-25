import React , { useState ,useEffect}from "react"
import {Enter} from"./enter/enterLogin"
import {page,user} from"../../hooks/atoms"
import { useRecoilState} from"recoil"
import css from"./login.css"
import {MyButton} from"../../Components/ui/button/button"
import {NewLogin} from"./newLogin/newLogin"
import {useNavigate } from"react-router-dom"
import {creaUsuario,obtieneUser} from"../../hooks/hooks"

 function Login(){  
   const [value,serUser]=useRecoilState(user)
   const [valuePage,serPage]=useRecoilState(page)
   const {obData,data}= obtieneUser();

   useEffect(()=>{
      if(value){
         serUser(value)         
      }
   },[value])


    const [logged,setLogged]=useState(null);
    const navigate = useNavigate() 
    const enter =(e)=>{    
      
      const email = e.email
      const password = e.password
      creaUsuario({email,password}).then((token)=>{
         obData(token).then((user)=>{            
            if(user.id){
               console.log("entra o no entra");
               
              serUser({token:token.token,fullname:user.fullname,email:user.email})
             navigate(valuePage)
            }     
         })
            
      })
            
    }



    //abre card new cuenta
    const [active,setActive]=useState(false)
    const datosNewCuenta = ()=>{
      setActive(!active)
    }

    const salir = ()=>{
        setActive(!active)
    }
    return (
     <>
     <section className={css.bodyy}>
        <div className={css.loginSection}>
        <img className={css.img} src="https://www.nami.org/NAMI/media/NAMI-Media/BlogImageArchive/2020/human-animal-bond-blog.jpg" alt="" />
        <div className={css.cardLog}>
        <Enter submit={enter} ></Enter>
        <MyButton click={datosNewCuenta} name="Crear nueva cuenta"></MyButton>
        </div> 
        </div>
        <NewLogin active={active} salir={salir} ></NewLogin>
     </section>
     </>
        )
 }    
   
export {Login}