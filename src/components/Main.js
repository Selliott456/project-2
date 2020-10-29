import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Main = () => {
  const [userInput, updateUserInput] = useState('')
  const [validPostcode, updateValidPostcode] = useState({})
  const [link, updateLink] = useState('')
  const [invalidPostcode, updateInvalidPostcode] = useState('')

  useEffect(() => {

    async function fetchData() {
      const { data } = await axios.get(`https://cors-anywhere.herokuapp.com/api.postcodes.io/postcodes/${userInput}`)
      updateValidPostcode(data)
    }
    fetchData()
  }, [userInput])


  if (validPostcode.status === 200 && link !== `project-2/restlist/${userInput}`) {
    updateInvalidPostcode('')
    updateLink(`project-2/restlist/${userInput}`)
  } else if (userInput.length > 6 && validPostcode.status !== 200 && updateInvalidPostcode === '') {
    updateInvalidPostcode('Please Enter A Valid Postcode.')
    updateLink('')
  }

  console.log(validPostcode)

  return <section>
    <div className="top-section">
      <div className="hero-text">
        <h1 className="mainHeadline"> You want a pizza me?</h1>
      </div>
      <div className="hero-input">
        <small>{invalidPostcode}</small>
        <input className="mainInput" placeholder="Enter postcode" onChange={(event) => updateUserInput(event.target.value)} />
        <button id="homeSearch" >
          < Link style={{ textDecoration: 'none', color: '#D1E8E2' }} to={link} value={userInput} >
            Search By Postcode
          </Link >
        </button>
      </div>
    </div>

  </section>

}


export default Main