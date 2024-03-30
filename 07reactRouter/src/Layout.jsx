import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

//Dynamic rendering of component Header and Footer same for all pages and only outlet change

import {Outlet } from 'react-router-dom' 
function Layout() {
  return (
    <>

     <Header />
     <Outlet />
     <Footer />

    </>
  )
}

export default Layout