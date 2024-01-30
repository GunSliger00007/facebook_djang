import React from 'react';
import './videohome.scss';
import { ImEarth } from 'react-icons/im';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import videos from '../../../../../my Data/videos';
import LikeBtn from '../../../../likebtn/likeBtn';

export default function VideoHome() {
  return (
    <div className='videoHomeWrapper'>
      {videos.map((video) => (
        <div key={video.id} className="videoCard">
          <div className="videoHead">
            <div className="uploaderDetail">
              <div className="uploaderThumb">
                <img src={video.videouploaderthumbnail} alt="" />
              </div>
              <div className="uploaderNameWrapper">
                <div className="uploadname">
                  <h6>{video.uploadername}</h6><span>Follow</span>
                </div>
                <p>{video.time} <i className='globeIcon'><ImEarth /></i></p>
              </div>
            </div>
            <i className='dotIcon'><HiOutlineDotsHorizontal /></i>
          </div>
          <div className="videoCaption">
            <h4>{video.caption}</h4>
            <p>{video.description}</p>
          </div>
          <div className="videocontainer">
            <div className="video">
              <video controls src={video.video}></video>
            </div>
          </div>
          <div className="commentlikescontainer">
            <div className="reactlinks">
              <ul className='videoLinkUl'>
              <li className='videoLinkList'>
                        <div className="reactBtn">
                            <LikeBtn/>
                            </div>
                    </li>
                    <li className='videoLinkList'>
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
                    <li className='videoLinkList'>
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
                  <p>{video.reacts}</p>
                </li>
                <li className="totalcomments">
                  <p>{video.comments} comments</p>
                </li>
                <li className="totalviews">
                  <p>{video.views} views</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
