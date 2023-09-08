import './CustomCard.css'
export function CustomCard(){
  return (
    <article>
        <div className="custom_order_img">
          <img src="https://ik.imagekit.io/z87g9nhhp/imgPrincipal/m_CD4SzgTy_k5dwprjPS.png?updatedAt=1687898312448" alt="imagen custom order"/>
        </div>
        <div className="custom_order_price">
          <p className="pb-2">PRENDA</p>
          <p>$</p>
      </div>
    </article>
  )
}