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
    return <h1>Loading...</h1>
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
    
    <h1 className="pageTitle">Restaurants in {restList.Area}</h1>
    {restList.Restaurants.map((rest, i) => {


      return <Link style={{ color: '#2C3531', textDecoration: 'none' }} key={i} to={`./rest/${rest.Id}`}>
        <div className="card">

          <h2>RANDOM IMAGE</h2>
          <div className="container">
            <h1 className="cardTitle">{rest.Name}</h1>
          </div>
          <ul>
            {console.log(rest.Cuisines)}
            {rest.Cuisines.map((cuisine, i) => {
              return <li key={i}>
                {cuisine.Name}
              </li>
            })}
          </ul>
        </div>

      </Link>

    })}
  </section>


}


export default Restlist