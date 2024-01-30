import React from 'react';
import './shows.scss';
import Show1 from '../../../../../asssets/video/shows/show1.jpg';
import Show2 from '../../../../../asssets/video/shows/show2.jpg';
import Showdot1 from '../../../../../asssets/video/shows/show1.1.jpg';
import Showdot2 from '../../../../../asssets/video/shows/show1.2.png';
import Showdot3 from '../../../../../asssets/video/shows/show1.3.jpg';
import Showdot4 from '../../../../../asssets/video/shows/show1.4.png';
import Showdot5 from '../../../../../asssets/video/shows/show1.5.jpg';
import Showdot6 from '../../../../../asssets/video/shows/show1.6.jpg';
import Showdot7 from '../../../../../asssets/video/shows/show1.7.jpg';
import Showdot8 from '../../../../../asssets/video/shows/show1.8.jpg';
import Showdot9 from '../../../../../asssets/video/shows/show1.9.png';
import Showdot10 from '../../../../../asssets/video/shows/show1.10.jpg';


export default function Shows() {
  const showList = {
    friendsShows: [
      {
        id: 1,
        title: 'Friends Show 1',
        image: Show1,
      },
      {
        id: 2,
        title: 'Friends Show 2',
        image: Show2,
      },
      // Add more shows for "Shows Friends Are Following"
    ],
    facebookOriginals: [
      {
        id: 3,
        title: 'Facebook Original 1',
        image: Showdot1,
      },
      {
        id: 4,
        title: 'Facebook Original 2',
        image: Showdot2,
      },
      {
        id: 5,
        title: 'Facebook Original 1',
        image: Showdot3,
      },
      {
        id: 6,
        title: 'Facebook Original 2',
        image: Showdot4,
      },
      {
        id: 7,
        title: 'Facebook Original 1',
        image: Showdot5,
      },
      {
        id: 8,
        title: 'Facebook Original 2',
        image: Showdot6,
      },
      {
        id: 9,
        title: 'Facebook Original 1',
        image: Showdot7,
      },
      {
        id: 10,
        title: 'Facebook Original 2',
        image: Showdot8,
      },
      {
        id: 11,
        title: 'Facebook Original 1',
        image: Showdot9,
      },
      {
        id: 12,
        title: 'Facebook Original 2',
        image: Showdot10,
      },
      // Add more shows for "Facebook Originals"
    ],
  };

  return (
    <div className='showsWrapper'>
      {/* Render "Shows Friends Are Following" */}
      <div className="friendsshows">
        <h4>Shows Friends Are Following</h4>
        <div className="shows">
          <ul>
            {showList.friendsShows.map(show => (
              <li key={show.id}>
                <div className="show1">
                  <img src={show.image} alt={show.title} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Render "Facebook Originals" */}
      <div className="friendsshows">
        <h4>Facebook Originals</h4>
        <div className="shows">
          <ul>
            {showList.facebookOriginals.map(show => (
              <li key={show.id}>
                <div className="show1">
                  <img src={show.image} alt={show.title} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
