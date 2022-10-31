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
           <div className={css.conteiner}>
           <div className={css.reportConteiner}>
                <h1 >Mi mascota perdida</h1>
                <form className={css.form}> 
               
                <div  className={css.divZonaDescription}>
                <label className={css.labelName}>
                 <h2>Nombre de la mascota*</h2>
                 <input className={css.inputReport} type="text"  name="name" required  placeholder="michi"/>
                 </label>
                 <label className={css.labelLocalidad}>
                 <h2>Descripcion*</h2>
                 <textarea className={css.inputReport} rows={4}  name="" placeholder="Gato blanco con manchitas grises. Tiene un año y es macho . Super amigable . Se le hace como un casquito en la cabeza con sus colores grises y blancos.." ></textarea>
                 </label>
                <label>
                <h2>Foto de la mascota*</h2>
                <MyDropzone value={image} onChange={setImage}></MyDropzone>
                </label>
                </div>

                <div className={css.divZonaUbicacion}>
                 <Mapa></Mapa>
                 <label className={css.labelLocalidad}>
                 <h2>Indica ciudad y localidad*</h2>
                 <input className={css.inputReport} type="text"  name="name" required  placeholder="Buenos Aires,Palermo"/>
                 </label>
                 <div className={css.buttonsReportar}>
                 <button>Reportar como pérdido</button>
                 <button>Cancelar</button>
                 </div>
                </div>

                </form>
            </div>
           </div>
        </div>
     </>
        )
 }    
   
export {Reportar}