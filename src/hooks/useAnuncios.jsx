import { useState, useEffect } from "react"
import { getDataAnuncios } from "../service/getDataAnuncios"

export function useAnuncios (){
  const [ anuncios, setAnuncios ] = useState([])
  const getAnuncios = () =>{
    getDataAnuncios().then(listCategory => setAnuncios(listCategory))
  }
  useEffect(getAnuncios,[])
  return {anuncios}
}