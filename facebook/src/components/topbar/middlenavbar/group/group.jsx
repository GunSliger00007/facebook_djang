import React from 'react'
import { Link, Outlet, useLocation } from "react-router-dom";
import './group.scss'
import { MdOutlineSearch } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import Grouplistthumb1 from '../../../../asssets/grouplistthumbnail/grouplistthumb1.jpg'
import Grouplistthumb2 from '../../../../asssets/grouplistthumbnail/grouplistthumb2.jpg'
import Grouplistthumb3 from '../../../../asssets/grouplistthumbnail/grouplistthumb3.jpg'
import Grouplistthumb4 from '../../../../asssets/grouplistthumbnail/grouplistthumb4.jpg'

export default function Group() {
  const location = useLocation();

  const isActiveLink = (path) => {
    const currentPath = location.pathname;
  
    if (path === "/group") {
      return currentPath === path;
    } else {
      return currentPath.startsWith(path) && path !== "/group";
    }
  };
  const item = [
    {
      thumb: Grouplistthumb1,
      name: 'Upwork (For Only Upworkers)',
      activetime: '11 hours ago'
    },
    {
      thumb: Grouplistthumb2,
      name: 'UI/UX Designers - Figma Group',
      activetime: '2 hours ago'
    },
    {
      thumb: Grouplistthumb3,
      name: 'Trichandra Love Circle (TLC)',
      activetime: '4 years ago'
    },
    {
      thumb: Grouplistthumb4,
      name: 'Funny Memes',
      activetime: '2 years ago'
    },
  ]
  return (
    <div className='marketplaceWrapper'>
      <div className="marketplaceLinkWrapper">
      <div className="videoTitle">
          <h1>Groups</h1>
          <div className="videosetIcon">
            <i
              style={{
                backgroundImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/BwG518LcWF8.png)",
                backgroundPosition: "0px -507px",
                backgroundSize: "auto",
                width: "20px",
                height: "20px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
          </div>
        </div>
        <div className="searchInput">
          <MdOutlineSearch />
          <input type="text" placeholder="Search groups" />
        </div>
        <div className="categoryallwrapper">
        <div className="marketplaceLinks">
        <ul  className='groupLink'>
          <Link className={isActiveLink("/group") ? "active" : ""} to='/group'> 
          <div className="marketplaceLinkTitle">
            <div className="groupLinkIcon">
              <i style={{backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/YoA7znemBzK.png)',
              backgroundPosition: '0px -256px',
              backgroundSize: 'auto',
              width: '20px',
              height: '20px',
              backgroundRepeat: 'no-repeat',
              display: 'inline-block',}}></i>
            </div>
            <p>Your feed</p>
          </div>
          </Link>
          <Link className={isActiveLink("/group/discover") ? "active" : ""} to='discover'> 
          <div className="marketplaceLinkTitle">
            <div className="groupLinkIcon">
                <i style={{ backgroundImage: 'url(	https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/YoA7znemBzK.png)',
                backgroundPosition: '0px -67px',
                backgroundSize: 'auto',
                width: '20px',
                height: '20px',
                backgroundRepeat: 'no-repeat',
                display: 'inline-block',}}></i>
            </div>
            <p>Discover</p>
            </div>
          </Link>
          <Link className={isActiveLink("/group/yourgroups") ? "active" : ""} to='yourgroups'>  
          <div className="marketplaceLinkTitle">
            <div className="groupLinkIcon">
              <i style={{       backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/YoA7znemBzK.png)',
                backgroundPosition: '0px -193px',
                backgroundSize: 'auto',
                width: '20px',
                height: '20px',
                backgroundRepeat: 'no-repeat',
                display: 'inline-block',}}></i>
            </div>
            <p>Your groups</p>
            </div>
            </Link>
        </ul>
        </div>
        <div className="createNewList">
          <button><i><FaPlus /></i>Create new group</button>
        </div>
      <div className="filterWrapper">
      <div className="divider"></div>
        <div className="filterText groupListHead">
          <h3>Groups you've joined</h3>
          <span className='groupSee'>See all</span>
        </div>
        </div>
        <div className="categoriesWrapper">
        <ul>
          {item.map((item,index) => (
             <li key={index}>
             <a href="#" className='groupLink'>
               <div className="groupTitle">
                 <div className="groupThumb">
                  <img src={item.thumb} alt="" />
                 </div>
                 <div className="groupName">
                   <h5>{item.name}</h5>
                   <p>Last active {item.activetime}</p>
                 </div>
               </div>
             </a>
           </li>
          ))}
         
        </ul>      
      </div>
        </div>
       
      </div>
      <div className="groupOutlet">
        <Outlet/>
      </div>
    </div>
  )
}
