import React , { useState ,useEffect}from "react"
import {user} from"../../hooks/atoms"
import { useRecoilState} from"recoil"
import css from"./reportar.css"
import {Mapa} from"../../Components/mapbox/mapbox"
import {MyDropzone} from "../../Components/imgDropzone/imgDropzone"
 function Reportar(){  

   const [lookUser,serUser]=useRecoilState(user)
   const [image, setImage]=useState("")
    return (
     <>
        <div className={css.body}>
            <div className={css.reportConteiner}>
                <form className={css.form}> 
                <h1 >Mi reporte</h1>
                <label >
                 <h2>Nombre de la mascota</h2>
                 <input className={css.input} type="text"  name="name" required  placeholder="michi"/>
                 </label>
                 <input className={css.input}  name="busqueda" type="search" required placeholder="michi"/>
                 </form>
                <MyDropzone value={image} onChange={setImage}></MyDropzone>
                <div className={css.ingresarImg}>
                <Mapa></Mapa>
                    <button >Confirmar Ubicación</button>
                </div>
                
            </div>
        </div>
     </>
        )
 }    
   
export {Reportar}