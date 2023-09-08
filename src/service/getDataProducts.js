import { beMerryUrl, typeGet } from "../constants"
export async function getDataProducts({query}){
  const newQuery = new URLSearchParams(query)
  try {
    const res = await fetch(`${beMerryUrl}${typeGet.productos}?${newQuery}`)
    const products = await res.json()
    return products
  }catch (e) {
    throw new Error('Error en la busqueda de productos')
  }
}
export async function getDataProduct ({productId}){
  try {
    const res = await fetch(`${beMerryUrl}${typeGet.productos}/${productId}`)
    const product = await res.json()
    return product
  }catch (e) {
    throw new Error('Error en la busqueda de productos')
  }
}