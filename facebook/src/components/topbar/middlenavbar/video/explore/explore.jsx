import React from 'react';
import './explore.scss';

export default function Explore() {
  const defaultStyle = {
    backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/EaQNLQ8ZJu2.png)',
    backgroundPosition: '0px -486px',
    backgroundSize: 'auto',
    width: '20px',
    height: '20px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    marginRight: '5px', // Add spacing between icon and text
  };

  const exploreList = {
    interests: [
      {
        id: 1,
        name: 'Animals and Pets',
        style: {
          ...defaultStyle,
        },
      },
      {
        id: 2,
        name: 'Books & Literature',          
          style: {
            ...defaultStyle,
            backgroundPosition: '0px -129px',
          },
      },
      {
        id: 3,
        name: 'Business, Finance, & Economics',
        style: {
          ...defaultStyle,
          backgroundPosition: '0px 0px',
          backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/rquYqiy5h3W.png)',
        },
      },

      {
        id: 4,
        name: 'Children & Parenting',
         style: {
          ...defaultStyle,
          backgroundPosition: '0px -63px',
          backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/rquYqiy5h3W.png)',
          },
      },
      {
        id: 5,
        name: 'Education & Learning',
         style: {
            ...defaultStyle,
            backgroundPosition: '0px -465px',
          },
      },
      {
        id: 6,
        name: 'Fashion & Style',
         style: {
            ...defaultStyle,
            backgroundPosition: '0px -591px',
          },
      },
      {
        id: 7,
        name: 'Fitness & Workouts',
         style: {
            ...defaultStyle,
            backgroundPosition: '0px -528px',
          },
      },
      {
        id: 8,
        name: 'Food & Drinks',
         style: {
            ...defaultStyle,
            backgroundPosition: '0px -297px',
          },
      },
      {
        id: 9,
        name: 'Games, Puzzles, & Play',
         style: {
            ...defaultStyle,
            backgroundPosition: '0px -318px',
          },
      },
      {
        id: 10,
        name: 'History & Philosophy',
         style: {
            ...defaultStyle,
            backgroundPosition: '0px -129px',
          },
      },
    ],
  };

  return (
    <div className='exploreWrapper'>
      <div className="exploreAll">
        <h5>Interests</h5>
        <div className="exploreLinks">
          <ul>
            {exploreList.interests.map(interest => (
              <li key={interest.id}>
                <i  style={interest.style || defaultStyle}></i>
                {interest.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
