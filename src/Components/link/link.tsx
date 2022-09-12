import React from "react";
import {initStorage} from"../../hooks/initLocalStorage"
import {confirmaUser} from"../../hooks/hooks"
import {Link ,useParams} from"react-router-dom"

type prop={
from:string,
to:string
}
async function LinkT(p:prop){
    let data = initStorage();
    let confirmUs= await confirmaUser(data)
    console.log(confirmUs);
    let ba=true;
        if(confirmUs){
            ba=false;
        }
    return <>
    <Link to={ba ? "/paca" :"/tat"}></Link>
    </>
}
export {LinkT};