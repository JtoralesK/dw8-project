import React from "react"
import {Link ,useParams} from"react-router-dom"
type Props = {
    url:string,
    price:number,
    product:string
}
 function SearchItem(props:Props){
     const para = useParams()
     
    return (
        <div className="divItem">
            <div className="content">
            <img  src={props.url}></img>
                <div>
                    <h1>{props.product}</h1>
                    <h3>${props.price}</h3>
                </div>
            </div>
        </div>)
 }    
      

export {SearchItem}