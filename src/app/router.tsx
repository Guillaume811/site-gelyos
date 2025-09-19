import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import RootLayout from '@/app/layout/RootLayout'

// Lazy pages
const Home = lazy(() => import('@/pages/Home'))
const Services = lazy(() => import('@/pages/Services'))
const About = lazy(() => import('@/pages/About'))
const Portfolio = lazy(() => import('@/pages/Portfolio'))
const Blog = lazy(() => import('@/pages/Blog'))
const Contact = lazy(() => import('@/pages/Contact'))
const MentionsLegales = lazy(() => import('@/pages/MentionsLegales'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />, // fallback simple (peut être un ErrorBoundary dédié)
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'a-propos', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact', element: <Contact /> },
      { path: 'mentions-legales', element: <MentionsLegales /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default router