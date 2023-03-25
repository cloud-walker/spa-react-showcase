import {Navigate, Outlet, RouteObject} from 'react-router-dom'

const redirectToLogin = <Navigate to="/login" replace />

const Protected = () => {
  if (localStorage.getItem('asdf') == null) {
    return redirectToLogin
  }
  return <Outlet />
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: redirectToLogin,
  },
  {path: '/login', lazy: () => import('./login')},
  {
    element: <Protected />,
    children: [
      {
        path: '/issues',
        lazy: () => import('./issues'),
        children: [{path: ':id_issue', lazy: () => import('./issue')}],
      },
    ],
  },
]

export const href = {
  home: '/',
  login: '/login',
  issues: '/issues',
} as const
export type href = keyof typeof href
