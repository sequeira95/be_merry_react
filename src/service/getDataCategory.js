import { beMerryUrl, typeGet } from "../constants"
export async function getDataCategory(){
  try {
    const res = await fetch(`${beMerryUrl}${typeGet.category}`,{query:{active:true}})
    const categories = await res.json()
    return categories
  }catch (e) {
    throw new Error('Error en la busqueda de categorias')
  }
}