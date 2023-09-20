import { useReducer } from "react"
import { bagInitialState, bagReducer } from "../reducers/bagReducer"
import { BAG_ACTION_TYPES } from "../constants"

export function BagReducer () {
  const [state, dispatch] = useReducer(bagReducer, bagInitialState)
  console.log({state})

  const addToBag = product => dispatch({
    type: BAG_ACTION_TYPES.ADD_TO_BAG,
    payload: {
      productId:product._id || product.productId,
      name:product.name,
      description:product.description,
      price:product.price,
      category:product.category,
      type:product.type,
      quanty:product.quanty,
      quantity:product.quantity,
      imgPrincipal:product.imgPrincipal,
      otherImg:product.otherImg
    }
  })

  const removeOneToBag = product => dispatch({
    type: BAG_ACTION_TYPES.REMOVE_ONE_TO_BAG,
    payload: {
      productId:product._id || product.productId,
      name:product.name,
      description:product.description,
      price:product.price,
      category:product.category,
      type:product.type,
      quanty:product.quanty,
      quantity:product.quantity,
      imgPrincipal:product.imgPrincipal,
      otherImg:product.otherImg
    }
  })

  const removeFromBag = product => {
    return dispatch({
    type: BAG_ACTION_TYPES.REMOVE_FROM_BAG,
    payload: {
      productId:product._id || product.productId,
      name:product.name,
      description:product.description,
      price:product.price,
      category:product.category,
      type:product.type,
      quanty:product.quanty,
      quantity:product.quantity,
      imgPrincipal:product.imgPrincipal,
      otherImg:product.otherImg
    }
  })}

  const clearBag = () => dispatch({ type: BAG_ACTION_TYPES.CLEAR_BAG })

  return { state, addToBag, removeOneToBag, removeFromBag, clearBag }
}