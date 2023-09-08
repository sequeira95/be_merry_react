import { useEffect, useState } from 'react'
import { useAnuncios } from '../../hooks/useAnuncios'
import { useCategory } from '../../hooks/useCategory'
import './CarouselCategory.css'
import { Link } from 'react-router-dom'
export function CarouselCategory(){
  const { category } = useCategory()
  const { anuncios } = useAnuncios()
  const [ listCarousels, setListCarousels ] = useState([])
  useEffect(() =>{
    const newList = [...category]
    if(anuncios[0]){
      for (const anuncio of anuncios) {
        newList.unshift({
          _id:anuncio._id,
          name:anuncio.name,
          imagen:anuncio.imagen,
          anuncio:true
        })
      }
    }
    setListCarousels(newList)
  },[anuncios, category])
  return(
    <div className='carousel_category'>
      {
        listCarousels[0]&& listCarousels.map(item =>(
        item.imagen && item.imagen.url &&
        <Link to={item.anuncio ? `/anuncios/${item.name}/${item._id}` : `/productos/${item.name}`} key={item._id}>
          <div className='carousel_category_img' style={{backgroundImage:`url(${item.imagen.url})`}}></div>
          <span className='icarousel_category_text'>{item.name}</span>
        </Link>
      ))
      
      }
    </div>
  )
}