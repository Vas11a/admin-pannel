import React from 'react'
import DashboardPage from './pages/DashboardPage'
import { Route, Routes } from 'react-router-dom'

export default function Routing() {
  return (
    <Routes>
      <Route path='/' element={<DashboardPage/>}/>
    </Routes>
  )
}
