import React from 'react'
import MyRoutes from '../routers/MyRoutes'
import Header from './Header'
import Footer from './Footer'

import './main.css'
function Layout() {
  return (
  <>
    <Header/>
    <div className="main">
      <MyRoutes/>
     </div>
     <Footer/>
    </>
  )
}

export default Layout
