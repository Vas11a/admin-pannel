import React from 'react'
import DashboardPage from './pages/DashboardPage'
import NewOrderPage from './pages/NewOrderPage'
import PartsPage from './pages/PartsPage'
import Order from './pages/Order'
import { Route, Routes } from 'react-router-dom'

export default function Routing() {
  return (
    <Routes>
      <Route path='/' element={<DashboardPage/>}/>
      <Route path='/new-order' element={<NewOrderPage/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/parts' element={<PartsPage/>}/>
    </Routes>
  )
}
