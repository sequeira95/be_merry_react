import { Link } from "react-router-dom";
import './ProductCard.css'
import { useEffect, useState } from "react";
import { BagHandle } from "../Icons";
import { useBag } from "../../hooks/useBag";

export function ProductCard ({product = {}}) {
  const { addToBag } = useBag()
  const [truncatedText, setTruncatedText] = useState("");

  const truncateText = (text, maxCharacters) => {
    if (text.length > maxCharacters) {
      return text.substring(0, maxCharacters) + "...";
    } else {
      return text;
    }
  };

  useEffect(() => {
    setTruncatedText(truncateText(product.description, 13));
  }, [product.description]);

  return (
    <article>
      <div className="product_img">
        <Link to={`/producto/${product._id}`}> <img src={product?.imgPrincipal?.url} alt={product.description}/> </Link>
      </div>
      <div className="product_price">
        <p className="name" title={product.description}>{truncatedText}</p>
        <div className="product_price_container_price">
          <p>{product.price}$</p>
        </div>
        <div>
          aqui habran otras cosas
          <button onClick={() => addToBag(product)} ><BagHandle/></button>
        </div>
      </div>
    </article>
  )
}