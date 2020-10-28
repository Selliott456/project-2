import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Main from "./Main"

const Restlist = (props) => {
  // const test = props.match.params.
  // console.log(props.match.params.postcode)
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


  console.log(restList.Restaurants)
  return <section>
    <h1>Hello List</h1>
    {restList.Restaurants.map((rest, i) => {
      
      return <Link key={i} to={`./rest/${rest.Id}`}>
        <h1>{rest.Name}</h1>
        <ul>
          {console.log(rest.Cuisines)}
          {rest.Cuisines.map((cuisine, i) => {
            return <li key={i}>
              {cuisine.Name}
            </li>
          })}
        </ul>
        
      </Link>
    })}
  </section>


}


export default Restlist