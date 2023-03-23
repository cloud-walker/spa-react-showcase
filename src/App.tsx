import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom'

import * as issueRoute from './routes/issue'
import * as issuesRoute from './routes/issues'
import * as loginRoute from './routes/login'

const redirectToLogin = <Navigate to="/login" replace />

const Protected = () => {
  if (localStorage.getItem('asdf') == null) {
    return redirectToLogin
  }
  return <Outlet />
}

export const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {path: '/', element: redirectToLogin},
        {path: '/login', ...loginRoute},
        {
          element: <Protected />,
          children: [
            {
              path: '/issues',
              ...issuesRoute,
              children: [{path: ':id_issue', ...issueRoute}],
            },
          ],
        },
      ])}
    />
  )
}

/**
 * # Public
 * /login
 *
 * # Private
 * /issues
 * /issue/:id
 *
 * user visit the app
 */
