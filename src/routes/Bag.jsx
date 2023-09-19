import { BagProductCard } from "../components/bagProductCard/BagProductCard";
import { BagHandle, IconCheckboxBlankOutline } from "../components/Icons";
import { Separator } from "../components/separator/Separator";
import { useBag } from "../hooks/useBag";
import './Bag.css'

export function Bag () {
  const { bag, addToBag, removeOneToBag, removeFromBag } = useBag()
    return (
      <main className="bag_container">
        <div className="bag_bag_handle_container">
          <BagHandle/>
          <span>Bolsa</span>
        </div>
        <Separator/>
        <section className="bag_products_container">
          {
            bag.map(e => (
              <div key={e._id}>
                <button>
                <IconCheckboxBlankOutline/>
                </button>
                <BagProductCard 
                bag={e}
                addToBag={ () => addToBag(e)}
                removeOneToBag={ () => removeOneToBag(e)}
                removeFromBag={ () => removeFromBag(e)}/>
              </div>
            ))
          }
        </section>
      
      </main>
    )
}