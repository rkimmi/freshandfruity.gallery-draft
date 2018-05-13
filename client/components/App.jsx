import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Another from './Another'

const App = () => ( 
  <Router>
   <div>
      <Route exact path='/' component={Home} />
      <Route path='/gallery' component={Another} />
   </div>
</Router>
)

export default App
