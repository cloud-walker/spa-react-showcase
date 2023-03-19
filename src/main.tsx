import {getBySelector} from '@cloudwalker/dom-utils'
import React from 'react'
import ReactDOM from 'react-dom/client'

import {App} from './App'

const run = async () => {
  ReactDOM.createRoot(getBySelector('#root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

run()
