import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return <nav>
    <div className="navLink">
      <Link to={'/project-2/main'} style={{ textDecoration: 'none', color: '#D9B08C' }}>Home</Link>
    </div>
  </nav>

}





export default Header