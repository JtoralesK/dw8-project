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
                <h1 >Mi mascota perdida</h1>
                <label className={css.labelName}>
                 <h2>Nombre de la mascota*</h2>
                 <input className={css.inputReport} type="text"  name="name" required  placeholder="michi"/>
                 </label>
                <label>
                <h2>Foto de la mascota*</h2>
                <MyDropzone value={image} onChange={setImage}></MyDropzone>
                </label>
                <Mapa></Mapa>
                 <button >Ir a mi ubicaion aproximada</button>
                 <label className={css.labelLocalidad}>
                 <h2>Indica ciudad y localidad*</h2>
                 <input className={css.inputReport} type="text"  name="name" required  placeholder="Buenos Aires,Palermo"/>
                 </label>
                 <label className={css.labelLocalidad}>
                 <h2>Descripcion*</h2>
                 <textarea className={css.inputReport} rows={4}  name="" placeholder="Gato blanco con manchitas grises. Tiene un año y es macho . Super amigable . Se le hace como un casquito en la cabeza con sus colores grises y blancos.." ></textarea>
                 </label>
                 <button>Reportar como pérdido</button>
                 <button>Cancelar</button>
                </form>
            </div>
        </div>
     </>
        )
 }    
   
export {Reportar}