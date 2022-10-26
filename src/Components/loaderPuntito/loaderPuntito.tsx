import React , { useState,useEffect}from "react"
import css from "./loaderPuntito.css"
type Prop={
    state:boolean
    
}
export function LoaderPuntito(p:Prop){
    const [num,setNum]=useState(1);
    useEffect(()=>{
        if(p.state==true){
            let i=0;             
                var id = setInterval(function(){
                   setNum(i);
                    if(i>100)  {
                        clearInterval(id);
                    }
                    i++;
                }, 200);   
               
             
            
           
            
        }
    },[p.state])

 return <>
   <div className={css.progress} style={p.state?null:{display:"none"}}>
    <div className={css.progressBar}  style={{width:`${num}%`}}>
        <span className={css.progressBarText}></span>
    </div>
</div>
    </> 
}
