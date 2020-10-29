import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Header = () => {

  return <nav>
    < Link to={'./components/restlist'}> List All Restaurants </Link >
    <Link to={'./components/main'}>Home</Link>
  </nav>
  
}





export default Header