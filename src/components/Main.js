import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  // const [restaurant, udateRestaurant] = useState({})
  const [userInput, updateUserInput] = useState('')

  return <section>
    <input placeholder="Please enter your Postcode" onChange={(event) => updateUserInput(event.target.value)} />
    < Link to={`./restlist/${userInput}`} value={userInput}> Search By Postcode </Link >
  </section>

}


export default Main