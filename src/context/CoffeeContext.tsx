/* eslint-disable no-fallthrough */
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { Coffee, coffeesList } from '../data/coffes'

interface CoffeeContextProviderProps {
  children: ReactNode
}

interface CoffeeContextTypes {
  coffees: Coffee[]
  coffeesCart: Coffee[]
  addItemToCart: (item: Coffee) => void
  incrementItemAmount: (id: number) => void
  decrementItemAmount: (id: number) => void
}

interface CoffeesState {
  coffees: Coffee[]
  coffeesCart: Coffee[]
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

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesState)

    localStorage.setItem('@coffee-delivery:coffee-state-1.0.0', stateJSON)
  }, [coffeesState])

  function coffesReducer(state: CoffeesState, action: any) {
    switch (action.type) {
      case 'ADD_ITEM_TO_CART': {
        const isAlreadyCoffeeInCart = state.coffeesCart.findIndex(
          (coffee) => coffee.id === action.payload.item.id,
        )

        if (isAlreadyCoffeeInCart < 0) {
          state.coffeesCart = [...state.coffeesCart, action.payload.item]
        } else {
          state.coffeesCart = state.coffeesCart.map((coffee, index) => {
            if (index === isAlreadyCoffeeInCart) {
              return { ...coffee, amount: action.payload.item.amount }
            }
            return coffee
          })
        }
      }

      case 'INCREMENT_ITEM': {
        const newCoffees = [...state.coffees]
        const findItemToIncrement = newCoffees.findIndex(
          (coffee) => coffee.id === action.payload.id,
        )

        if (findItemToIncrement >= 0) {
          const updateCoffee = { ...state.coffees[findItemToIncrement] }

          updateCoffee.amount += 1

          newCoffees[findItemToIncrement] = updateCoffee
        }
        return { ...state, coffees: newCoffees }
      }

      case 'DECREMENT_ITEM_AMOUNT': {
        const newCoffees = [...state.coffees]
        const foundItemToDecrement = newCoffees.findIndex(
          (coffee) => coffee.id === action.payload.id,
        )

        if (foundItemToDecrement >= 0) {
          const updateCoffee = { ...state.coffees[foundItemToDecrement] }

          newCoffees[foundItemToDecrement].amount =
            updateCoffee.amount > 0 ? updateCoffee.amount - 1 : 0

          newCoffees[foundItemToDecrement] = updateCoffee
        }

        return { ...state, coffees: newCoffees }
      }

      default:
        return state
    }
  }

  function addItemToCart(item: Coffee) {
    dispatch({
      type: 'ADD_ITEM_TO_CART',
      payload: {
        item,
      },
    })
  }

  function incrementItemAmount(id: number) {
    dispatch({
      type: 'INCREMENT_ITEM',
      payload: {
        id,
      },
    })
  }

  function decrementItemAmount(id: number) {
    dispatch({
      type: 'DECREMENT_ITEM_AMOUNT',
      payload: {
        id,
      },
    })
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        coffeesCart,
        addItemToCart,
        incrementItemAmount,
        decrementItemAmount,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
