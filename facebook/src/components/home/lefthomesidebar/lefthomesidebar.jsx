import React, { useState } from 'react';
import './lefthomesidebar.scss';
import Usersmallimage from '../../../asssets/user small image.jpg';
import { IoChevronDown } from 'react-icons/io5';
import Internshipleftsidebarlogo from '../../../asssets/internship left sidebar logo.jpg'
import Ballpoollogo from '../../../asssets/8 ball pool logo.png'
import { Link } from 'react-router-dom';
export default function LeftHomeSidebar( props) {
const initialList = [
  { id: 'item1', name: 'Friends' },
  { id: 'item2', name: 'Memories', style: { backgroundPosition: '0px -444px' } },
  { id: 'item3', name: 'Saved',  style: { backgroundPosition: '0px -185px' }  },
  { id: 'item4', name: 'Groups', path: '/group',  style: { backgroundPosition: '0px -37px' }  },
  { id: 'item5', name: 'Video', path: '/video',  style: { backgroundPosition: '0px -518px' }  },
  { id: 'item6', name: 'Marketplace', path: '/marketplace', style: { backgroundPosition: '0px -407px' }  },
  { id: 'item7', name: 'Feeds', style:{backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png)', backgroundRepeat:'no-repeat',backgroundPosition:'0 0'} },
  { id: 'item8', name: 'Events', style:{backgroundImage:'url(https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/vTDQ3deAsEh.png)',backgroundPosition: ' 0 -37px' }},
  // ... More initial items
];
  const fullList = [
    ...initialList,
    { id: 'item9', name: 'Ads Manager', style: {backgroundImage:'url(https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/ATlxuj_J5ty.png)', backgroundPosition:'0 0'} },
    { id: 'item10', name: 'Climate Science Center', style:{backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Jr0q8qKF2-Y.png)', backgroundPosition:'0 0'} },
    { id: 'item11', name: 'Fundraisers', style:{backgroundPosition:'0 -333px'} },
    { id: 'item12', name: 'Gaming Video', path: '/gaming', style:{backgroundImage:'url(https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/fGWbDwbx9W4.png)', backgroundPosition:'0 0'} },
    { id: 'item13', name: 'Messenger', style:{backgroundImage:'url(https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/-CzvP3Vqm08.png)', backgroundPosition:'0 0'} },
    { id: 'item14', name: 'Messenger Kids', style:{backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/6Z9DShdc7zU.png)', backgroundPosition:'0 0'} },
    { id: 'item15', name: 'Order and Payments', style:{backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png)', backgroundPosition:'0 0'} },
    { id: 'item16', name: 'Pages', style:{ backgroundPosition:'0 -111PX'} },
    { id: 'item17', name: 'Play Games', style:{ backgroundPosition:'0 -74PX'} },
    { id: 'item18', name: 'Recent and activity',  style:{backgroundImage:'url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/x2_LFd7gCqg.png)', backgroundPosition:'0 0'} },

    // ... More additional items
  ];

  const [listItems, setListItems] = useState(initialList);
  const [showAll, setShowAll] = useState(false);

  const handleSeeMore = () => {
    setListItems(showAll ? initialList : fullList);
    setShowAll(!showAll);
  };

  return (
    <div className="leftSidebarWrapper" style={props.style}>
      <ul>
        <li>
          <div className="userImage">
            <img
              src={Usersmallimage}
              style={{
                transform: 'scale(.7777)',
                height: '36px',
                width: '36px',
                borderRadius: '50%',
                border: '1px solid #cacaca',
              }}
              alt="User"
            ></img>
            <h5>Ani Sh</h5>
          </div>
        </li>
        {listItems.map((item) => (
          <li key={item.id}>
            <Link to={item.path}>
            <div
              className="listIcon"
              style={{
                backgroundImage: `url(https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png)`,
                backgroundPosition: '0px -296px',
                backgroundSize: 'auto',
                width: '36px',
                height: '36px',
                backgroundRepeat: 'no-repeat',
                display: 'inline-block',
                transform: 'scale(.777)',
                ...(item.style ? item.style : {})
              }}
            ></div>
            <h5>{item.name}</h5>
            </Link>
          </li>
        ))}
        {initialList.length !== fullList.length && (
          <li onClick={handleSeeMore}>
            <div className="seeMoreBtn">
              <div className="downArrowSeemore">
                <IoChevronDown className="downArrow" />
              </div>
              <h5>{showAll ? 'See Less' : 'See More'}</h5>
            </div>
          </li>
        )}
        <div className="shortcutHead">
          <h4>Your shortcuts</h4>
          <div className="editBtn">
            <p>Edit</p>
          </div>
        </div>
        <li>
          <img src={Internshipleftsidebarlogo} alt="" height={'36px'} width={'36px'} style={{border:'1px solid #cacaca', transform: 'scale(.7777)', borderRadius:'10px'}} />
          <h5>Internship in Nepal</h5>
        </li>
        <li>
          <img src={Ballpoollogo} alt="" height={'36px'} width={'36px'} style={{border:'1px solid #cacaca', transform: 'scale(.7777)', borderRadius:'10px'}} />
          <h5>8 Ball Pool</h5>
        </li>
      </ul>
    </div>
  );
}
