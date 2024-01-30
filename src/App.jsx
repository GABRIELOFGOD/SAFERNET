import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import StackHolder from '../pages/StackHolder'
import Campaign from '../pages/Campaign'
import Publications from '../pages/Publications'
import Blog from '../pages/Blog'
import Videos from '../pages/Videos'
import News from '../pages/News'
import Events from '../pages/Events'
import GetInvolved from '../pages/GetInvolved'
import Contact from '../pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'stackholders',
        element: <StackHolder />
      },
      {
        path: 'campaign',
        element: <Campaign />
      },
      {
        path: 'publications',
        element: <Publications />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'videos',
        element: <Videos />
      },
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'events',
        element: <Events />
      },
      {
        path: 'get-involved',
        element: <GetInvolved />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App