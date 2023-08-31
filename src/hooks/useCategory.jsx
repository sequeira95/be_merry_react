import { useState, useEffect } from 'react'
import { getDataCategory } from '../service/getDataCategory'
export function useCategory(){
  const [category, setCategory] = useState([])
  const getCategory = () =>{
    getDataCategory().then(listCategory => setCategory(listCategory))
  }
  useEffect(getCategory,[])
  return {category}
}