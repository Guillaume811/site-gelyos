import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import RootLayout from '@/app/layout/RootLayout'

// Lazy pages
const Home = lazy(() => import('@/pages/Home/Home'))
const Services = lazy(() => import('@/pages/Services/Services'))
const About = lazy(() => import('@/pages/About/About'))
const Portfolio = lazy(() => import('@/pages/Portfolio/Portfolio'))
/* const Blog = lazy(() => import('@/pages/Blog/Blog')) */
const Contact = lazy(() => import('@/pages/Contact/Contact'))
const MentionsLegales = lazy(() => import('@/pages/MentionsLégales/MentionsLegales'))
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'))

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
      /* { path: 'blog', element: <Blog /> }, */
      { path: 'contact', element: <Contact /> },
      { path: 'mentions-legales', element: <MentionsLegales /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default router