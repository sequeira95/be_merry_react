import { useParams } from "react-router-dom"
import { useProduts } from "../hooks/useProducts"
import { CarouselCategory } from "../components/carouselCategory/CarouselCategory"
import { ProductCard } from "../components/productCard/ProductCard"
import { Separator } from "../components/separator/Separator"
import './Product-type.css'

export function ProductTypes(){
  const { type } = useParams()
  const { products } = useProduts({query:type})
  return (
    <>
      <CarouselCategory/>
      <Separator/>
      <section className="product_card">
        {
          products[0] && products.map(product =>(
            <ProductCard key={product._id} product={product}/>
          ))
        }
      </section>
    </>
  )
}