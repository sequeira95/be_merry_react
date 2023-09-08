import { beMerryUrl, typeGet } from "../constants"
export async function getDataAnuncios(){
  try {
    const res = await fetch(`${beMerryUrl}${typeGet.anuncios}`,{query:{active:true}})
    const anuncios = await res.json()
    return anuncios
  }catch (e) {
    throw new Error('Error en la busqueda de anuncios')
  }
}