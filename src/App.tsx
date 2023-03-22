import {createMemoryRouter, Navigate, RouterProvider} from 'react-router-dom'

import * as loginRoute from './routes/login'

export const App = () => {
  return (
    <RouterProvider
      router={createMemoryRouter([
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
 * /todos
 * /todos/:id
 *
 * user visit the app
 */
