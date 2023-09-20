import { IconHeart } from '../Icons'
import './PaymentCard.css'
export function PaymentCard ({price = 0}) {
  console.log({price})
  return (
    <article className="payment_card">
      <h3 className='payment_card_title'>TOTAL A PAGAR</h3>
      <p className='payment_card_price'>{price}$</p>
      <div className='payment_card_separator'>
        <IconHeart/>
      </div>
    </article>
  )
}