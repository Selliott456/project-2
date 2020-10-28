import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './styles/style.scss'

// import Footer from './components/Footer'
// import Header from './components/Header'
import Main from './components/Main'
import Restlist from './components/Restlist'
import Rest from './components/Rest'


const App = () => (
  <BrowserRouter>
    {/* <Header /> */}
    <Switch>
      <Route exact path="/project-2/restlist/:postcode" component={Restlist}/>
      <Route exact path="/project-2/restlist/rest/:restId" component={Rest}/>
      <Route exact path="/project-2" component={Main}/>
    </Switch>
    {/* <Footer /> */}
  </BrowserRouter>
)

export default App