import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import * as loginRoute from './routes/login'

export const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([{path: '/login', ...loginRoute}])}
    />
  )
}

/**
 * /login
 * /todos
 * /todos/:id
 */
