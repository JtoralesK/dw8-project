import React , { useState ,useEffect}from "react"
import {Outlet } from"react-router-dom"
import { Header } from "../../Components/Header/header"
import {Link ,useParams} from"react-router-dom"
import css from"./home.css"
import {Card} from "../../Components/card/card"
import {page,user,ubication} from"../../hooks/atoms"
import { useRecoilState} from"recoil"

 function Home(){
    return (
      <div>
        <div className={css.principal}>
          <div className={css.cajaTitulo}>
            <h1 className={css.titulo}>¡Encontrá a tu mejor amigo en pocas horas!</h1>
            <p className={css.parrafo}>Vamos a ayudarte a viralizar la imagen de tu mascota perdida. Logramos rastreos
               inteligentes a través de publicidad geolocalizada en redes sociales.
               <br></br><br></br>
                Aseguramos llegar a tus vecinos y a miles de personas de la zona donde se
               extravió tu mejor amigo.
               <br></br><br></br>
              No importa si fue robado, se escapó o simplemente se perdió, ¡podemos encontrarlo</p>
           </div>
       <div className={css.contenedorImg}>
       <img className={css.img} src="https://soywako.com/ar/assets/img/home6.jpg" alt="" />
        </div>
        </div>
      </div>
        )
 }    
   
export {Home}