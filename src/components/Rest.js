import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RestDetails from './RestDetails'
import RestOrders from './RestOrders'

const Rest = (props) => {
  const [rest, updateRest] = useState({})
  const [isOpen, updateIsOpen] = useState(null)

  if (!rest.Id) {
    updateRest(props.location.state.rest)
    return <h3>Loading...</h3>
  }


  if (isOpen === null) {
    updateIsOpen
  }


  return <section>
    <nav>
      <div className="navLink">
        < Link to={'/project-2/restlist'} style={{ textDecoration: 'none', color: '#D9B08C' }}> All Restaurants </Link >
      </div>
      <div className="navLink">
        <Link to={'/project-2/main'} style={{ textDecoration: 'none', color: '#D9B08C' }}>Home</Link>
      </div>
    </nav>
    <div className="card">
      <div className="detailsOrders">
        <RestDetails rest={rest} />
        <RestOrders rest={rest} />
      </div>
    </div>
  </section>
}



export default Rest