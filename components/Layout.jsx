import React from 'react'
import Header from './Header'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
        <Header />
        <ScrollRestoration />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout