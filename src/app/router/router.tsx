import { createBrowserRouter, Navigate, type RouteObject } from 'react-router-dom'
import App from '../App'
// import { Error404 } from '../components/pages/Error404'
import { Organizations } from '../../pages/organizations/Organizations.tsx'
import { Contractors } from '../../pages/contractors/Contractors.tsx'
import { Clients } from '../../pages/clients/Clients.tsx'
// import { Model } from '../components/pages/Model'
// import Login from '../components/pages/Login'

export const PATH = {
  Organizations: '/organizations',
  Contractors: '/contractors',
  Clients: '/clients',
  MODEL: '/:model/:id',
  ERROR: '/error',
  LOGIN: '/login',
  MAIN_PAGE: '/',
} as const

const publicRoutes: RouteObject[] = [
  {
    path: PATH.Organizations,
    element: <Organizations />,
  },
  {
    path: PATH.Contractors,
    element: <Contractors />,
  },
  {
    path: PATH.Clients,
    element: <Clients />,
  },
  // {
  //   path: PATH.LOGIN,
  //   element: <Login />,
  // },
  // {
  //   path: PATH.MODEL,
  //   element: <Model />,
  // },
  // {
  //   path: PATH.ERROR,
  //   element: <Error404 />,
  // },
  {
    path: PATH.MAIN_PAGE,
    element: <Navigate to={PATH.Organizations} />,
  },
]

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [...publicRoutes],
  },
])
