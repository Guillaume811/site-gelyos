import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import RootLayout from '@/app/layout/RootLayout'

// Lazy pages
const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />, // fallback simple (peut être un ErrorBoundary dédié)
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default router