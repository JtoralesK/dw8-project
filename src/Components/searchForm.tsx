import React from "react"
import {useNavigate} from"react-router-dom"
import { useSearch} from "../hooks"
import {MyButton} from "./ui/button/button"
import {MyInput} from "./ui/textfield/input"

type Prop= {
    onSearch:(any)=>any
}
function SearchForm(p:Prop){
    const results = useSearch();    
    const history = useNavigate() 
    const activaForm= (e)=>{
        e.preventDefault()
        if(p.onSearch){
            const q = e.target.buscador.value
            p.onSearch(q)
            history("/search/"+q,{replace:true})
        }
    }
    return (<form onSubmit={activaForm}>
       <div className="buscador">
       <MyInput></MyInput>
       <MyButton pal="buscar"></MyButton>
       </div>
        </form>)
}
       
       
  
export { SearchForm}