import { useState, useEffect } from "react"
import { useAnuncios } from "./useAnuncios"
import { useCategory } from "./useCategory"

export function useImages(){
  const [ imagesAnuncios, setImageAnuncios ] = useState([])
  const [ imagesCategory, setImageCategory ] = useState([])
  const { anuncios } = useAnuncios()
  const { category } = useCategory()
  const getImageAnuncios = () =>{
    if(anuncios[0]){
      const listImages = anuncios.map(anuncio => anuncio && anuncio.imagen && anuncio.imagen.url)
      setImageAnuncios(listImages)
    }
  }
  useEffect(getImageAnuncios,[anuncios])
  const getImageCategory = () =>{
    if(category[0]){
      const listImages = category.map(cat => cat && cat.imagen && cat.imagen.url)
      setImageCategory(listImages)
    }
  }
  useEffect(getImageCategory,[category])
  return {imagesAnuncios, imagesCategory}
}