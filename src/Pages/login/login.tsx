import React , { useState ,useEffect}from "react"
import {Enter} from"./enter/enterLogin"
import {page,user} from"../../hooks/atoms"
import { useRecoilState} from"recoil"
import css from"./login.css"
import {MyButton} from"../../Components/ui/button/button"
import {NewLogin} from"./newLogin/newLogin"
import {useNavigate } from"react-router-dom"
import {obtieneToken,obtieneUser} from"../../hooks/hooks"
import {useLocalStorage} from"../../hooks/useLocalStorage"

 function Login(){  
   const [lookUser,serUser]=useRecoilState(user)
   const [value,setLocal]= useLocalStorage("user",{})
   const [linkPage,setPage]= useLocalStorage("page",{})

   const va:any=value
   useEffect(()=>{
      if(value){
         console.log("value login:",value);
         serUser(value)         
      }
   },[value])







    const [logged,setLogged]=useState(null);
    const navigate = useNavigate() 
    const enter =(e)=>{    
      
      const email = e.email
      const password = e.password
      obtieneToken({email,password}).then((e1)=>{
         obtieneUser(e1).then((e)=>{
            if(e1.token){
               setLocal({token:e1.token,fullname:e.fullname,email:e.email})
               navigate(linkPage)
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