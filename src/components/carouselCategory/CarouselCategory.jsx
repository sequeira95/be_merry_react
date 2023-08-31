import { useEffect, useState } from 'react'
import { useAnuncios } from '../../hooks/useAnuncios'
import { useCategory } from '../../hooks/useCategory'
import './CarouselCategory.css'
export function CarouselCategory(){
  const { category } = useCategory()
  const { anuncios } = useAnuncios()
  const [ listCarousels, setListCarousels ] = useState([])
  console.log({category, anuncios})
  useEffect(() =>{
    const newList = [...category]
    newList.unshift(anuncios)
    setListCarousels(newList)
  },[anuncios, category])
  console.log({listCarousels})
  return(
    <div className='carousel_category'>
      {
        listCarousels[0]&& listCarousels.map(item =>(
        item.imagen && item.imagen.url && 
        <div key={item._id}>
          <div className='carousel_category_img' style={{backgroundImage:`url(${item.imagen.url})`}}></div>
          <span className='icarousel_category_text'>{item.name}</span>
        </div>
      ))
      
      }
    </div>
  )
}