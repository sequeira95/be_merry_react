import { createContext } from 'react'
import { BagReducer } from '../hooks/useBagReducer'
export const BagContext = createContext()

export function BagProvider ({children}) {
  const { state, addToBag, removeFromBag, clearBag, removeOneToBag } = BagReducer()

  return (
    <BagContext.Provider value={{
      bag: state,
      addToBag,
      removeFromBag,
      clearBag,
      removeOneToBag
    }}
    >
      {children}
    </BagContext.Provider>
  )

}