import { useParams } from 'react-router-dom';
import { CarouselCategory } from "../components/carouselCategory/CarouselCategory";
import { Separator } from "../components/separator/Separator";
import { CarouselProduct } from "../components/carouselProduct/CarouselProduct";
import { useProduct } from "../hooks/useProducts";

export function Product () {
  const { productId } = useParams()
  const { product } = useProduct({productId})
  return (
    <>
      <CarouselCategory/>
      <Separator/>
      <section>
        <CarouselProduct product={product}/>
      </section>
      <Separator/>
    </>
  )

}