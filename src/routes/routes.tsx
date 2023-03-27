import {Navigate, RouteObject} from 'react-router-dom'

export const href = {
  home: '/',
  login: '/login',
  issues: '/issues',
} as const
export type href = keyof typeof href

export const routes: RouteObject[] = [
  {path: '/', element: <Navigate to={href.login} replace />},
  {path: '/login', lazy: () => import('./login')},
  {
    path: '/issues',
    lazy: () => import('./issues'),
    children: [{path: ':id_issue', lazy: () => import('./issue')}],
  },
]
