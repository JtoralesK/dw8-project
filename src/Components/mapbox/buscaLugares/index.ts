import {BuscarLugares} from "../../../hooks/hooks"
const {enviaResultados}= BuscarLugares();
export async function handleChange (e){
    const query = e.target.value
       const results= await enviaResultados(query)       
      const res =  results.features
      try{
        return res
      }catch(error){
        return error
      }
 }