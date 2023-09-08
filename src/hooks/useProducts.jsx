import { useState, useEffect } from 'react'
import { getDataProducts, getDataProduct } from '../service/getDataProducts'
export function useProduts({query}){
  const [products, setProducts] = useState([])
  const getProducts = () =>{
    const newQuery = {}
    if(query === 'ropita' || query === 'accesorios'){
      newQuery['typeProduct'] = query === 'ropita' ? 'ropa' : query
    }else{
      newQuery['category'] = query
    }
    getDataProducts({query:newQuery}).then(productos => setProducts(productos))
  }
  useEffect(getProducts,[query])
  return {products, getProducts}
}
export function useProduct({productId}){
  const [product, setProduct] = useState([])
  const getProduct = () =>{
    getDataProduct({productId}).then(producto => setProduct(producto))
  }
  useEffect(getProduct,[productId])
  return {product, getProduct}
}