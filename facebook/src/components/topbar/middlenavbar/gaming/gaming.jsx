import React from 'react'
import { Link, Outlet, useLocation } from "react-router-dom";
import './gaming.scss'
import { MdOutlineSearch } from "react-icons/md";

export default function Gaming() {
  const location = useLocation();

  const isActiveLink = (path) => {
    const currentPath = location.pathname;
  
    if (path === "/gaming") {
      return currentPath === path;
    } else {
      return currentPath.startsWith(path) && path !== "/gaming";
    }
  };
  return (
    <div className='marketplaceWrapper'>
      <div className="marketplaceLinkWrapper">
      <div className="videoTitle">
          <h1>Gamings</h1>
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
          <input type="text" placeholder="Search Gaming" />
        </div>
        <div className="categoryallwrapper">
        <div className="marketplaceLinks">
        <ul >
          <Link className={isActiveLink("/gaming") ? "active" : ""} to='/gaming'> 
          <div className="marketplaceLinkTitle">
            <div className="mainLinkIcon">
              <i style={{backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/TflxFMuQyRs.png)',
              backgroundPosition: '0px -430px',
              backgroundSize: 'auto',
              width: '20px',
              height: '20px',
              backgroundRepeat: 'no-repeat',
              display: 'inline-block',}}></i>
            </div>
            <p>Play Games</p>
          </div>
          </Link>
          <Link className={isActiveLink("/gaming/notifications") ? "active" : ""} to='notifications'> 
          <div className="marketplaceLinkTitle">
            <div className="mainLinkIcon">
                <i style={{ backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/8FH1bEqtFWv.png)',
                backgroundPosition: '0px -58px',
                backgroundSize: 'auto',
                width: '20px',
                height: '20px',
                backgroundRepeat: 'no-repeat',
                display: 'inline-block',}}></i>
            </div>
            <p>Notifications</p>
            </div>
          </Link>
        </ul>
        </div>
        </div>
      
      </div>
      <div className="outlet">
        <Outlet/>
      </div>
    </div>
  )
}
