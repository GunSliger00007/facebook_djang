import React from 'react'
import './live.scss'
import { IoEye } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Livethumb from '../../../../../asssets/liveThumb.png'
import Livevideo from '../../../../../asssets/live/livevideo.png'

export default function live() {
  return (
    <div className='liveVideosWrapper'>
      <div className="livescreen">
        <div className="videolive">
        <img src={Livevideo} alt="" height={'100%'}
        width={'100%'} style={{objectFit:'cover'}}/>
          <div className="liveTopHead">
            <div className="liveCount">
              <p>LIVE</p>
              <div className="liveNumber">
              <IoEye />
              <span>91</span>
              </div>
            </div>
            <i><HiOutlineDotsHorizontal /></i>
          </div>
          <div className="liveDescription">
            <div className="Thumb">
              <img src={Livethumb} alt="" />
            </div>
            <div className="liveTitle">
              <span>Live: Latest on M6.2 earthquake in NW China's Gansu Province</span>
              <li><a href='#'>CGTN</a></li>
            </div>
          </div>
        </div>
        <div className="commentlikescontainer">
            <div className="reactlinks">
              <ul>
              <li>
                        <div className="reactBtn">
                            <i style={{ backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/OB3reRsjuUc.png)',
                            backgroundPosition: '0px -718px',
                            backgroundSize: 'auto',
                            width: '20px',
                            height: '20px',
                            backgroundRepeat: 'no-repeat',
                            display: 'inline-block'}}></i>
                            Like
                            </div>
                    </li>
                    <li>
                        <div className="reactBtn">
                            <i style={{ backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/OB3reRsjuUc.png)',
                            backgroundPosition: '0px -529px',
                            backgroundSize: 'auto',
                            width: '20px',
                            height: '20px',
                            backgroundRepeat: 'no-repeat',
                            display: 'inline-block'}}></i>
                            Comment
                            </div>
                    </li>
                    <li>
                        <div className="reactBtn">
                            <i style={{ backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/OB3reRsjuUc.png)',
                            backgroundPosition: '0px -865px',
                            backgroundSize: 'auto',
                            width: '20px',
                            height: '20px',
                            backgroundRepeat: 'no-repeat',
                            display: 'inline-block'}}></i>
                            Share
                            </div>
                    </li>
              </ul>
            </div>
            <div className="commentlikesCounter">
              <ul>
                <li className="totalLikes">
                  <p>275 likes</p>
                </li>
                <li className="totalcomments">
                  <p>25 comments</p>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}
