import React from "react";
import "./video.scss";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";

export default function Video() {
  const location = useLocation();

  const isActiveLink = (path) => {
    const currentPath = location.pathname;
  
    if (path === "/video") {
      // Check if the current path is exactly "/video" without additional segments
      return currentPath === path;
    } else {
      // Check if the current path starts with "/video/" followed by additional segments
      return currentPath.startsWith(path) && path !== "/video";
    }
  };
  
  return (
    <div className="videoWrapper">
      <div className="videoLinkWrapper">
        <div className="videoTitle">
          <h1>Video</h1>
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
          <input type="text" placeholder="Search videos" />
        </div>
        <div className="videoLinks">
          <ul>
            <Link  className={isActiveLink("/video") ? "active" : ""} rel="stylesheet" href="" to="/video">
              <div className="videoLinkTitle">
                <div className="mainLinkIcon videoHomeIcon">
                  <i
                    style={{
                      backgroundImage:
                        "url(https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/1uYwAduMfJy.png)",
                      backgroundPosition: "-42px -303px",
                      backgroundSize: "auto",
                      width: "20px",
                      height: "20px",
                      backgroundRepeat: "no-repeat",
                      display: "inline-block",
                    }}
                  ></i>
                </div>
                <p>Home</p>
              </div>
            </Link>
            <Link className={isActiveLink("/video/live") ? "active" : ""
              } rel="stylesheet" href="" to="live">
              <div className="videoLinkTitle">
                <div className="mainLinkIcon videoLiveIcon">
                  <i
                    style={{
                      backgroundImage:
                        "url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/dsU5eL8MXPG.png)",
                      backgroundPosition: "0px -63px",
                      backgroundSize: "auto",
                      width: "20px",
                      height: "20px",
                      backgroundRepeat: "no-repeat",
                      display: "inline-block",
                    }}
                  ></i>
                </div>
                <p>Live</p>
              </div>
            </Link>
            <Link className={isActiveLink("/video/reels") ? "active" : ""
              } rel="stylesheet" href="" to="reels">
              <div className="videoLinkTitle">
                <div className="mainLinkIcon videoReelsIcon">
                  <i
                    style={{
                      backgroundImage:
                        "url(https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/8G2HAKRVNeK.png)",
                      backgroundPosition: "0 -71px",
                      backgroundSize: "auto",
                      width: "20px",
                      height: "20px",
                      backgroundRepeat: "no-repeat",
                      display: "inline-block",
                    }}
                  ></i>
                </div>
                <p>Reels</p>
              </div>
            </Link>
            <Link className={isActiveLink("/video/shows") ? "active" : ""
              } rel="stylesheet" href="" to="shows">
              <div className="videoLinkTitle">
                <div className="mainLinkIcon videoShowsIcon">
                  <i
                    style={{
                      backgroundImage:
                        "url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/dsU5eL8MXPG.png)",
                      backgroundPosition: "0 -84px",
                      backgroundSize: "auto",
                      width: "20px",
                      height: "20px",
                      backgroundRepeat: "no-repeat",
                      display: "inline-block",
                    }}
                  ></i>
                </div>
                <p>Shows</p>
              </div>
            </Link>
            <Link className={isActiveLink("/video/explore") ? "active" : ""
              } rel="stylesheet" href="" to="explore">
              <div className="videoLinkTitle">
                <div className="mainLinkIcon videoExploreIcon">
                  <i
                    style={{
                      backgroundImage:
                        "url(https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/8G2HAKRVNeK.png)",
                      backgroundPosition: "0 -302px",
                      backgroundSize: "auto",
                      width: "20px",
                      height: "20px",
                      backgroundRepeat: "no-repeat",
                      display: "inline-block",
                    }}
                  ></i>
                </div>
                <p>Explore</p>
              </div>
            </Link>
            <Link className={isActiveLink("/video/savedvideo") ? "active" : ""
              } rel="stylesheet" href="" to="savedvideo">
              <div className="videoLinkTitle">
                <div className="mainLinkIcon videoSavedIcon">
                  <i
                    style={{
                      backgroundImage:
                        "url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/dsU5eL8MXPG.png)",
                      backgroundPosition: "0 -42px",
                      backgroundSize: "auto",
                      width: "20px",
                      height: "20px",
                      backgroundRepeat: "no-repeat",
                      display: "inline-block",
                    }}
                  ></i>
                </div>
                <p>Saved videos</p>
              </div>
            </Link>
          </ul>
        </div>
        <div className="videoLinkBoxShadow"></div>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}
