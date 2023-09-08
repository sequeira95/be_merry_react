
import { AboutMe } from "../components/aboutMe/AboutMe";
import { Carousel } from "../components/carousel/Carousel";
import { CarouselCategory } from "../components/carouselCategory/CarouselCategory";
import { CustomOrders } from "../components/customOrders/CustomOrders";
import { useEmpresa } from "../hooks/useEmpresa";
import { useImages } from "../hooks/useImages";
import './Home.css'

export function Home () {
  const { imagesAnuncios } = useImages()
  const { empresa } = useEmpresa()
    return (
      <main>
        <section>
          <Carousel images={imagesAnuncios} />
          <CarouselCategory/>
        </section>
        <AboutMe empresa={empresa}/>
        <CustomOrders/>
      </main>
    )
}