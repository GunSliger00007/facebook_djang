import React from 'react';
import './savedvideo.scss';
import { LuChevronRight } from "react-icons/lu";
import Savedvideothumb1 from '../../../../../asssets/video/saved/savedvideothumb.jpg';
import Saveduserthumb from '../../../../../asssets/video/saved/saveduserThumb.jpg';
import { RiPlayFill } from "react-icons/ri";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function SavedVideo() {
  const videoContent1 = [
    {
      id: 1,
      videoThumb: Savedvideothumb1,
      userThumb: Saveduserthumb,
      userName: 'Prena S. Rai',
      uploadedTime: '48 weeks ago',
      videoTitle: '🛐🤌#memepostingnepal',
      totalLikes: '25K',
      totalComments: '502 comments',
      totalViews: '77K views',
    },
    {
      id: 2,
      videoThumb: Savedvideothumb1,
      userThumb: Saveduserthumb,
      userName: 'Prena S. Rai',
      uploadedTime: '48 weeks ago',
      videoTitle: '🛐🤌#memepostingnepal',
      totalLikes: '25K',
      totalComments: '502 comments',
      totalViews: '77K views',
    },
    {
      id: 3,
      videoThumb: Savedvideothumb1,
      userThumb: Saveduserthumb,
      userName: 'Prena S. Rai',
      uploadedTime: '48 weeks ago',
      videoTitle: '🛐🤌#memepostingnepal',
      totalLikes: '25K',
      totalComments: '502 comments',
      totalViews: '77K views',
    },
    // Add more objects for other saved videos
  ];

  return (
    <div className='savedVideoWrapper'>
      <div className="savedTitle">
        <div className="savedPath">
          <p>Video <LuChevronRight /> Saved</p>
        </div>
        <h4>Saved Videos</h4>
      </div>
      <div className="videosSection">
        {videoContent1.map(video => (
          <div className="videoContent1" key={video.id}>
            <div className="savedVideo">
              <img src={video.videoThumb} alt="" />
              <div className="playIcon">
                <i><RiPlayFill /></i>
              </div>
            </div>
            <div className="videoDetail">
              <div className="userDetail">
                <div className="userThumb">
                  <img src={video.userThumb} alt="" />
                </div>
                <div className="userName">
                  <p>{video.userName}</p>
                  <span className='uploadedTime'>{video.uploadedTime}</span>
                </div>
              </div>
              <div className="videoTitle">
                <h5>{video.videoTitle}</h5>
              </div>
              <div className="commentlikesCounter">
                <ul>
                  <li className="totalLikes">
                    <p>{video.totalLikes}</p>
                  </li>
                  <li className="totalcomments">
                    <p>{video.totalComments}</p>
                  </li>
                  <li className="totalviews">
                    <p>{video.totalViews}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="menuIcon">
              <i><HiOutlineDotsHorizontal /></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
