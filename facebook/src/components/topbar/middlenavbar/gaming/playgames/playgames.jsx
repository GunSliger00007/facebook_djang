import React from 'react'
import Games from '../../../../../asssets/Notification/games.png'
import './playgames.scss'
export default function playgames() {
  return (
    <div className='playGamesWrapper'>
      <div className="topHead">
        <h2>Games</h2>
        <div className="emptysection">
          <img src={Games} alt="" />
          <h3>You have no Games</h3>
        </div>
      </div>
    </div>
  )
}
