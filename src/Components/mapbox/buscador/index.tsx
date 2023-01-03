import React, { useState,useEffect} from "react"
import {handleChange} from"../buscaLugares/index"
import css from"./buscador.css"
type prop = {
    push:(e)=>any
}
 export  function Buscador(p:prop){
    const [results,setResults]=useState([])
    const [center,setCenter]= useState<any>({})
    const [place,setPlace]= useState<any>("")
    const v= center.center
    useEffect(()=>{
        if(v){
            const v= center.center
            p.push({lng:v[0],lat:v[1]})            
        }
    },[center])
   const handle = (a)=>{
    handleChange(a).then((re)=>{
        setResults(re)
    })
   
   }
    return (
         <div >
          <h2>Indica ciudad y localidad*</h2>
          <input value={place} onChange={(e)=>{            
           setPlace(e.target.value)
           handle(e)
        }} 
          style={{width:"100%"}} type="text"  name="location"
           required={true}  placeholder={"Buenos Aires, Retiro"}/>
           <div className={css.links}>
            {results
            ?
             <>{results.map((e)=>{
                return <button  key={e.id} onClick={()=>{
                    setCenter(e)
                    setResults([])
                    setPlace(e.place_name)
                }}>{e.place_name}</button>
            })}
            </>
            :
             null}
           </div>
         </div>
       );
 }


