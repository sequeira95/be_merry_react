import { useState, useEffect } from 'react';
import { BagProductCard } from "../components/bagProductCard/BagProductCard";
import { BagHandle, IconCheckboxBlankOutline, IconCheckboxCheck } from "../components/Icons";
import { PaymentCard } from "../components/paymentCard/PaymentCard";
import { Separator } from "../components/separator/Separator";
import { useBag } from "../hooks/useBag";
import './Bag.css'

export function Bag () {
  const { bag, addToBag, removeOneToBag, removeFromBag } = useBag()
  const [productsSelected, setProductsSelected] = useState([])
  const addPoductSelected = (product) => {
    return setProductsSelected([...productsSelected, product])
  }
  const deleteProductSelect = (product) => {
    return setProductsSelected(productsSelected.filter(e => e.productId !== product.productId))
  }
  const [ price, setPrice ] = useState(0)
  useEffect(() =>{
    setProductsSelected(bag)
  },[])
  useEffect(() =>{
    let newPrice = 0
    if(productsSelected.length === 0) setPrice(newPrice)
    for( let b of productsSelected){
      const productInBag = chekProductInBag(b.productId)
      if(productInBag){
        const quantity = bag.find(e => e.productId === b.productId)?.quantity
        newPrice += (parseFloat(b.price) * quantity)
      }
      setPrice(newPrice) 
    }
  },[productsSelected, bag])
  const chekProductInBag = (productId) => {
    return productsSelected.some(e => e.productId === productId)
  }
  const deleteProductFromBag = (product) => {
    const newProductsSelected = productsSelected.filter(e => e.productId !== product.productId)
    setProductsSelected(newProductsSelected)
    removeFromBag(product)
  }

    return (
      <main>
        <div className="bag_bag_handle_container">
          <BagHandle/>
          <span>Bolsa</span>
        </div>
        <Separator/>
        <div className="bag_container">
        <section className="bag_products_container">
          {
            bag.map(e => {
              const productInBag = chekProductInBag(e.productId)
              return (
              <div key={e.productId}>
                <button onClick={() =>{
                  productInBag ? deleteProductSelect(e) : addPoductSelected(e)
                }}>
                  {productInBag ? <IconCheckboxCheck/> : <IconCheckboxBlankOutline/>}
                </button>
                <BagProductCard 
                bag={e}
                addToBag={ () => addToBag(e)}
                removeOneToBag={ () => removeOneToBag(e)}
                removeFromBag={ () => deleteProductFromBag(e)}/>
              </div>
            )})
          }
        </section>
        {}
        <PaymentCard price={price}/>
        </div>
      
      </main>
    )
}