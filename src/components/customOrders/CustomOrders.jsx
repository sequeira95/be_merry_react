import { CustomCard } from "./CustomCard";
import './CustomOrders.css'
export function CustomOrders(){
  return (
    <section className="custom_orders">
      <h4>ÚLTIMOS PEDIDOS PERSONALIZADOS</h4>
      <div className="custom_orders_card">
        {
          [1,2,3].map(n => <CustomCard key={n} />)
        }
      </div>
    </section>
  )
}