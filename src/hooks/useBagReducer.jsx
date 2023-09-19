import { useReducer } from "react"
import { bagInitialState, bagReducer } from "../reducers/bagReducer"
import { BAG_ACTION_TYPES } from "../constants"

export function BagReducer () {
  const [state, dispatch] = useReducer(bagReducer, bagInitialState)

  const addToBag = product => dispatch({
    type: BAG_ACTION_TYPES.ADD_TO_BAG,
    payload: product
  })

  const removeOneToBag = product => dispatch({
    type: BAG_ACTION_TYPES.REMOVE_ONE_TO_BAG,
    payload: product
  })

  const removeFromBag = product => dispatch({
    type: BAG_ACTION_TYPES.REMOVE_FROM_BAG,
    payload: product
  })

  const clearBag = () => dispatch({ type: BAG_ACTION_TYPES.CLEAR_BAG })

  return { state, addToBag, removeOneToBag, removeFromBag, clearBag }
}