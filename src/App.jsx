import React, { Suspense, lazy } from 'react'
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
import Loader from '../components/Loader'
const LazyHome = lazy(() => import('../pages/Home'))
const LazyAbout = lazy(() => import('../pages/About'))
const LazyStake = lazy(() => import('../pages/StackHolder'))
const LazyCampaign = lazy(() => import('../pages/Campaign'))
const LazyBlog = lazy(() => import('../pages/Blog'))
const LazyNews = lazy(() => import('../pages/News'))
const LazyPublication = lazy(() => import('../pages/Publications'))
const LazyContact = lazy(() => import('../pages/Contact'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Suspense fallback={<Loader />}><LazyHome /></Suspense>
      },
      {
        path: 'about',
        element: <Suspense fallback={<Loader />}><LazyAbout /></Suspense>
      },
      {
        path: 'stackholders',
        element: <Suspense fallback={<Loader />}><LazyStake /></Suspense>
      },
      {
        path: 'campaign',
        element: <Suspense fallback={<Loader />}><LazyCampaign /></Suspense>
      },
      {
        path: 'publications',
        element: <Suspense fallback={<Loader />}><LazyPublication /></Suspense>
      },
      {
        path: 'blog',
        element: <Suspense fallback={<Loader />}><LazyBlog /></Suspense>
      },
      {
        path: 'videos',
        element: <Videos />
      },
      {
        path: 'news',
        element: <Suspense fallback={<Loader />}><LazyNews /></Suspense>
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
        element: <Suspense fallback={<Loader />}><LazyContact /></Suspense>
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