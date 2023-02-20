import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { Coffee, coffeesList } from '../data/coffes'
import {
  addItemToCart,
  decrementItemAmount,
  incrementItemAmount,
  removeITemFromCart,
  resetItemQuantity,
} from '../reducers/actions'
import { coffesReducer } from '../reducers/reducer'

interface CoffeeContextProviderProps {
  children: ReactNode
}

interface CoffeeContextTypes {
  coffees: Coffee[]
  coffeesCart: Coffee[]
  cartQuantity: number
  addCoffeeToCart: (coffee: Coffee) => void
  incrementCoffeeAmount: (id: number, type: 'list' | 'cart') => void
  decrementCoffeeAmount: (id: number, type: 'list' | 'cart') => void
  removeCoffeeFromCart: (id: number) => void
  resetCoffeeQuantity: (id: number) => void
}

export const CoffeeContext = createContext({} as CoffeeContextTypes)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    coffesReducer,
    {
      coffees: coffeesList,
      coffeesCart: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:coffee-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
    },
  )
  const { coffeesCart, coffees } = coffeesState

  const cartQuantity = coffeesCart.reduce(
    (acc, coffee) => acc + coffee.amount,
    0,
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesState)

    localStorage.setItem('@coffee-delivery:coffee-state-1.0.0', stateJSON)
  }, [coffeesState])

  function addCoffeeToCart(coffee: Coffee) {
    dispatch(addItemToCart(coffee))
  }

  function resetCoffeeQuantity(id: number) {
    dispatch(resetItemQuantity(id))
  }

  function incrementCoffeeAmount(id: number, option: 'cart' | 'list') {
    dispatch(incrementItemAmount(id, option))
  }

  function decrementCoffeeAmount(id: number, option: 'cart' | 'list') {
    dispatch(decrementItemAmount(id, option))
  }

  function removeCoffeeFromCart(id: number) {
    dispatch(removeITemFromCart(id))
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        coffeesCart,
        addCoffeeToCart,
        incrementCoffeeAmount,
        decrementCoffeeAmount,
        removeCoffeeFromCart,
        cartQuantity,
        resetCoffeeQuantity,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
