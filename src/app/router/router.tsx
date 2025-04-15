import { createBrowserRouter, Navigate, type RouteObject } from 'react-router-dom'
import App from '../App'
import { Organizations } from '../../pages/organizations/Organizations.tsx'
import { Contractors } from '../../pages/contractors/Contractors.tsx'
import { Clients } from '../../pages/clients/Clients.tsx'

export const PATH = {
  Organizations: '/organizations',
  Contractors: '/contractors',
  Clients: '/clients',
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
