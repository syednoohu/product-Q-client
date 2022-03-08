import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'



function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/Login' exact element={<Login/>}/>
      </Routes>
  </BrowserRouter>
  )
}

export default MyRoutes
