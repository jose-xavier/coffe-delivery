import { createContext, ReactNode, useReducer, useState } from 'react'
import { Coffee, coffeesList } from '../data/coffes'

interface CoffeeContextProviderProps {
  children: ReactNode
}

interface CoffeeContextTypes {
  coffees: Coffee[]
}

export const CoffeeContext = createContext({} as CoffeeContextTypes)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>(coffeesList)
  return (
    <CoffeeContext.Provider
      value={{
        coffees,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
