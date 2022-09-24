import React , { useState ,useEffect}from "react"
import {user} from"../../hooks/atoms"
import { useRecoilState} from"recoil"
import css from"./reportar.css"
import {Mapp} from"../../Components/mapbox/mapbox"
 function Reportar(){  

   const [lookUser,serUser]=useRecoilState(user)
   
    return (
     <>
        <div className={css.conteiner}>
            <div className={css.reportConteiner}>
                <Mapp></Mapp>
                <form className={css.form}> 
                <h1 >Mi reporte</h1>
                <label >
                 <h2>Nombre de la mascota</h2>
                 <input className={css.input} type="text"  name="name" required  placeholder="michi"/>
                 </label>
                 <input className={css.input}  name="busqueda" type="search" required placeholder="michi"/>
                  <button>Reportar</button>
                 </form>

                <div className={css.ingresarImg}>
                    <textarea cols={30} rows={10}></textarea>
                    <button >Confirmar Ubicación</button>

                </div>
                
            </div>
        </div>
     </>
        )
 }    
   
export {Reportar}