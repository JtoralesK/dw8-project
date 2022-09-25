import {Link ,useNavigate } from"react-router-dom"
import React , { useState ,useEffect}from "react"
import {atom , useSetRecoilState, useRecoilValue,selector} from"recoil"
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const user = atom({
  key: "me",
  default:{
  token:"",
  email:"",
  fullname:""},
  effects_UNSTABLE: [persistAtom]
});
export const page = atom({
    key: "page",
    default:"/",
    effects_UNSTABLE: [persistAtom]
  });
 
  export const ubication = atom({
    key: "location",
    default:{
      lng:null,
      lat:null,
      estado:false,
    },
    effects_UNSTABLE: [persistAtom]
  });
  export const reports = atom({
    key: "reports",
    default:[],
    effects_UNSTABLE: [persistAtom]
  });
  export const cargar = atom({
    key: "cargar",
    default:false,
  });