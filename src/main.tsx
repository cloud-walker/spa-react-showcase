import {getBySelector} from '@cloudwalker/dom-utils'
import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import {routes} from './routes'

const run = async () => {
  ReactDOM.createRoot(getBySelector('#root')).render(
    <StrictMode>
      <RouterProvider router={createBrowserRouter(routes)} />
    </StrictMode>,
  )
}

run()
