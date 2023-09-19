import { DeleteIcon, LeftArrow, RightArrow } from '../Icons'
import './BagProductCard.css'
export function BagProductCard({bag = {}, addToBag, removeOneToBag, removeFromBag}){
  return(
    <article className="bag_product_card">
      <picture>
        <img src={bag?.imgPrincipal?.url} alt={bag?.description}/>
      </picture>
      <div className='bag_product_card_info'>
        <div className='title_size_container'>
          <h5>{bag?.description}</h5>
          <div className='size_container'>
            <span>{bag?.size || "L"}</span>
          </div>
        </div>
        <div className='info_price'>
          <div className='price_container'>
            <span>{bag?.price}$</span>
          </div>
          <div className='quantity_container'>
            {
              bag?.quantity > 1 &&
              <button onClick={removeOneToBag}>
                <LeftArrow/>
              </button>
            }
            <div className='quantity'>
              <span>{bag?.quantity}</span>
            </div>
              
              <button style={{visibility: bag?.quantity >= bag.quanty && 'hidden'}}onClick={addToBag}>
                <RightArrow/>
              </button>
            <button className='delete_button' onClick={removeFromBag}>
              <DeleteIcon/>
            </button>
          
          </div>
        </div>
      </div>
    </article>
  )
}