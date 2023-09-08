import { Link } from "react-router-dom";
import './ProductCard.css'
export function ProductCard ({product = {}}) {
  return (
    <article>
      <div className="product_img">
        <Link to={`/producto/${product._id}`}> <img src={product?.imgPrincipal?.url} alt={product.description}/> </Link>
      </div>
      <div className="product_price">
        <p className="pb-2 name">{product.description}</p>
        <div className="product_price_container_price">
          <p>{product.price}$</p>
        </div>
        <div>aqui habran otras cosas</div>
      </div>
    </article>
  )
}