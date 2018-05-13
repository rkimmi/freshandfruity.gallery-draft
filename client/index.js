import React from 'react'
import {render} from 'react-dom'

import reducers from './reducers'
import App from './components/App'


document.addEventListener('DOMContentLoaded', () => {
  render(
      <App />,
    document.getElementById('app')
  )
})

