import React from 'react'
import Header from './Header'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
    <div>
        <Header />
        <ScrollRestoration />
        <Toaster />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout