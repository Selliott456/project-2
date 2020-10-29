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
    <RestDetails rest={rest} />
    <RestOrders rest={rest} />
  </section>
}



export default Rest