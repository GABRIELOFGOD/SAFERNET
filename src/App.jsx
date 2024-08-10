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
import { CreateUserContext } from '../utils/Context'
import NotFound from '../pages/NotFound'
import { HelmetProvider } from 'react-helmet-async'
const LazyHome = lazy(() => import('../pages/Home'))
const LazyAbout = lazy(() => import('../pages/About'))
const LazyStake = lazy(() => import('../pages/StackHolder'))
const LazyCampaign = lazy(() => import('../pages/Campaign'))
const LazyBlog = lazy(() => import('../pages/Blog'))
const LazyNews = lazy(() => import('../pages/News'))
const LazyPublication = lazy(() => import('../pages/Publications'))
const LazyContact = lazy(() => import('../pages/Contact'))
const LazyLogin = lazy(() => import('../pages/Login'))
const LazyDashboard = lazy(() => import('../pages/Dashboard'))
const LazyAdminBlog = lazy(() => import('../pages/AdminBlog'))
const LazyAdminCampaign = lazy(() => import('../pages/AdminCampaign'))
const LazyAdminEvent = lazy(() => import('../pages/AdminEvent'))
const LazyDetails = lazy(() => import('../pages/Details'))
const AdminDetails = lazy(() => import('../pages/AdminDetaills'));
const LazyVideo = lazy(() => import('../pages/Videos'));
const LazyPhoto = lazy(() => import('../pages/Photo'));
const LazyMedia = lazy(() => import('../pages/Media'));
const LazyCampaignDetails = lazy(() => import('../pages/CampaignDetails'));
const LazyEducation = lazy(() => import('../pages/Education'));

const LazyAdminReport = lazy(() => import('../pages/AdminReport'));
const LazyAdminFellow = lazy(() => import('../pages/AdminFellow'));
const LazyAdminMedia = lazy(() => import('../pages/AdminMedia'));

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
        path: 'media',
        element: <Suspense fallback={<Loader />}><LazyMedia /></Suspense>,
        children: [
          {
            path: 'photo',
            element: <Suspense fallback={<Loader />}><LazyPhoto /></Suspense>
          },
          {
            path: 'video',
            element: <Suspense fallback={<Loader />}><LazyVideo /></Suspense>
          }
        ]
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
        path: 'make-report',
        element: <GetInvolved />
      },
      {
        path: 'contact',
        element: <Suspense fallback={<Loader />}><LazyContact /></Suspense>
      },
      {
        path: 'details/:id',
        element: <Suspense fallback={<Loader />}><LazyDetails /></Suspense>
      },
      {
        path: 'campaign/:id',
        element: <Suspense fallback={<Loader />}><LazyCampaignDetails /></Suspense>
      }
    ]
  },
  {
    path: '/admin/login',
    element: <Suspense fallback={<Loader />}><LazyLogin /></Suspense>,
    // children={}
  },
  {
    path: 'dashboard',
    element: <Suspense fallback={<Loader />}><LazyDashboard /></Suspense>,
    children: [
      {
        path: 'blog',
        element: <Suspense fallback={<Loader />}><LazyAdminBlog /></Suspense>
      },
      {
        path: 'event',
        element: <Suspense fallback={<Loader />}><LazyAdminEvent /></Suspense>
      },
      {
        path: 'campaign',
        element: <Suspense fallback={<Loader />}><LazyAdminCampaign /></Suspense>
      },
      {
        path: 'report',
        element: <Suspense fallback={<Loader />}><LazyAdminReport /></Suspense>
      },
      {
        path: 'fellow',
        element: <Suspense fallback={<Loader />}><LazyAdminFellow /></Suspense>
      },
      {
        path: 'media',
        element: <Suspense fallback={<Loader />}><LazyAdminMedia /></Suspense>
      },
      {
        path: 'blog/:id',
        element: <Suspense fallback={<Loader />}><AdminDetails /></Suspense>
      }
    ]
  },
  {
    path: 'education',
    element: <Suspense fallback={<Loader />}><LazyEducation /></Suspense>
  },
  {
    path: '*',
    element: <NotFound />
  }
])

const App = () => {
  return (
    <HelmetProvider>
      <CreateUserContext>
        <RouterProvider router={router} />
      </CreateUserContext>
    </HelmetProvider>
  )
}

export default App;