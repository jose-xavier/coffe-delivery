/* eslint-disable no-fallthrough */
import { Coffee, coffeesList } from '../data/coffes'

interface CoffeesState {
  coffees: Coffee[]
  coffeesCart: Coffee[]
}

export function coffesReducer(state: CoffeesState, action: any) {
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
      if (action.payload.option === 'list') {
        const newCoffees = [...state.coffees]
        const founddItemToIncrement = newCoffees.findIndex(
          (coffee) => coffee.id === action.payload.id,
        )

        if (founddItemToIncrement >= 0) {
          const updateCoffeeList = { ...state.coffees[founddItemToIncrement] }

          updateCoffeeList.amount += 1

          newCoffees[founddItemToIncrement] = updateCoffeeList
        }
        return { ...state, coffees: newCoffees }
      } else {
        const newCoffees = [...state.coffeesCart]
        const foundItemToIncrementCart = newCoffees.findIndex(
          (coffee) => coffee.id === action.payload.id,
        )

        if (foundItemToIncrementCart >= 0) {
          const updateCoffeeCart = {
            ...state.coffeesCart[foundItemToIncrementCart],
          }
          updateCoffeeCart.amount += 1

          newCoffees[foundItemToIncrementCart] = updateCoffeeCart

          return { ...state, coffeesCart: newCoffees }
        }
      }
    }

    case 'DECREMENT_ITEM': {
      if (action.payload.option === 'list') {
        const newCoffees = [...state.coffees]
        const foundItemToDecrement = newCoffees.findIndex(
          (coffee) => coffee.id === action.payload.id,
        )

        if (foundItemToDecrement >= 0) {
          const updateCoffeeList = { ...state.coffees[foundItemToDecrement] }

          newCoffees[foundItemToDecrement].amount =
            updateCoffeeList.amount > 0 ? updateCoffeeList.amount - 1 : 0

          newCoffees[foundItemToDecrement] = updateCoffeeList
        }
        return { ...state, coffees: newCoffees }
      } else {
        const newCoffees = [...state.coffeesCart]

        const foundItemToDecrementCart = newCoffees.findIndex(
          (coffee) => coffee.id === action.payload.id,
        )

        if (foundItemToDecrementCart >= 0) {
          const updateCoffeeCart = {
            ...state.coffeesCart[foundItemToDecrementCart],
          }

          newCoffees[foundItemToDecrementCart].amount =
            updateCoffeeCart.amount > 0 ? updateCoffeeCart.amount - 1 : 0

          newCoffees[foundItemToDecrementCart] = updateCoffeeCart

          return { ...state, coffeesCart: newCoffees }
        }
      }
    }

    case 'REMOVE_ITEM_FROM_CART': {
      let newCoffees = [...state.coffeesCart]

      const fountItemToRemove = newCoffees.findIndex(
        (coffee) => coffee.id === action.payload.id,
      )

      if (fountItemToRemove >= 0) {
        const coffeesCartWithoutOne = newCoffees.filter(
          (coffee) => coffee.id !== action.payload.id,
        )
        newCoffees = coffeesCartWithoutOne
      }

      return { ...state, coffeesCart: newCoffees }
    }

    case 'RESET_ITEM_QUANTITY': {
      const newCoffees = [...state.coffees]

      const foundItemtoResetAmount = newCoffees.findIndex(
        (coffee) => coffee.id === action.payload.id,
      )

      if (foundItemtoResetAmount >= 0) {
        const updateCoffee = { ...state.coffees[foundItemtoResetAmount] }
        updateCoffee.amount = 0

        newCoffees[foundItemtoResetAmount] = updateCoffee
      }

      return { ...state, coffees: newCoffees }
    }

    case 'RESET_ITEM_QUANTITY_CART':
      return { ...state, coffeesCart: [] }

    default:
      return state
  }
}
