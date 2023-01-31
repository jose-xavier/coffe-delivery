import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/defautLayout'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Delivery } from './pages/Delivery'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/delivery" element={<Delivery />} />
      </Route>
    </Routes>
  )
}
