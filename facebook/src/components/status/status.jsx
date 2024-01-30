import React from 'react'
import './status.scss'
import Usersmallimage from '../../asssets/user small image.jpg'

export default function status() {
  return (
    <div className='statusWrapper'>
      <div className="userImageInput">
        <img src= {Usersmallimage} alt="" />
        <div className="statusInput">
            <p>What's on your mind Ani ?</p>
            <div className="inputOverlay"></div>
        </div>
       
      </div>
      <div className="multimediaLinks">
        <ul>
            <li>
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png" alt="" />
                Live video
            </li>
            <li>
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png" alt="" />
                Photo/Video
            </li>
            <li>
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png" alt="" />
                Feeling/activity
            </li>
        </ul>
      </div>
    </div>
  )
}
