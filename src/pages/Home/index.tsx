import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'
import { Banner } from './components/Banner'
import { CoffeCard } from './components/CoffeCard'
import { HomeContainer, HomeContent } from './styles'

export function Home() {
  const { coffees } = useContext(CoffeeContext)
  return (
    <HomeContainer>
      <Banner />
      <h2>Nossos cafés</h2>
      <HomeContent>
        {coffees.map((coffee) => {
          return <CoffeCard coffee={coffee} key={coffee.id} />
        })}
      </HomeContent>
    </HomeContainer>
  )
}
