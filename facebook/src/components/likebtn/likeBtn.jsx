import React, { useState } from 'react';
import './likeBtn.scss';
import Haha from '../../asssets/reactGif/haha.gif';
import Wow from '../../asssets/reactGif/wow.gif';
import Angry from '../../asssets/reactGif/angry.gif';
import Sad from '../../asssets/reactGif/sad.gif';
import Love from '../../asssets/reactGif/love.gif';
import Like from '../../asssets/reactGif/like.gif';
import Care from '../../asssets/reactGif/care.gif';
import LoveIcon from '../../asssets/likesicon/loveIcon.svg'
import HahaIcon from '../../asssets/likesicon/haha.svg'
import CareIcon from '../../asssets/likesicon/care.svg'
import AngryIcon from '../../asssets/likesicon/angry.svg'
import WowIcon from '../../asssets/likesicon/wow.svg'
import SadIcon from '../../asssets/likesicon/sad.svg'

export default function LikeBtn() {
  const [currentReaction, setCurrentReaction] = useState('Like');
  const [reacted, setreacted] = useState(false);

  const handleReactionClick = (reaction) => {
    setCurrentReaction(reaction);
    setreacted(reaction === 'Like' ? !reacted : false);
  };
  const reactionIcons = {
    Like: {
      icon: reacted? 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/-wrAdImjKFs.png)' : `url(https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/qpOHhV6EQFx.png)`,
      backgroundPosition: reacted? '0px -616px' : '0px -693px',
      filter : reacted? "invert(27%) sepia(95%) saturate(3116%) hue-rotate(212deg) brightness(99%) contrast(105%)" : 'invert(39%) sepia(21%) saturate(200%) saturate(109.5%) hue-rotate(174deg) brightness(94%) contrast(86%)',
      height:'20px',
      width: '20px',
      },

    Love: {
      icon: `url(${LoveIcon})`,
      backgroundPosition: '0px 0px',
      
    },
    Care: {
      icon: `url(${CareIcon})`,
      backgroundPosition: '0px 0px',
    },
    Haha: {
      icon: `url(${HahaIcon})`,
      backgroundPosition: '0px 0px',
    },
    Wow: {
      icon: `url(${WowIcon})`,
      backgroundPosition: '0px 0px',
    },
    Sad: {
      icon: `url(${SadIcon})`,
      backgroundPosition: '0px 0px',
    },
    Angry: {
      icon: `url(${AngryIcon})`,
      backgroundPosition: '0px 0px',
    },
  };

  const iconStyles = {
    backgroundImage: reactionIcons[currentReaction].icon,
    backgroundPosition: reactionIcons[currentReaction].backgroundPosition,
    backgroundSize: 'auto',
    width:  reactionIcons[currentReaction].width || '18px',
    height:  reactionIcons[currentReaction].height || '18px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: reactionIcons[currentReaction].filter || 'none',
    animation: reacted ? 'iconAnime 1s' : 'none',

  };
  
  return (
    <div className='LikeCompo'>
      <div className='likeBtn'>
      <div className="likeIcon">
      <i style={iconStyles}></i>
    </div>
        <p className={`like ${reacted ? 'reacted' : ''} ${currentReaction.toLowerCase()}`} onClick={() => handleReactionClick('Like')}>{currentReaction}</p>
      </div>
      <div className="reactButtonsWrapper">
        <ul>
          <li onClick={() => handleReactionClick('Like')}>
            <div className="gifIcon">
              <img src={Like} alt="Like" />
            </div>
            <span>Like</span>
          </li>
          <li onClick={() => handleReactionClick('Love')}>
            <div className="gifIcon">
              <img src={Love} alt="Love" />
            </div>
            <span>Love</span>
          </li>
          <li onClick={() => handleReactionClick('Care')}>
            <div className="gifIcon">
              <img src={Care} alt="Care" />
            </div>
            <span>Care</span>
          </li>
          <li onClick={() => handleReactionClick('Haha')}>
            <div className="gifIcon">
              <img src={Haha} alt="Haha" />
            </div>
            <span>Haha</span>
          </li>
          <li onClick={() => handleReactionClick('Wow')}>
            <div className="gifIcon">
              <img src={Wow} alt="Wow" />
            </div>
            <span>Wow</span>
          </li>
          <li onClick={() => handleReactionClick('Sad')}>
            <div className="gifIcon">
              <img src={Sad} alt="Sad" />
            </div>
            <span>Sad</span>
          </li>
          <li onClick={() => handleReactionClick('Angry')}>
            <div className="gifIcon">
              <img src={Angry} alt="Angry" />
            </div>
            <span>Angry</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
