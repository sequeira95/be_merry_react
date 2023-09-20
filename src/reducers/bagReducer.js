import { BAG_ACTION_TYPES } from "../constants";

export const bagInitialState = []

export function bagReducer (state, action) {
  const {type:actionType, payload:actionPayload} = action
  if(actionType === BAG_ACTION_TYPES.ADD_TO_BAG){
    const { productId } = actionPayload
    const productInBagtIndex = state.findIndex(item => item.productId === productId)

    if (productInBagtIndex >= 0) {
      const newState = [
        ...state.slice(0, productInBagtIndex),
        { ...state[productInBagtIndex], quantity: state[productInBagtIndex].quantity + 1 },
        ...state.slice(productInBagtIndex + 1)
      ]
      return newState
    }
    const newState = [
      ...state,
      {
        ...action.payload,
        quantity: 1
      }
    ]
    return newState
  }

  if(actionType === BAG_ACTION_TYPES.REMOVE_ONE_TO_BAG){
    const { productId } = actionPayload
    const productInBagtIndex = state.findIndex(item => item.productId === productId)
    if (productInBagtIndex >= 0) {
      const newState = [
        ...state.slice(0, productInBagtIndex),
        { ...state[productInBagtIndex], quantity: state[productInBagtIndex].quantity - 1 },
        ...state.slice(productInBagtIndex + 1)
      ]
      return newState
    }
  }
  if(actionType === BAG_ACTION_TYPES.REMOVE_FROM_BAG){
    const { productId } = actionPayload
    const newState = state.filter(item => item.productId !== productId)
    return newState
  }
  if(actionType === BAG_ACTION_TYPES.CLEAR_BAG){
    return []
  }
}