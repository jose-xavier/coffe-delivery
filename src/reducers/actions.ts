import { Coffee } from '../data/coffes'

export function addItemToCart(item: Coffee) {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: {
      item,
    },
  }
}

export function incrementItemAmount(id: number, option: 'cart' | 'list') {
  return {
    type: 'INCREMENT_ITEM',
    payload: {
      option,
      id,
    },
  }
}

export function decrementItemAmount(id: number, option: 'cart' | 'list') {
  return {
    type: 'DECREMENT_ITEM',
    payload: {
      option,
      id,
    },
  }
}

export function removeITemFromCart(id: number) {
  return {
    type: 'REMOVE_ITEM_FROM_CART',
    payload: {
      id,
    },
  }
}

export function resetItemQuantity(id: number) {
  return {
    type: 'RESET_ITEM_QUANTITY',
    payload: {
      id,
    },
  }
}

export function resetItemQuantityCart() {
  return {
    type: 'RESET_ITEM_QUANTITY_CART',
  }
}
