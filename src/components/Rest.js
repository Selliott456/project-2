import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Rest = (props) => {

  // const restId = props.match.params.restId
  // const [restList, updateRestList] = useState({})
  // const [restaurant, updateRestaurant] = useState({})

  // useEffect(() => {
  //   async function fetchData() {
  //     const { data } = await axios.get(`https://cors-anywhere.herokuapp.com/https://uk.api.just-eat.io/restaurants/bypostcode/${postcode}`)
  //     updateRestList(data)
  //   }
  //   fetchData()
  // }, [])

  console.log(props)
  // console.log(restId)
  
  return <h1>Hello Rest</h1>
}


export default Rest