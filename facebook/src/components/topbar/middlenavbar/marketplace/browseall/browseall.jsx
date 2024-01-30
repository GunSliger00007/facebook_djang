import React from 'react'
import './browseall.scss'
import { FaLocationDot } from "react-icons/fa6";
import Saleitem1Thumb from '../../../../../asssets/browseall/saleitem1Thumb.jpg'
import Saleitem2Thumb from '../../../../../asssets/browseall/saleitem2Thumb.jpg'
import Saleitem3Thumb from '../../../../../asssets/browseall/saleitem3Thumb.jpg'
import Saleitem4Thumb from '../../../../../asssets/browseall/saleitem4Thumb.jpg'
import Saleitem5Thumb from '../../../../../asssets/browseall/saleitem5Thumb.jpg'
import Saleitem6Thumb from '../../../../../asssets/browseall/saleitem6Thumb.jpg'

export default function browseall() {
  const items = [
    {
      thumb: Saleitem1Thumb,
      price: "FREE",
      location: "Bhaktapur",
      
    },
    {
      thumb: Saleitem2Thumb,
      price: "NPR 150,000",
      name: "iPhone 14 Pro max(256gb)",
      location: "Kathmandu, Nepal",
      
    },
    {
      thumb: Saleitem3Thumb,
      price: "NPR197",
      name: "Modular new house on sale at Hetauda 3 Basamadi",
      location: "Hetauda",
      
    },
    {
      thumb: Saleitem4Thumb,
      price: "NPR3,500",
      name: "Pure pakistan leather on low price",
      location: "Kathmandu, Nepal",
      
    },
    {
      thumb: Saleitem5Thumb,
      price: "NPR5",
      name: "फुल कमर्सियल 5 आनाको 24 कोठाको महिनामा 2 लाख भाडा आइरहेको घर जम्मा 5 करोड मात्रै भत्केको पुलमा मेन छ",
      location: "Kathmandu, Nepal",
      
    },
    {
      thumb: Saleitem6Thumb,
      price: "NPR255",
      name: "26 feet road  vako 3 anako 3.5 talla 11 room ekdam sasto ma 255 rate [hidden information]",
      location: "Lalitpur, Nepal",
      
    },
  ];
  return (
    <div className='browseallWrapper'>
      <div className="browseAllHead">
        <h2>Today's picks</h2>
        <li><a href="#"><div className="locationLink">
          <i><FaLocationDot /></i>
          <div className="locationWrapper">
          <span>Kathmandu</span> <span>65km</span>
          </div>
          </div></a></li>
      </div>
      <div className="allItemWrapper">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href='#'>
              <div className="saleItemCard">
                <div className="itemThumb">
                  <img src={item.thumb} alt="" />
                </div>
                <div className="itemDetails">
                  <h5 className="itemPrice">{item.price}</h5>
                  <p className="itemName">{item.name}</p>
                  <span className="location">{item.location}</span>
                  {/* Add more content here as needed */}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}
