import {Link ,useNavigate } from"react-router-dom"
import React , { useState ,useEffect}from "react"
import {atom , useSetRecoilState, useRecoilValue,selector} from"recoil"


export const page = atom({
    key: "page",
    default:"/login",
    
  });
  export const user:any = atom({
    key: "me",
    default:{
      token:"",
      email:"jtorales2016@gmail.com",
      fullname:"Javie Torales"
    }
    
  });