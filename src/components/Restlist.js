import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Main from "./Main"

const Restlist = (props) => {

  const postcode = props.match.params.postcode
  const [restList, updateRestList] = useState({})


  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`https://cors-anywhere.herokuapp.com/https://uk.api.just-eat.io/restaurants/bypostcode/${postcode}`)
      updateRestList(data)
    }
    fetchData()
  }, [])

  if (!restList.Restaurants) {
    return <div className="loaderContainer">
      <h1 className="loader"></h1>
      <h3>loading!</h3>
    </div>
  }


  return <section>
    <nav>
      <div className="navLink">
        < Link to={'./components/restlist'} style={{ textDecoration: 'none', color: "#D9B08C" }}> All Restaurants </Link >
      </div>
      <div className="navLink">
        <Link to={'./components/main'} style={{ textDecoration: 'none', color: "#D9B08C" }}>Home</Link>
      </div>
    </nav>

    <section className="desktopView"></section>
    <section className="desktopView"></section>
    <h1 className="pageTitle">Restaurants in {restList.Area}</h1>
    {restList.Restaurants.map((rest, i) => {
      return <Link style={{ color: '#2C3531', textDecoration: 'none' }}
        key={i}
        to={{
          pathname: `/project-2/restlist/rest/${rest.Id}`,
          state: { rest }
        }}
      >
        <div className="card">
          <h1 className="cardTitle">{rest.Name}</h1>
          <img src={rest.LogoUrl} alt="logo" />
          <div className="container">
            <img className="logo" src={rest.LogoUrl} alt="logo" />
            <ul>
              {rest.Cuisines.map((cuisine, i) => {
                return <li key={i}>
                  {cuisine.Name}
                </li>
              })}
            </ul>
          </div>
        </div>

      </Link>

    })}
  </section>


}


export default Restlist