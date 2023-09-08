import { beMerryUrl, typeGet } from "../constants"
export async function getDataEmpresa(){
  try {
    const res = await fetch(`${beMerryUrl}${typeGet.empresa}`)
    const empresa = await res.json()
    return empresa
  }catch (e) {
    throw new Error('Error en la busqueda de los datos de la empresa')
  }
}