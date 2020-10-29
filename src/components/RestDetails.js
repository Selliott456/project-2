import React, { useEffect, useState } from 'react'
import StarRatingComponent from 'react-star-rating-component'

const RestDetails = ({ rest }) => {
  const [starRating, updateStarRating] = useState(0)

  if (starRating === 0) {
    updateStarRating(rest.RatingStars)
  }

  return <section >
    <h1 className="cardTitle">{rest.Name}</h1>
    <img src={rest.LogoUrl} alt="logo" />
    <div id="restDetails">
      <h3>Address</h3>
      <h4>{rest.Address.FirstLine}, {rest.Address.City}, {rest.Address.Postcode}</h4>
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
      <div id="fryRating">
        <h3>Fry Rating:</h3>
        <StarRatingComponent
          name={rest.Name}
          editing={false}
          starCount={6}
          value={starRating}
        /> <br /><small>From {rest.NumberOfRatings} reviews.</small>
      </div>

    </div>
  </section>
}

export default RestDetails