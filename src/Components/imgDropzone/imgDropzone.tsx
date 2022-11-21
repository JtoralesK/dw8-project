import React, {useCallback, useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import css from"./imgDropzone.css"
import {Loader}from"../loaders/loaderHeader/loader"
import {creaReporte} from"../../hooks/hooks"
import {user} from"../../hooks/atoms"
import { useRecoilState} from"recoil"


export function MyDropzone({value,onChange}) {
    const [cargandoImg,setCargandoImg]=useState(false);    
  const onDrop = useCallback(acceptedFiles => {
    setCargandoImg(true);
    acceptedFiles.map(file => {
        const reader = new FileReader()
        reader.onload = ()=>{
        onChange(reader.result)
        setCargandoImg(false);
       }
         reader.readAsDataURL(file)

    });
    
    }, [])
  

  const {getRootProps, getInputProps, } = useDropzone({
    onDrop,
    multiple:false
})

  return (
    <div className={css.dropzone}>
      <input {...getInputProps()} />
      {
         value
          ? 
          (<img className={css.img} src={value}></img>) 
          :
           cargandoImg ? <Loader></Loader> : <span>Añadir img</span>
      }
    </div>
  )
}