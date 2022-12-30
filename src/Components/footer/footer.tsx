import React, { useEffect, useState } from "react";
import css from "./footer.css"
import { VscTriangleDown } from "react-icons/vsc";
import { AiFillInstagram ,AiFillYoutube , AiFillTwitterCircle, AiFillFacebook , AiFillHome } from "react-icons/ai";

let vec;
if(window.screen.width>600){
    vec = [true,true,true,true,true]
}else{
    vec = [false,false,false,false,false]

}
function Footer(){
    const [v,setV]=useState<boolean[]>(vec);  
    const click = (e:number)=>{
        v[e-1]= !v[e-1];     
        setV([v[0],v[1],v[2],v[3],v[4]]);
      }
return <>
<div className={css.footer}>
    <div className={css.divCenterFooterImg}>
    <img width={300} src={"https://media.petcolove.org/Attachments/NewItems/PetcoLoveLostLogo_ColorRGB_20211022172440_0.svg"} id={"s"} />

    </div>
    <div className={css.divCenterFooter}>
    <div className={css.listFooter}>
        <div>
            <h3 className={css.listFooterH3}>Who We Are
             <span className={css.buttonVerMas}><button onClick={()=>{click(1)}}><VscTriangleDown/></button></span>
            </h3>
            <p style={v[0]===true?{"display":"initial"}:{display:"none"}} className={css.listFooterP}>About</p>
        </div>
        <div>
            <h3 className={css.listFooterH3}>
                Our Family
                <span className={css.buttonVerMas}><button onClick={()=>{click(2)}} ><VscTriangleDown/></button></span>
           </h3>
            <p className={css.listFooterP} style={v[1]===true?{"display":"block"}:{display:"none"}}>Petco Love</p>
            <p className={css.listFooterP} style={v[1]===true?{"display":"block"}:{display:"none"}}>Petco.com</p>
        </div>
        <div>
            <h3 className={css.listFooterH3}>
                Partners
                <span className={css.buttonVerMas}><button onClick={()=>{click(3)}}><VscTriangleDown/></button></span>
            </h3>
           <p className={css.listFooterP} style={v[2]===true?{"display":"block"}:{display:"none"}}>Supporters</p>
            <p className={css.listFooterP} style={v[2]===true?{"display":"block"}:{display:"none"}}>Shelters</p>
            <p className={css.listFooterP} style={v[2]===true?{"display":"block"}:{display:"none"}}>Petco Love Partner</p>
            <p className={css.listFooterP} style={v[2]===true?{"display":"block"}:{display:"none"}}>Portal</p>
        </div>
        <div>
            <h3 className={css.listFooterH3}>
                Pet Search
            <span className={css.buttonVerMas}><button onClick={()=>{click(4)}}><VscTriangleDown/></button></span>
            </h3>
            <p className={css.listFooterP} style={v[3]===true?{"display":"initial"}:{display:"none"}}>Search Lost Pets</p>
        </div>
        <div>
            <h3 className={css.listFooterH3}>
            Get in Touch
            <span className={css.buttonVerMas}><button onClick={()=>{click(5)}}><VscTriangleDown/></button></span>
            </h3>
            <p className={css.listFooterP} style={v[4]===true?{"display":"initial"}:{display:"none"}}>Help Center</p>
        </div>
    </div>
    </div>
    <div className={css.divCenterFooter}>
    <div className={css.linksFooter}>
    <AiFillInstagram/>
    <AiFillTwitterCircle/>
    <AiFillYoutube/>
    <AiFillFacebook/>
    <AiFillHome/>
    </div>
    </div>
<div className={css.divCenterFooter}>
<p className={css.pFooter}>Use of this service, website,
 or application constitutes acceptance of all terms listed above.
 Petco Love Lost and its associated logos are trademarks of Petco Animal Supplies, Inc. © 2022,
 Petco Love | Petco Animal Supplies, Inc. All rights reserved.
Privacy Policy | Terms of Service</p>
</div>

</div>
</>

}
export{Footer}