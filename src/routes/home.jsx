
import { Carousel } from "../components/carousel/Carousel";
import { CarouselCategory } from "../components/carouselCategory/CarouselCategory";
import { useImages } from "../hooks/useImages";
import './home.css'

export function Home () {
  const { imagesAnuncios } = useImages()
    return (
      <main>
        <section>
          <Carousel images={imagesAnuncios} />
          <CarouselCategory/>
        </section>
      </main>
    )
}