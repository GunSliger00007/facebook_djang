import React from 'react'
import { Link, Outlet, useLocation } from "react-router-dom";
import './marketplace.scss'
import { MdOutlineSearch } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

export default function Marketplace() {
  const location = useLocation();

  const isActiveLink = (path) => {
    const currentPath = location.pathname;
  
    if (path === "/marketplace") {
      return currentPath === path;
    } else {
      return currentPath.startsWith(path) && path !== "/marketplace";
    }
  };
  const defaultIconStyle = {
    backgroundImage:'url(https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/th0IYzEVhks.png)',
    backgroundPosition: '0px -264px',
    backgroundSize: 'auto',
    width: '20px',
    height: '20px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
  };
  const categoriesData = [
    { id: 1, name: 'Vehicles',},
    { id: 2, name: 'Vehicles', iconStyle:{backgroundImage:'url(https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/oXOWdvqXuMy.png)', backgroundPosition:'0px -539px'}},
    { id: 1, name: 'Vehicles',},
    { id: 2, name: 'Vehicles', iconStyle:{backgroundImage:'url(https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/oXOWdvqXuMy.png)', backgroundPosition:'0px -539px'}},
    { id: 1, name: 'Vehicles',},
    { id: 2, name: 'Vehicles', iconStyle:{backgroundImage:'url(https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/oXOWdvqXuMy.png)', backgroundPosition:'0px -539px'}},
  ];
  return (
    <div className='marketplaceWrapper'>
      <div className="marketplaceLinkWrapper">
      <div className="videoTitle">
          <h1>Marketplace</h1>
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
          <input type="text" placeholder="Search marketplace" />
        </div>
        <div className="categoryallwrapper">
        <div className="marketplaceLinks">
        <ul >
          <Link className={isActiveLink("/marketplace") ? "active" : ""} to='/marketplace'> 
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
            <p>Browse all</p>
          </div>
          </Link>
          <Link className={isActiveLink("/marketplace/notification") ? "active" : ""} to='notification'> 
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
            <p>Notification</p>
            </div>
          </Link>
          <Link className={isActiveLink("/marketplace/inbox") ? "active" : ""} to='inbox'>  <div className="marketplaceLinkTitle">
            <div className="mainLinkIcon">
              <i style={{       backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/KrOAGdRSK5z.png)',
                backgroundPosition: '0px -352px',
                backgroundSize: 'auto',
                width: '20px',
                height: '20px',
                backgroundRepeat: 'no-repeat',
                display: 'inline-block',}}></i>
            </div>
            <p>Inbox</p>
            </div>
            </Link>
          <Link className={isActiveLink("/marketplace/buying") ? "active" : ""} to='buying'> <div className="marketplaceLinkTitle">
            <div className="mainLinkIcon">
              <i style={{ backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/KrOAGdRSK5z.png)',
              backgroundPosition: '0px -352px',
              backgroundSize: 'auto',
              width: '20px',
              height: '20px',
              backgroundRepeat: 'no-repeat',
              display: 'inline-block',}}></i>
            </div>
            <p>Buying</p>
            </div>
            </Link>
          <Link className={isActiveLink("/marketplace/selling") ? "active" : ""} to='selling'> <div className="marketplaceLinkTitle">
            <div className="mainLinkIcon">
              <i style={{backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/TflxFMuQyRs.png)',
              backgroundPosition: '0px -493px',
              backgroundSize: 'auto',
              width: '20px',
              height: '20px',
              backgroundRepeat: 'no-repeat',
              display: 'inline-block',}}></i>
            </div>
            <p>Selling</p>
            </div></Link>
        </ul>
        </div>
        <div className="createNewList">
          <button><i><FaPlus /></i>Create new listing</button>
        </div>
        <div className="filterWrapper">
          <div className="divider"></div>
          <div className="filterText">
          <h3>Filters</h3>
              <span>Kathmandu, Nepal . Within 65 Kilometers</span>
          </div>  
          <div className="divider"></div>
        </div>
        <div className="categoriesWrapper">
          <div className="categoryTitle">
            <h3>Category</h3>
          </div>
          <ul>
            {categoriesData.map((category) =>(
                <li>
                <a href="#">
                  <div className="categoriesList">
                    <div className="frontIcon">
                    <i style={{
                  ...defaultIconStyle,
                  ...category.iconStyle,
                }}></i>
                    </div>
                    <p>{category.name}</p>
                  </div>
                </a>
                </li>
            ))}
           
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
