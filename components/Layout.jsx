import React from 'react'
import Header from './Header'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast'
import Notification from './MessagePop'

const Layout = () => {
  return (
    <div>
        <Header />
        <Notification />
        <ScrollRestoration />
        <Toaster />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout