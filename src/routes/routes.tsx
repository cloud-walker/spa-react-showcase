import {Navigate, Outlet, RouteObject} from 'react-router-dom'

import * as issuesRoute from './issues'
import * as loginRoute from './login'

const redirectToLogin = <Navigate to="/login" replace />

const Protected = () => {
  if (localStorage.getItem('asdf') == null) {
    return redirectToLogin
  }
  return <Outlet />
}

export const routes = [
  {
    path: '/',
    element: redirectToLogin,
  },
  {path: '/login', ...loginRoute},
  {
    element: <Protected />,
    children: [
      {
        path: '/issues',
        ...issuesRoute,
        children: [{path: ':id_issue', ...issuesRoute}],
      },
    ],
  },
] satisfies RouteObject[]

export const href = {
  login: '/login',
  issues: '/issues',
} as const
export type href = keyof typeof href
