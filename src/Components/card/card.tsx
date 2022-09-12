import React from "react";
import css from "./card.css"
 function Card (){
    return <>
       <div className={css.serviciosContent}>
    <div className={css.serviciosContentCards}>
        <div className={css.serviciosCard}>
            <img className={css.serviciosCardImg} src="https://www.ecestaticos.com/imagestatic/clipping/797/767/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg?mtime=1622645511" alt="" />
        <div className={css.info}>
        <h4 className={css.serviciosCardTitle}>Ayudando a encontrarlos</h4>
        <p className={css.serviciosCardP}>Mascotas perdidas.Publica aquí tu mascota perdida o busca entre las que se han reportado como perdidas.</p>
        </div>
        </div>
        
    </div>
</div>
    </>
  
}
export {Card};