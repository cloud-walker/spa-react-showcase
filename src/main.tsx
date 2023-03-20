import {getBySelector} from '@cloudwalker/dom-utils'
import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'

import {App} from './App'

const run = async () => {
  ReactDOM.createRoot(getBySelector('#root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

run()
