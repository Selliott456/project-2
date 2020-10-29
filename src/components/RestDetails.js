import React, { useEffect, useState } from 'react'
import StarRatingComponent from 'react-star-rating-component'

const RestDetails = ({ rest }) => {
  const [starRating, updateStarRating] = useState(0)

  if (starRating === 0) {
    updateStarRating(rest.RatingStars)
  }
  
  console.log(rest)
  return <section>
    <h1>{rest.Name}</h1>
    <img src={rest.LogoUrl} alt="logo" />
    <div>
      <h3>Address</h3>
      <h4>{rest.Address.FirstLine}, {rest.Address.City}, {rest.Address.Postcode}</h4>

    </div>
    <div>
      <h3>Cuisines</h3>
      <p>
        {rest.Cuisines.map((cuisine, i) => {
          if (i === rest.Cuisines.length - 1) {
            return <span key={i}>{cuisine.Name}</span>
          }
          return <span key={i}>{cuisine.Name} & </span>
        })}
      </p>
    </div>
    <div>
      <h3>Fry Rating:</h3>
      <StarRatingComponent
        name={rest.RatingStars}
        editing={false}
        starCount={6}
        value={starRating}
      />
    </div>
  </section>
}

export default RestDetails