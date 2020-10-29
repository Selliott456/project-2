import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Main = () => {
  // const [restaurant, udateRestaurant] = useState({})
  const [userInput, updateUserInput] = useState('')

  return <section>
    <nav>
      <div className="navLink">
        < Link to={'./components/restlist'} style={{ textDecoration: 'none', color: "#D9B08C" }}> All Restaurants </Link >
      </div>
      <div className="navLink">
        <Link to={'./components/main'} style={{ textDecoration: 'none', color: "#D9B08C" }}>Home</Link>
      </div>
    </nav>
    <div className="top-section">
      <div className="hero-text">
        <h1 className="mainHeadline"> You want a pizza me?</h1>
      </div>
      <div className="hero-input">
        <input className="mainInput" placeholder="Enter postcode" onChange={(event) => updateUserInput(event.target.value)} />
        <button id="homeSearch">< Link to={`./restlist/${userInput}`} value={userInput} style={{ textDecoration: 'none', color: "#D1E8E2" }}> Search By Postcode </Link ></button>
      </div>
    </div>

  </section>

}


export default Main