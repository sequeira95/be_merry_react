import { beMerryUrl, typeGet } from "../constants"
import listOfProducts from '../mooks/listOfProducts.json'
export async function getDataProducts({query}){
  //const newQuery = new URLSearchParams(query)
  try {
    const res = listOfProducts.products.filter(e => e.category === query.category)//await fetch(`${beMerryUrl}${typeGet.productos}?${newQuery}`)
    const products = res//await res.json()
    return products
  }catch (e) {
    throw new Error('Error en la busqueda de productos' + e.message)
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