import React, { useEffect, useState } from 'react'

// function OrderDetails({ rest }) {


//   if (rest.IsOpenNow === false) {
//     return <div>
//       <h4>This Location is currently closed.</h4>
//       <p>Opening time: <span>{rest.OpeningTimeLocal}</span></p>
//     </div>
//   } else {
//     if (rest.IsOpenNowForDelivery === true && rest.isOpenNowForCollection) {
//       return
//     }
//   }
// }

const RestOrders = ({ rest }) => {

  const [isOpen, updateIsOpen] = useState('')
  const [collection, updateCollection] = useState('')
  const [delivery, updateDelivery] = useState('')
  const [offers, updateOffers] = useState('')

  if (isOpen === '') {
    if (rest.IsOpenNow === false) {
      updateIsOpen('❌')
      updateDelivery('❌')
      updateCollection('❌')
    } else {
      updateIsOpen('✅')
      if (rest.isOpenNowForCollection === true) {
        updateCollection('✅')
      } else {
        updateCollection('❌')
      }
      if (rest.IsOpenNowForDelivery === true) {
        updateDelivery('✅')
      } else {
        updateDelivery('❌')
      }
    }
  }

  if (offers === '') {
    if (rest.Offers === []) {
      updateOffers('None')
    } else {
      updateOffers(rest.Offers[0].Description)
    }
  }

  return <section>
    <h3>Order Details:</h3>
    <div>
      <ul>
        <li>Open: {isOpen}</li>
        <li>Collection: {collection}</li>
        <li>Delivery: {delivery}</li>
        <DeliveryReadout rest={rest} />
        <li>Offers: 💳 {offers}</li>
        <li>Distance: 📍 {rest.DriveDistance} Miles</li>
      </ul>
    </div>
  </section>
}

const DeliveryReadout = ({ rest }) => {
  const deliveryTime = [rest.DeliveryEtaMinutes.RangeLower, rest.DeliveryEtaMinutes.RangeUpper]

  if (rest.IsOpenNow === false) {
    return <ul>
      <li>Delivery Time: <span>N/A</span></li>
    </ul>

  } else {
    return <ul>
      <li>Delivery Time: <span>{deliveryTime[0]}</span> & <span>{deliveryTime[1]}</span></li>
    </ul>
  }
}

export default RestOrders