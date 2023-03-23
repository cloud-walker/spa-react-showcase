import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'

import * as loginRoute from './routes/login'

export const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {path: '/', element: <Navigate to="/login" replace />},
        {path: '/login', ...loginRoute},
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
