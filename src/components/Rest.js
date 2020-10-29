import React, { useState } from 'react'
import RestDetails from './RestDetails'
import RestOrders from './RestOrders'

const Rest = (props) => {
  const [rest, updateRest] = useState({})

  if (!rest.Id) {
    updateRest(props.location.state.rest)
    return <h3>Loading...</h3>
  }

  return <section>
    <RestDetails rest={rest} />
    <RestOrders rest={rest} />
  </section>
}



export default Rest